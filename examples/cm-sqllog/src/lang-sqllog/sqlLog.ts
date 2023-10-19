import {
  foldNodeProp,
  LRLanguage,
  LanguageSupport,
} from '@codemirror/language';
// import { Extension } from '@codemirror/state';
import { styleTags, tags as t } from '@lezer/highlight';
// eslint-disable-next-line node/file-extension-in-import
import { parser } from './sqllog.grammar.js';

const language = LRLanguage.define({
  name: 'SQLLog',
  // 可以直接将 parser 给 parser，使用 parser.configure 可配置缩进、折叠、高亮属性
  parser: parser.configure({
    props: [
      // 配置缩进属性，SQLLog不需要进行编辑，也就没有自动缩进的需要
      // indentNodeProp.add({
      //   Message: continuedIndent()
      // }),
      // 配置折叠属性
      foldNodeProp.add({
        // 对“语法文件”中的 Message 规则（日志信息）进行折叠处理
        Message(tree) {
          return { from: tree.firstChild!.to, to: tree.to };
        },
        // 对“语法文件”中的 BlockComment 规则（块注释）进行折叠处理
        BlockComment(tree) {
          return { from: tree.from + 2, to: tree.to - 2 };
        },
      }),
      // 建立 token 和 style 的映射关系
      styleTags({
        // 将 DateTime token 应用 heading 样式
        DateTime: t.heading,
        // typeName 和 strong 的两个特性会同时生效
        Info: [t.typeName, t.strong],
        Warning: [t.comment, t.strong],
        Error: [t.invalid, t.strong],
        Keyword: t.keyword,
        ErrorMsg: t.invalid,
        Type: t.typeName,
        Builtin: t.name,
        Bool: t.bool,
        Null: t.null,
        Number: t.number,
        String: t.string,
        LineComment: t.lineComment,
        BlockComment: t.blockComment,
      }),
    ],
  }),
});

// 此方法可以直接应用于 EditorView 或 EditorState 中
export function SQLLog() {
  // 使用 LanguageSupport 可以将语言定义和扩展程序绑定在一起，本示例中没有扩展能力，所以没传第二个参数
  return new LanguageSupport(language);
}
