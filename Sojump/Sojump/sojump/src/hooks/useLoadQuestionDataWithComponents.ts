import { useDispatch } from 'react-redux';
import { useRequest } from "ahooks";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../service/question";
import { useEffect } from 'react';
import { initComponents } from '../store/componentsReducer';

function useLoadQuestionDataWithComponents() {
    const { id = '' } = useParams();
    const dispatch = useDispatch();

    // 获取问卷信息，包含当前问卷中所包含的组件属性
    const { data, loading, error, run } = useRequest(
        async (id: string) => {
            if (!id) throw new Error("没有问卷id");
            const data = await getQuestionService(id);
            return data;
        }, {
            manual: true,
        }
    );

    useEffect(() => {
        if (!data) return;
        const { title = "", components = [] } = data;

        // 默认选中第一个组件
        let selectedId = "";
        if (components && components.length > 0) {
            selectedId = components[0].fe_id;
        }
        dispatch(initComponents({ components, selectedId}));
    }, [data]);

    useEffect(() => {
        run(id);
    }, [id]);

    return { loading, error };
    
}
export default useLoadQuestionDataWithComponents