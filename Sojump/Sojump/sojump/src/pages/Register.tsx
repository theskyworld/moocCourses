import { UserAddOutlined } from "@ant-design/icons";
import { Typography, Space, Form, Input, Button } from "antd";
import { stringify } from "querystring";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LOGIN_URL } from "../assets/ts/constants";
import styles from "./Register.module.scss";



const Register: FC = () => {
    const { Title } = Typography;



    function onFinish(values: any) {
        // 获取表单中提交的数据
        console.log(values)
    }


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <Space style={{ margin: "10px", transform: "translateX(12px)" }}>
                        <Title level={2}>
                            <UserAddOutlined />
                        </Title>
                        <Title level={2}>注册新用户</Title>
                    </Space>
                </div>
                <div>
                    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
                        <Form.Item label="用户名" name="username" rules={[
                            {
                                required: true,
                                message: "请输入用户名!"
                            },
                            {
                                type: 'string',
                                min: 5,
                                max: 20,
                                message: "字符长度在5-20之间"
                            },
                            {
                                pattern: /^\w+$/,
                                message: "只能包含字母、数字和下划线"
                            }
                        ]}>
                            <Input autoComplete="true" />
                        </Form.Item>
                        <Form.Item label="密&nbsp;&nbsp;&nbsp;&nbsp;码" name="password" rules={[
                            {
                                required: true,
                                message: "请输入密码!"
                            }
                        ]}>
                            <Input.Password autoComplete="true" />
                        </Form.Item>
                        <Form.Item label="确认密码" name="confirmPassword" dependencies={["password"]} rules={[
                            {
                                required: true,
                                message: "请输入密码!"
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("两次输入的密码不一致"));
                                }
                            })
                        ]}>
                            <Input.Password autoComplete="true" />
                        </Form.Item>
                        <Form.Item style={{ width: "300px" }} wrapperCol={{ span: 16, offset: 6 }}>
                            <Space>
                                <Button type="primary" htmlType="submit" >注册</Button>
                                <Link to={LOGIN_URL} >已有账户,直接登录</Link>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Register;
