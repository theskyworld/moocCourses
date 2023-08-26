// 列表页组件
import { FC } from "react";
import React from "react";

const List: FC = () => {
  // 问卷列表
  const questionList = [
    {
      id: "q1",
      title: "问卷1",
      isPublished: false,
    },
    {
      id: "q2",
      title: "问卷2",
      isPublished: true,
    },
    {
      id: "q3",
      title: "问卷3",
      isPublished: false,
    },
  ];

  function edit(id: string) {
    console.log(id);
  }

  return (
    <div className="App">
      <h1>问卷列表</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question;
          return (
            <div className="list-item" key={id}>
              <strong>{title}</strong>
              &nbsp;
              {isPublished ? <span style={{ color: "green" }}>已发布</span> : <span>未发布</span>}
              &nbsp;
              <button onClick={() => edit(id)}>编辑问卷</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
