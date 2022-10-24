import React from "react";
import { Avatar, Image, Popover, Menu, Select, Divider, Dropdown, Space } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from "../../../services/user/user";
import { useAuth } from '../../../hooks/useAuth';

export default function UserSpan() {
    const { user, logout } = useAuth();

    const userLogout = () => {
        return UserService.logout()
            .then(({ data }) => {
                if (data.success) {
                    logout();
                }
            });
    }

    const userOptions = (<Menu items={
        [
            {
                label: <Link to="/authority/user">个人中心</Link>,
                key: "center",
                icon: <UserOutlined />
            },
            {
                label: "个人设置",
                key: "setting",
                icon: <SettingOutlined />
            },
            {
                type: "divider"
            },
            {
                label: <Link onClick={userLogout}>退出</Link>,
                key: 'quit',
                icon: <LogoutOutlined />
            }
        ]
    }
    />);

    return (
        <Dropdown
            overlay={userOptions}
            trigger={['click']}
            placement="bottom">
            <Space style={{
                display: 'flex',
                cursor: 'pointer'
            }}>
                <Avatar icon={<UserOutlined />} />
                <span style={{ color: "white" }}>{user.username}</span>
                <span style={{ width: 20 }}></span>
            </Space>
        </Dropdown>
    )
}
