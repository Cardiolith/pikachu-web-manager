import React, { } from "react";
import Icon, { BookOutlined, HomeOutlined, BranchesOutlined, TagOutlined, ControlOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Image, Menu, Space } from 'antd';
import './index.less';
import Logo from '../../../../public/icons/pikachu.png';

export const menuItems = [
    { label: '首页', key: 'homepage', icon: <HomeOutlined /> },
    { label: '文章管理', key: 'post', icon: <BookOutlined /> },
    {
        label: '元数据管理',
        key: 'metadata',
        icon: <BranchesOutlined />,
        children: [
            {
                label: '标签管理',
                key: 'tag',
                icon: <TagOutlined />
            }
        ]
    },
    {
        label: '权限管理',
        key: 'authority',
        icon: <ControlOutlined />,
        children: [
            {
                label: '用户管理',
                key: 'user',
                icon: <UserOutlined />
            }
        ]
    }
];

class PikaMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { siderCollapsed } = this.props;

        return (
            <div className="pika-menu">
                <div className='logo'>
                    <Space size="middle"
                        style={{ height: "100%" }}>
                        <Avatar src={
                            <Image src={Logo}
                                preview={false} />}
                                shape="circle"
                                size="large"
                        />
                        {siderCollapsed ? null : <span>Pikachu</span>}
                    </Space>
                </div>
                <Menu
                    items={menuItems}
                    theme="dark"
                    mode="inline" />
            </div>
        )
    }
}

export default PikaMenu;