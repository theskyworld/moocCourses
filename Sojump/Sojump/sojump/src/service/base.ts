import { message } from "antd";
import axios from "axios";

export interface Response {
    errno: number;
    data?: ResponseData;
    msg?: string;
}
export interface ResponseData {
    [key: string]: any;
}




const instance = axios.create({
    timeout : 10 * 1000,
})

// response拦截器
instance.interceptors.response.use((res) => {
    const response: Response = res.data || {};
    const { errno, data, msg } = response;

    if (errno !== 0) {
        // 存在错误，进行错误提示
        if (msg) {
            message.error(msg);
        }
        throw new Error(msg);
    }

    return data as any
})

export default instance;