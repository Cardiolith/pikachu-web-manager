import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Form, Input, Layout, Button, Space, Avatar, Image, Checkbox } from 'antd';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './index.less';
import { LockOutlined, UserOutlined, GithubOutlined, WeiboCircleOutlined } from "@ant-design/icons";
import Logo from '../../../public/icons/pikachu.png';
import { UserService } from "../../services/user/user";
import { useAuth } from '../../hooks/useAuth';

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [logBtnDisabled, setLogBtnDisabled] = useState(false);

    let { redirectUrl } = useParams();
    const { login } = useAuth();

    const submit = async () => {
        setLogBtnDisabled(true);
        redirectUrl = redirectUrl ? redirectUrl : "/";
        UserService.login({ username: username, password: password })
            .then(({ data }) => {
                if (data.success) {
                    setErrMsg("");
                    UserService.currentUser().then(({ data }) => {
                        if (data.success) {
                            login(data.data);
                        }
                    })
                } else {
                    setErrMsg(data.errMessage);
                }
            }).finally(() => {
                setLogBtnDisabled(false);
            });
    }


    return (
        <Layout className="login">
            <Layout.Header className="header">
            </Layout.Header>
            <Layout.Content className="content">
                <div className="content-top">
                    <Space>
                        <Avatar
                            src={<Image src={Logo} preview={false} />}
                            shape="circle"
                            size="large" />
                        <span style={{ fontSize: 25 }}>Pikachu</span>
                    </Space>
                    <div className="top-desc">
                        Code for Fun
                    </div>
                </div>
                <Form className="form">
                    <Form.Item rules={[
                        {
                            required: true,
                            message: 'Please input website!',
                        },
                    ]}>
                        <Input size="large" prefix={<UserOutlined />} placeholder="用户名" value={username} onChange={e => setUsername(e.target.value)} />
                        {
                            errMsg ? <span style={{ color: "red", marginTop: 5 }}>{errMsg}</span> : ""
                        }
                    </Form.Item>
                    <Form.Item>
                        <Input.Password size="large" prefix={<LockOutlined />} placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} visibilityToggle={true} />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox defaultChecked>自动登录</Checkbox>
                        <Link to="modifyPassword" style={{ float: "right" }}>忘记密码 ?</Link>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            style={{
                                width: "100%"
                            }}
                            htmlType="submit"
                            type="primary"
                            disabled={logBtnDisabled}
                            onClick={submit}>登录</Button>
                    </Form.Item>
                </Form>
            </Layout.Content>
            <Layout.Footer className="footer">
                <Space size="large">
                    <GithubOutlined
                        onClick={e => { window.open("https://github.com/Cardiolith/pikachu-web-manager") }} /><WeiboCircleOutlined />
                </Space>
            </Layout.Footer>
        </Layout>
    )
}

export default Login;