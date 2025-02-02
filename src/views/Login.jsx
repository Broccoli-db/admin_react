import React from "react";
import { Form, Input } from "antd";
import sty from "./Login.module.scss";
import { useAllState } from "@/utils";
export default function Login(props) {
  const [formObj, setFormObj] = useAllState({
    username: "admin",
    password: "123456",
  });
  const [form] = Form.useForm();
  // 当表单提交成功时，执行此函数
  const onFinish = (values) => {
    // 打印表单提交的值
    console.log("Success:", values);
    // 调用props中的navigate函数，跳转到"/home"页面，并替换当前页面
    props.navigate("/layout", {
      replace: true,
    });
  };
  // 当表单验证失败时，执行此函数
  const onFinishFailed = (errorInfo) => {
    // 打印错误信息
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className={sty.container}>
        <div className={sty.login_wrapper}>
          <div className={sty.title}>Login</div>
          <div>
            <Form
              name="message"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              form={form}
              initialValues={formObj}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入登录账号！",
                  },
                ]}
              >
                <Input placeholder="登录账号" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入登录密码！",
                  },
                ]}
              >
                <Input.Password placeholder="登录密码" />
              </Form.Item>
            </Form>
          </div>
          <div className={sty.btn} onClick={() => form.submit()}>
            Login
          </div>
          <div className={sty.msg}>忘记密码?</div>
        </div>
      </div>
    </>
  );
}
