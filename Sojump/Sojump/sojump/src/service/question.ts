import instance from "./base";
import { ResponseData } from "./base";

interface SearchOption {
    keyword: string;
}


// 获取单个问卷
export async function getQuestionService(id: string) : Promise<ResponseData> {
    const data = await instance.get(`/api/question/${id}`)

    return data;
}


// 创建问卷
// 后端返回一个新问卷的id，根据该id跳转到问卷编辑(新建)页面
export async function createQuestionService() : Promise<ResponseData> {
    const data = await instance.post(`/api/question`);
    return data;
}

// 获取(查询)问卷列表
export async function getQuestionListService(option : Partial<SearchOption> = {}) : Promise<ResponseData> {
    const data = await instance.get(`/api/question-list`, {
        params : option,
    });
    return data;
}