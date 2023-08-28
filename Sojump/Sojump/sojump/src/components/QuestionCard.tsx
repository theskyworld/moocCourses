import React, { FC, useEffect } from "react";
// import "../assets/css/App.css"
import styles from "./QuestionCard.module.scss";
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from "antd";
import { EditOutlined, LineChartOutlined, StarOutlined, CopyOutlined, DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { MANAGE_STAR_URL, QUESTION_EDIT_URL, QUESTION_STAT_URL, } from "../assets/ts/constants";
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
    const { id, title, isPublished, createTime, answerCount, isStar } = props;


    const nav = useNavigate();

    const { confirm } = Modal;

    function copySojump() {
        message.success("执行复制");
    }
    function deleteSojumpModal() {
        confirm({
            title: "确定删除该问卷?",
            icon: <ExclamationCircleOutlined />,
            okText: "确定",
            cancelText: "取消",
            onOk: () => {
                message.success("执行删除")
            }
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.left}>
                    <Space>
                        {isStar && <StarOutlined style={{ color: "red" }}></StarOutlined>}
                        <Link to={isPublished ? `${QUESTION_STAT_URL}/${id}` : `${QUESTION_EDIT_URL}/${id}`}>{title}</Link>
                    </Space>
                </div>
                <div className={styles.right}>
                    <Space>
                        {isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>}
                        &nbsp;
                        <span>答卷 : {answerCount}</span>
                        &nbsp;
                        <span>{createTime}</span>
                    </Space>
                </div>
            </div>
            <Divider style={{ margin: "12px 0" }} />
            <div className={styles["button-container"]}>
                <div className={styles["left"]}>
                    {/* <button>编辑问卷</button>
                    <button>数据统计</button> */}
                    <Space>
                        <Button size="small" icon={<EditOutlined />} onClick={() => { nav(`${QUESTION_EDIT_URL}/${id}`) }}>编辑问卷</Button>
                        <Button size="small" icon={<LineChartOutlined />} onClick={() => { nav(`${QUESTION_STAT_URL}/${id}`) }} disabled={!isPublished}>数据统计</Button>
                    </Space>
                </div>
                <div className={styles["right"]}>
                    <Space>
                        <Button type="text" size="small" icon={<StarOutlined />}>{isStar ? "取消标星" : "标星"}</Button>
                        <Popconfirm title="是否确定复制该问卷?" okText="确定" cancelText="取消" onConfirm={copySojump}>
                            <Button type="text" size="small" icon={<CopyOutlined />}>复制</Button>
                        </Popconfirm>
                        <Button type="text" size="small" icon={<DeleteOutlined />} onClick={deleteSojumpModal}>删除</Button>
                    </Space>

                </div>
            </div>
        </div>
    )
}


export default QuestionCard;