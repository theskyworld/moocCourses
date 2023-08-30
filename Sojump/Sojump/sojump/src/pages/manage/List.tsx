// 列表页组件
import { FC, useEffect } from "react";
import React, { useState } from "react";
import QuestionCard from "../../components/QuestionCard"
import { produce } from "immer";
import styles from "./List.module.scss";
import { useSearchParams } from "react-router-dom";
import { useRequest, useTitle } from "ahooks";
import { Spin, Typography } from "antd";
import Search from "../../components/Search";
import { SEARCH_PARAM_KEY } from "../../assets/ts/constants";
import { getQuestionListService } from "../../service/question";

interface Question {
  id: string,
  title: string,
  isPublished: boolean,
  isStar: boolean,
  answerCount: number;
  createTime: string,
  isDeleted: boolean;
}

const List: FC = () => {
  // 在不同页面中使用useTitle来修改不同页面对应的标题
  useTitle("V问卷-我的问卷")

  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [searchResultList, setSearchResultList] = useState<Question[]>([]);

  const { Title } = Typography;
  // 获取查询参数
  // 查询参数的参数名和参数值都在路由跳转中定义，以?开头，例如"/manage/list?keyword=123"中查询参数名为keyword，值为123
  const [searchParams] = useSearchParams();
  // console.log("keyword : ", searchParams.get("keyword")); // "keyword :  123" 输入的路径为 "/manage/list?keyword=123"


  // useEffect(() => {
  //   async function getQuestionList() {
  //     const data = await getQuestionListService();
  //     setQuestionList(data.list);
  //     setSearchResultList(data.list);
  //   }
  //   getQuestionList();
  // },[])

  // 或者使用useRequest
  const { loading, data, error } = useRequest(getQuestionListService);
  useEffect(() => {
    if (data) {
      setQuestionList(data.list);
      setSearchResultList(data.list);
    }
  }, [data])

  // 搜索相关
  let searchValue = '';
  useEffect(() => {
    searchValue = searchParams.get(SEARCH_PARAM_KEY) || '';
    setSearchResultList(questionList.filter(question => {
      return question.title.includes(searchValue)
    }));
  }, [searchParams])
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <Search></Search>
        </div>
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
        {
          !loading && searchResultList.length > 0 && searchResultList.map(question => {
            const { id, title, isPublished, isStar, answerCount, createTime } = question;
            return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} isStar={isStar} answerCount={answerCount} createTime={createTime}></QuestionCard>
          })
        }
      </div>
      {/* <div className={styles.footer}>footer</div> */}
    </>
  );
};

export default List;
