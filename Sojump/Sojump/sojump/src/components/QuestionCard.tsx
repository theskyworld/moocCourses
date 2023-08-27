import React, { FC, useEffect } from "react";
import "../assets/css/App.css"


interface QuestionCardProps {
    id: string;
    title: string;
    isPublished: boolean;
    deleteQuestion?: (id: string) => void;
    publishQuestion?: (id: string) => void;
    editQuestion?: (id: string) => void;
}

const QuestionCard: FC<QuestionCardProps> = (props) => {
    const { id, title, isPublished, deleteQuestion, publishQuestion, editQuestion } = props;

    function publish(id: string) {
        publishQuestion && publishQuestion(id);
    };

    function deleteQues (id : string) {
        deleteQuestion && deleteQuestion(id);
    }

    function edit(id : string) {
        editQuestion && editQuestion(id);
    }
    return (
        <div key={id} className="list-item">
            <strong>{title}</strong>
            &nbsp;
            {isPublished ? <span className={isPublished ? "published-span" : ""}>已发布</span> : <span>未发布</span>}
            &nbsp;
            <button onClick={() => publish(id)}>发布问卷</button>
            &nbsp;
            <button onClick={() => edit(id)}>编辑问卷</button>
            &nbsp;
            <button onClick={() => deleteQues(id)}>删除问卷</button>

        </div>
    )
}


export default QuestionCard;