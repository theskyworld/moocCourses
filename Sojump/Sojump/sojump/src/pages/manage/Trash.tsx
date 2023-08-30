import React, { FC, useEffect, useState } from "react";
import styles from "./List.module.scss";
import { Typography, Empty, Table, Tag, Button, Space, Modal, message, Spin } from "antd";
import { useTitle } from "ahooks";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Question } from "./List";
import useSearchQuestionList from "../../hooks/useSearchQuestionList";
import CommonPagination from "../../components/CommonPagination";


const Trash: FC = () => {
    const [questionList, setQuestionList] = useState<Question[]>([]);
    const [selectedQuestionIds, setSelectedQuestionIds] = useState<string[]>([]);
    const { Title } = Typography;
    const { confirm } = Modal;
    useTitle("V问卷-回收站");

    const { data, loading, error } = useSearchQuestionList({ isDeleted: true });
    const { list, total } = data || {};
    useEffect(() => {
        if (list) {
            setQuestionList(list);
        }
    }, [list])
    function deleteSojumpModal() {
        confirm({
            title: "确定彻底删除该问卷?",
            icon: <ExclamationCircleOutlined />,
            okText: "确定",
            cancelText: "取消",
            content: "删除后不可找回!",
            onOk: () => {
                message.success(`删除${JSON.stringify(selectedQuestionIds)}问卷成功`)
            }
        })
    }

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
                {
                    loading && (
                        <div style={{ textAlign: "center" }}>
                            <Spin tip="加载中..." size="large">
                                <div className="content" />
                            </Spin>
                        </div>
                    )
                }
                {!loading && questionList.length === 0 && <Empty description="暂无数据"></Empty>}
                {!loading && questionList.length > 0 && (<>
                    {selectedQuestionIds.length > 0 && (<div style={{ marginBottom: "16px" }}>
                        <Space>
                            <Button type="primary">恢复</Button>
                            <Button danger onClick={deleteSojumpModal}>彻底删除</Button>
                        </Space>
                    </div>)}
                    <Table dataSource={questionList} columns={tableColumns} pagination={false} rowKey={(question) => question.id} rowSelection={{
                        type: "checkbox",
                        onChange: (selectedRowKeys) => {
                            setSelectedQuestionIds(selectedRowKeys as string[]);
                        }
                    }}></Table>
                </>)}
            </div>
            <div className={styles.footer}>
                {!loading && <CommonPagination total={total}></CommonPagination>}
            </div>
        </>
    )
}

export default Trash;