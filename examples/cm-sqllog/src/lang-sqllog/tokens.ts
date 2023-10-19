import { ExternalTokenizer, InputStream } from '@lezer/lr';
import {
  BlockComment,
  Identifier,
  Bool,
  Null,
  Keyword,
  Type,
} from './sqllog.grammar.terms';

// 定义了各符号、字母、数字对应的 Ascii 码
const enum Ch {
  Newline = 10, // \n
  Space = 32, // 空格
  DoubleQuote = 34, // "
  Hash = 35, // #
  Dollar = 36, // $
  SingleQuote = 39, // '
  ParenL = 40,
  /* ( */ ParenR = 41 /* ) */,
  Star = 42, // *
  Plus = 43, // +
  Comma = 44, // ,
  Dash = 45, // -
  Dot = 46, // .
  Slash = 47, // /
  Colon = 58, // :
  Semi = 59, // ;
  Question = 63, // ?
  At = 64, // @
  BracketL = 91,
  /* [ */ BracketR = 93 /* ] */,
  Backslash = 92, // \
  Underscore = 95, // _
  Backtick = 96, // `
  BraceL = 123,
  /* { */ BraceR = 125 /* } */,

  A = 65,
  a = 97,
  B = 66,
  b = 98,
  E = 69,
  e = 101,
  F = 70,
  f = 102,
  N = 78,
  n = 110,
  X = 88,
  x = 120,
  Z = 90,
  z = 122,

  _0 = 48,
  _1 = 49,
  _9 = 57,
}

function isAlpha(ch: number) {
  return (
    (ch >= Ch.A && ch <= Ch.Z) ||
    (ch >= Ch.a && ch <= Ch.z) ||
    (ch >= Ch._0 && ch <= Ch._9)
  );
}

function readWord(input: InputStream, result: string): string {
  for (;;) {
    // 所匹配的字符只能是数字、字母和下划线
    if (input.next !== Ch.Underscore && !isAlpha(input.next)) {
      break;
    }
    if (result != null) {
      // eslint-disable-next-line no-param-reassign
      result += String.fromCharCode(input.next);
    }
    input.advance();
  }
  return result;
}

function keywords(keywords: string, types: string) {
  const result: { [name: string]: number } = Object.create(null);
  // 匹配布尔类型
  // eslint-disable-next-line no-multi-assign
  result.true = result.false = Bool;
  // 匹配 Null
  // eslint-disable-next-line no-multi-assign
  result.null = result.unknown = Null;
  // 匹配关键字
  for (const kw of keywords.split(' ')) {
    if (kw) {
      result[kw] = Keyword;
    }
  }
  // 匹配数据类型
  for (const tp of types.split(' ')) {
    if (tp) {
      result[tp] = Type;
    }
  }
  return result;
}

// 定义SQL的数据类型
export const SQLTypes =
  'array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ';
// 定义SQL的关键字
export const SQLKeywords =
  'absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ';

const words = keywords(SQLKeywords, SQLTypes);

export const otherTokens = new ExternalTokenizer(input => {
  // 只有未匹配 token 的内容才会进入此方法

  // next 是当前字符的 Ascii 码
  const { next } = input;
  input.advance();

  if (next === Ch.Slash && input.next === Ch.Star) {
    input.advance();
    // 进行多层匹配处理，如果块注释内存在块注释则认为还是在同一个块注释内
    for (let depth = 1; ; ) {
      const cur: number = input.next;
      if (input.next < 0) {
        break;
      }
      input.advance();
      if (cur === Ch.Star && (input.next as number) === Ch.Slash) {
        depth--;
        input.advance();
        if (!depth) {
          break;
        }
      } else if (cur === Ch.Slash && input.next === Ch.Star) {
        depth++;
        input.advance();
      }
    }
    // 匹配块注释
    input.acceptToken(BlockComment);
  } else if (isAlpha(next)) {
    const word = readWord(input, String.fromCharCode(next));
    // 凡是未匹配上 keywords 方法中定义的规则的都认为是标识符
    input.acceptToken(
      input.next === Ch.Dot
        ? Identifier
        : words[word.toLowerCase()] ?? Identifier,
    );
  }
});
