import React, { FC, useState } from "react";
import styles from "./List.module.scss";
import { Typography, Empty, Table, Tag } from "antd";
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
const Trash: FC = () => {
    const [questionList, setQuestionList] = useState(rawQuestionList)
    const { Title } = Typography;
    useTitle("V问卷-回收站")

    // 作为表格的列
    const tableColumns = [
        {
            title: "标题",
            dataIndex: "title",
        },
        {
            title: "是否已发布",
            dataIndex: "isPublished",
            render: (isPublished: boolean) => {
                return isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>

            }
        },

        {
            title: "答卷数量",
            dataIndex: "answerCount",
        },
        {
            title: "创建时间",
            dataIndex: "createTime",
        }
    ]
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Title level={3}>回收站</Title>
                </div>
                <div className={styles.right}>搜索框</div>
            </div>
            <div className={styles.content}>
                {questionList.length === 0 && <Empty description="暂无数据"></Empty>}
                {questionList.length > 0 && (<Table dataSource={questionList} columns={tableColumns} pagination={false}></Table>)}
            </div>
        </>
    )
}

export default Trash;