// 当前组件对应的右侧栏中属性一栏中对应的组件

import { Checkbox, Form, Input, Select } from "antd";
import { FC, useEffect } from "react";
import { QuestionTitleProps } from "./questionTitle";

const QuestionInputProp: FC<QuestionTitleProps> = (props: QuestionTitleProps) => {
    const { text, level, isCenter } = props;

    // 当在画布中点击选中不同的QuestionTitle组件时，右侧对应的属性组件的text, level, isCenter也进行改变
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({text, level, isCenter })
    }, [text, level, isCenter])

    // 对于QuestionInput对应的属性组件，使用表格进行展示
    return (
        <Form layout="vertical" initialValues={{ text, level, isCenter }} form={form}>
            <Form.Item label="标题内容" name="text" rules={[
                {
                    required: true,
                    message: "请输入标题内容!"
                }
            ]}>
                <Input />
            </Form.Item>
            <Form.Item label="层级" name="level">
                <Select options={[
                    { value: 1, text: 1 },
                    { value: 2, text: 2 },
                    { value: 3, text: 3 },
                    { value: 4, text: 4 },
                    { value: 5, text: 5 },
                ]}></Select>
            </Form.Item>
            <Form.Item name="isCenter" valuePropName="checked">
                <Checkbox>居中显示</Checkbox>
            </Form.Item>
        </Form>
    )
}

export default QuestionInputProp;