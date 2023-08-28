import React, { FC, useEffect } from "react";
// import "../assets/css/App.css"
import clsx from "clsx";
import styles from "./QuestionCard.module.scss";
import { spawn } from "child_process";
interface QuestionCardProps {
    id: string;
    title: string;
    isPublished: boolean;
    isStar: boolean;
    answerCount: number;
    createTime: string;
    deleteQuestion?: (id: string) => void;
    publishQuestion?: (id: string) => void;
    editQuestion?: (id: string) => void;
}

const QuestionCard: FC<QuestionCardProps> = (props: QuestionCardProps) => {
    const { id, title, isPublished, createTime, answerCount } = props;



    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.left}><a href="">{title}</a></div>
                <div className={styles.right}>
                    {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <button style={{ width: "fit-content", height: "fit-content", padding: "3px", fontSize: "10px", }}>发布</button>}
                    &nbsp;
                    <span>答卷 : {answerCount}</span>
                    &nbsp;
                    <span>{createTime}</span>
                </div>
            </div>
            <div className={styles["button-container"]}>
                <div className={styles["left"]}>
                    <button>编辑问卷</button>
                    <button>数据统计</button>
                </div>
                <div className={styles["right"]}>
                    <button>标星</button>
                    <button>复制</button>
                    <button>删除</button>

                </div>
            </div>
        </div>
    )
}


export default QuestionCard;