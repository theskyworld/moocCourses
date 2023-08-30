import React, { FC } from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
const EditIndex: FC = () => {

    const { isLoading, questionData } = useLoadQuestionData();

    return (
        <>
            <h3>EditPage</h3>
            <p>{ isLoading ? "Loading..." : JSON.stringify(questionData)}</p>
        </>
    )
}

export default EditIndex;