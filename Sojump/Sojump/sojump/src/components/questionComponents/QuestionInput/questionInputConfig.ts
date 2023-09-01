/**
 * @description 当前问卷中QuestionInput组件的配置，根据该配置动态生成该组件
 */
import QuestionInput, {defaultQuestionInputProps} from "./index";


export default {
    title: "输入框",
    type: "questionInput", // 与后端中定义的一致
    Component: QuestionInput,
    defaultProps : defaultQuestionInputProps,
}