import { Empty, Typography } from "antd";
import React, { FC, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import styles from "./List.module.scss";
import { useTitle } from "ahooks";

const rawQuestionList = [
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
        isStar: true,
        answerCount: 0,
        createTime: "3月10日 13 : 00",
    },

]
const Star: FC = () => {
    const [questionList, setQuestionList] = useState(rawQuestionList);
    const { Title } = Typography;
    useTitle("V问卷-星标问卷")

    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>星标问卷</Title>
                </div>
                <div className={styles.rightr}>搜索</div>
            </div>
            <div className={styles.content}>
                {questionList.length === 0 && <Empty description="暂无数据"></Empty>}
                {questionList.length > 0 && questionList.map(question => {
                    const { id } = question;
                    return <QuestionCard key={id} {...question}></QuestionCard>
                })}
            </div>
        </>
    )
}

export default Star;