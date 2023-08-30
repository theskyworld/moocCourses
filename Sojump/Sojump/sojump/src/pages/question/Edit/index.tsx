import React, { FC } from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
const EditIndex: FC = () => {

    const { loading, data } = useLoadQuestionData();

    return (
        <>
            <h3>EditPage</h3>
            <p>{ loading ? "Loading..." : JSON.stringify(data)}</p>
        </>
    )
}

export default EditIndex;