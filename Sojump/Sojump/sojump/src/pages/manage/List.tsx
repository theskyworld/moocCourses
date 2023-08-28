// 列表页组件
import { FC } from "react";
import React, {useState} from "react";
import QuestionCard from "../../components/QuestionCard"
import {produce} from "immer";
import styles from "./List.module.scss";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "ahooks";

const rawQuestionList = [
  // 给下面的对象全部添加isStar、answerCount、createTime属性
  {
      id: "q1",
      title: "问卷1",
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createTime: "3月10日 13 : 00",
    },
    {
      id: "q2",
      title: "问卷2",
      isPublished: true,
      isStar: false,
      answerCount: 0,
      createTime: "3月10日 13 : 00",
    },
    {
      id: "q3",
      title: "问卷3",
      isPublished: false,
      isStar: false,
      answerCount: 2,
      createTime: "3月10日 13 : 00",
    },
]

const List: FC = () => {
  // 在不同页面中使用useTitle来修改不同页面对应的标题
  useTitle("V问卷-我的问卷")

  const [questionList, setQuestionList] = useState(rawQuestionList)

  // 获取查询参数
  // 查询参数的参数名和参数值都在路由跳转中定义，以?开头，例如"/manage/list?keyword=123"中查询参数名为keyword，值为123
  const [searchParams] = useSearchParams();
  console.log("keyword : ", searchParams.get("keyword")); // "keyword :  123" 输入的路径为 "/manage/list?keyword=123"

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>我的问卷</div>
        <div className={styles.right}>搜索框</div>
      </div>
      <div className={styles.content}>
        {
          questionList.map(question => {
            const { id, title, isPublished, isStar, answerCount, createTime } = question;
            return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} isStar={isStar} answerCount={answerCount} createTime={createTime}></QuestionCard>
          })
        }
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
};

export default List;
