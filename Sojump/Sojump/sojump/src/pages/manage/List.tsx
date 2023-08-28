// 列表页组件
import { FC } from "react";
import React, {useState} from "react";
import QuestionCard from "../../components/QuestionCard"
import {produce} from "immer";
import styles from "./List.module.scss";

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

  const [questionList, setQuestionList] = useState(rawQuestionList)

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
            return <QuestionCard id={id} title={title} isPublished={isPublished} isStar={isStar} answerCount={answerCount} createTime={createTime}></QuestionCard>
          })
        }
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
};

export default List;
