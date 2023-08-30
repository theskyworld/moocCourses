/**
 * @author tsw
 * @copyright 2023
 * @description 在搜索框中输入关键字进行点击或者回车或者随时搜索时，通过向url中传递keyword信息，向后端获取搜索结果
 *              而不是在已展示的当前页的所有列表数据中根据keyword来过滤出搜索结果
 */
import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_KEY } from "../assets/ts/constants";
import { getQuestionListService } from "../service/question";



export default function useSearchQuestionList() {
    const [searchParams] = useSearchParams();

    const { data, loading, error } = useRequest(
        async () => {
            const keyword = searchParams.get(SEARCH_PARAM_KEY) || '';
            const data = await getQuestionListService({ keyword });
            return data;
        }, {
            refreshDeps: [searchParams], // useRequest执行的依赖，依赖值变化时重新执行
        }
    )

    return {data, loading, error}
}