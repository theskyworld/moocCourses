// 定义展示在画布右侧的组件属性

export declare interface QuestionInputProps {
    title?: string;
    placeholder?: string;
    onChange?: (newProps: QuestionInputProps) => void; // 在上级Prop组件中监听当前组件中值的变化
}

