import { reactive, ToRefs, toRefs } from "vue";
import axios from "axios";
export interface URLLoaderData<R> {
  result: R | null;
  loading: boolean;
  error: any;
}

function useURLLoader<R>(url: string): ToRefs<URLLoaderData<R>> {
  const data: URLLoaderData<R> = reactive({
    result: null,
    loading: true,
    error: null,
  });

  // 请求数据
  axios
    .get(url)
    .then((value) => {
      data.result = value.data;
    })
    .catch((reason) => {
      data.error = reason;
    })
    .finally(() => {
      data.loading = false;
    });

  // 使用toRefs解决使用时解构响应式丢失问题
  return toRefs(data);
}

export default useURLLoader;
