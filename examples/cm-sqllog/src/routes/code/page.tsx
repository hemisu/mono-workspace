/* eslint-disable no-tabs */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { memo } from 'react';
import { linter } from '@codemirror/lint';
import CodeMirror from '@uiw/react-codemirror';
import { SQLLog } from '../../lang-sqllog/sqlLog';

const document = `2023-06-07 15:40:02[GMT+08:00] INFO - Resource Control is active!
2023-06-07 15:40:02[GMT+08:00] INFO - try take resource Lock
2023-06-07 15:40:02[GMT+08:00] WARNING - try take resource Lock
2023-06-07 15:40:02[GMT+08:00] ERROR - try take resource Lock
2023-06-07 15:40:02[GMT+08:00] INFO - take lock success! lock info:ResourceLock{resourceType=[DATABASE], resourceId=[000000], runningJobs=[701664-f_173-j_613-5,701664-f_173-j_612-5,71394...]}
2023-06-07 15:40:02[GMT+08:00] INFO - Starting job j_628 at Wed Jun 07 15:40:02 CST 2023
2023-06-07 15:40:12[GMT+08:00] INFO - Sql_job logs from XXXX:
------[2023-06-07 15:40:03]------

当前表位空,忽略此操作. cost：9 ms

------[2023-06-07 15:40:03]------
jobSuccess callback End.


2023-06-07 15:40:12[GMT+08:00] INFO - SQL[
/*
  * 我是块级注释说明
  * 我是块级注释说明
*/

INSERT INTO courses
SELECT * FROM courses WHERE name17 = 2023-06-06 and name17 = 2023-06-06 and name17=1], affect rows: 0
2023-06-07 15:40:13[GMT+08:00] INFO - Crawl lineage async.
2023-06-07 15:40:13[GMT+08:00] INFO - Finishing job j_628 at 00000000000000 with status SUCCEEDED
2023-06-07 11:40:11[GMT+08:00] INFO - Resource Control is active!
2023-06-07 11:40:11[GMT+08:00] INFO - try take resource Lock
2023-06-07 11:40:11[GMT+08:00] INFO - Parsing executing sql:
create table if not exists blood_b (
    id int,
    name varchar(256),
    age int,
    address text
);


insert into blood_b
select * from blood_a;

create table if not exists blood_f like \`blood_a\`;
2023-06-07 11:40:11[GMT+08:00] INFO - Verifying authorization : user[0000000000] database[0000000000]
2023-06-07 11:40:21[GMT+08:00] INFO - Sql_job logs from XXXX:
------[2023-06-07 11:40:11]------
创建任务：分组id：0;分组排序：0

------[2023-06-07 11:40:15]------
jobSuccess callback Start.

------[2023-06-07 11:40:15]------
start database level metadata sync task [Master]...

------[2023-06-07 11:40:16]------

database table level sync. cost：593 ms

------[2023-06-07 11:40:16]------
jobSuccess callback End.


2023-06-07 11:40:21[GMT+08:00] INFO - SQL[


insert into blood_b
select * from blood_a], affect rows: 0
2023-06-07 11:40:22[GMT+08:00] INFO - Crawl lineage async.
2023-06-07 14:55:00[GMT+08:00] INFO - Parsing executing sql:
/* 请使用当前节点所选择的数据库语法编写SQL */
SELECT * FROM \`ex_customer\`
 LIMIT 20;
2023-06-07 14:55:00[GMT+08:00] INFO - Verifying authorization : user[0000000000] database[0000000000]
2023-06-07 14:55:00[GMT+08:00] INFO - Starting Sql query execution. Query key:SqlAssignmentJob-11111111111111
2023-06-07 14:55:01[GMT+08:00] INFO - Query success! result List:
	customer_id	sex	customer_name	age	province	city	register_time
	1	男	邵**	95	陕西省	宜昌市	1989-04-16 01:00:00
	2	男	丁**	95	重庆市	铜陵市	2011-06-08 18:57:08
	3	男	卢**	92	山东省	晋中市	2010-06-13 18:52:13
	4	女	许**	23	吉林省	怒江傈僳族自治州	2015-11-24 10:17:04
	5	男	戚**	87	广西壮族自治区	大庆市	2011-03-02 03:53:07
	6	男	尹**	57	福建省	岳阳市	2010-04-05 15:16:29
	7	女	嵇**	29	江西省	南平市	2018-11-28 07:20:59
	8	女	丘**	71	浙江省	云浮市	2013-09-16 21:47:46
	9	女	祝**	33	安徽省	省直辖县级行政区划	2013-03-05 08:10:24
	10	男	史**	73	广西壮族自治区	张掖市	2017-10-13 23:25:57
	11	男	邵**	95	陕西省	宜昌市	2010-09-28 17:29:25
	12	男	丁**	95	重庆市	铜陵市	2011-06-08 18:57:08
	13	男	卢**	92	山东省	晋中市	2010-06-13 18:52:13
	14	女	许**	23	吉林省	怒江傈僳族自治州	2015-11-24 10:17:04
	15	男	戚**	87	广西壮族自治区	大庆市	2011-03-02 03:53:07
	16	男	尹**	57	福建省	岳阳市	2010-04-05 15:16:29
	17	女	嵇**	29	江西省	南平市	2018-11-28 07:20:59
	18	女	丘**	71	浙江省	云浮市	2013-09-16 21:47:46
	19	女	祝**	33	安徽省	省直辖县级行政区划	2013-03-05 08:10:24
	20	男	史**	73	广西壮族自治区	张掖市	2017-10-13 23:25:57

2023-06-07 14:55:01[GMT+08:00] INFO - Assigning Node Variables...
2023-06-07 14:55:01[GMT+08:00] INFO - Variable0[q1]: "1"
2023-06-07 14:55:01[GMT+08:00] INFO - Variable0[q1] assigned
2023-06-07 14:55:01[GMT+08:00] INFO - Finishing job j_612 at 0000000000 with status SUCCEEDED
2023-06-07 15:19:41[GMT+08:00] INFO - Resource Control is active!
2023-06-07 15:19:46[GMT+08:00] INFO - Starting to run job.
2023-06-07 15:20:02[GMT+08:00] INFO - Print task detail log.
2023-06-07 15:19:57[GMT+08:00] INFO - Preparing spark sql job...
2023-06-07 15:19:57[GMT+08:00] INFO - Execute spark task with resource: driver cores 2, driver memory 8g, executor number 2, executor cores 2, executor memory 20g
2023-06-07 15:19:57[GMT+08:00] INFO - SQL to execute:
/* 请使用Spark SQL的语法编写SQL，表的引用方式为 alias.table_name */
create table xxxx_mysql.user_test as select uuid() as id, 'zcf' as name;
insert into xxxx_mysql.user_test select uuid(), 'zcf1';
insert into xxxx_mysql.user_test select uuid(), 'zcf2';

2023-06-07 15:19:57[GMT+08:00] INFO - Resolve variables finished:
/* 请使用Spark SQL的语法编写SQL，表的引用方式为 alias.table_name */
create table xxxx_mysql.user_test as select uuid() as id, 'zcf' as name;
insert into xxxx_mysql.user_test select uuid(), 'zcf1';
insert into xxxx_mysql.user_test select uuid(), 'zcf2';

2023-06-07 15:19:57[GMT+08:00] INFO - Parse table names successfully: ["xxxx_mysql.user_test"]

2023-06-07 15:19:57[GMT+08:00] INFO - Parsing used table.

2023-06-07 15:19:58[GMT+08:00] INFO - Prepare task finished.
2023-06-07 15:19:58[GMT+08:00] INFO - Execute spark sql: create database ss_1_2016411_0e29

2023-06-07 15:20:01[GMT+08:00] INFO - Execute spark sql: use ss_1_2016411_0e29

2023-06-07 15:20:01[GMT+08:00] INFO - creating temp views...

2023-06-07 15:20:12[GMT+08:00] INFO - Print task detail log.

2023-06-07 15:20:09[GMT+08:00] INFO - Execute spark sql: INSERT INTO TABLE \`xxxx_mysql_user_test_10753_0\`
SELECT uuid(), 'zcf1'
2023-06-07 15:20:22[GMT+08:00] INFO - Print task detail log.

2023-06-07 15:20:16[GMT+08:00] INFO - Execute spark sql: INSERT INTO TABLE \`xxxx_mysql_user_test_10753_0\`
SELECT uuid(), 'zcf2'

2023-06-07 15:20:17[GMT+08:00] INFO - Execute spark sql: drop database ss_1_2016411_0e29 CASCADE
2023-06-07 15:20:32[GMT+08:00] INFO - Spark sql job completed.
2023-06-07 15:20:32[GMT+08:00] INFO - Crawl lineage async.
2023-06-07 15:19:26[GMT+08:00] INFO - Print task detail log.
2023-06-07 15:19:24[GMT+08:00] INFO - Preparing spark sql job...
2023-06-07 15:19:24[GMT+08:00] INFO - Execute spark task with resource: driver cores 2, driver memory 8g, executor number 2, executor cores 2, executor memory 20g
2023-06-07 15:19:24[GMT+08:00] INFO - SQL to execute:
/* 请使用Spark SQL的语法编写SQL，表的引用方式为 alias.table_name */
create table xxxx_mysql.user_test as select uuid() as id, 'zcf' as name;
insert into xxxx_mysql.user_test select uuid(), 'zcf1';
insert into xxxx_mysql.user_test

2023-06-07 15:19:24[GMT+08:00] INFO - Resolve variables finished:
/* 请使用Spark SQL的语法编写SQL，表的引用方式为 alias.table_name */
create table xxxx_mysql.user_test as select uuid() as id, 'zcf' as name;
insert into xxxxo_mysql.user_test select uuid(), 'zcf1';
insert into xxxx_mysql.user_test

2023-06-07 15:19:24[GMT+08:00] ERROR - Error occur when execute task.
ERROR_MSG: com.xxxxxx.xxxxxx.sql.parser.ParserException: syntax error, error in :'ysql.user_test
', expect SELECT, actual null, pos 215, line 5, column 2, token EOF
2023-06-07 15:19:24[GMT+08:00] INFO - ERROR_MSG: Prepare task failed.
2023-06-07 15:19:26[GMT+08:00] ERROR - Job run failed!
SparkSqlJobProcessException: Execute job failed.
2023-06-07 15:19:26[GMT+08:00] INFO - Finishing job j_10753 at 00000000000000 with status FAILED`;

export default memo(() => {
  // const conRef = useRef<ReactElement>();

  // useEffect(() => {
  //   const state = new EditorView({
  //     // 初始化文本内容
  //     doc: document,
  //     extensions: [
  //       // 所有的基础配置都是通过 basicSetup 实现的，如行号、默认皮肤、高亮样式等等
  //       basicSetup,
  //       // 应用 SQLLog 语言包
  //       SQLLog(),
  //       linter(view => {
  //         console.log(view);

  //         return [
  //           {
  //             from: 0,
  //             to: 10,
  //             message: 'error',
  //             severity: 'error',
  //           },
  //         ];
  //       }),
  //     ],
  //     // 指定渲染容器
  //     parent: conRef.current,
  //   });
  // }, []);

  return (
    <>
      {/* <div className="editor" ref={conRef} /> */}
      <CodeMirror
        value={document}
        extensions={[
          SQLLog(),
          linter(view => {
            console.log(view);

            return [
              {
                from: 0,
                to: 0,
                message: 'error',
                severity: 'error',
              },
            ];
          }),
        ]}
      />
      test
    </>
  );
});
