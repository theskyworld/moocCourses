/**
 * @description 当前问卷中QuestionTitle组件的配置，根据该配置动态生成该组件
 */
import QuestionTitle, {defaultQuestionTitleProps} from "./index";


export default {
    title: "输入框",
    type: "questionTitle", // 与后端中定义的一致
    Component: QuestionTitle,
    defaultProps : defaultQuestionTitleProps,
}