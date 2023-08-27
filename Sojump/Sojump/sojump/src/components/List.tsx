// 列表页组件
import { FC } from "react";
import React, {useState} from "react";
import QuestionCard from "./QuestionCard"

const List: FC = () => {

  const [questionList, setQuestionList] = useState([
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
  ])

  function editQuestion(id: string) {
    console.log(id);
  }

  function addQuestion() {
    const r = Math.random().toString().slice(-3);
    setQuestionList([
      ...questionList, {
        id: "q4" + r ,
        title: "问卷" + r,
        isPublished : false,
      }
    ])
  }

  function deleteQuestion(id : string) {
    setQuestionList(questionList.filter(question => question.id !== id));
  }

  function publishQuestion(id: string) {
    setQuestionList(questionList.map((question) => {
      if (question.id !== id) return question;
      return {
        ...question,
        isPublished : true,
      }
    }) as any)
  }
  return (
    <div className="App">
      <h1>问卷列表</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question;
          return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} deleteQuestion={deleteQuestion} publishQuestion={publishQuestion} editQuestion={editQuestion}></QuestionCard>
        })}
      </div>
      <div>
        <button onClick={addQuestion}>添加问卷</button>
      </div>
    </div>
  );
};

export default List;
