import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../service/question";

export default function useLoadQuestionData() { 
    const [isLoading, setIsLoading] = useState(false);
    const [questionData, setQuestionData] = useState({});

    const { id = "" } = useParams();


    useEffect(() => {
        setIsLoading(true);
        // 在useEffect中使用异步函数的写法
        async function getQuestionData() {
            const data = await getQuestionService(id);
            setQuestionData(data);
            setIsLoading(false);
        }
        getQuestionData();
    }, [])



    return {
        isLoading,
        questionData
    }
}