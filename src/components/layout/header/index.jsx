import React from 'react';
import { Space, Avatar, Layout, Tooltip } from 'antd';
import { SearchOutlined, QuestionOutlined } from '@ant-design/icons';
import './index.less';
import Logo from '../../../../public/icons/pikachu.png'
import UserSpan from './UserSpan';
import { Link } from 'react-router-dom';

export default function Header({ }) {

    return (
        <Layout.Header className='pika-header'>
            <div className='header-logo'>
                <Link to="/">
                    <Space
                        size="middle">
                        <Avatar
                            src={Logo} />
                        <span style={{ paddingTop: "1px" }}>Pikachu</span>
                    </Space>
                </Link>
            </div>
            <div style={{ flex: '1 1 0%' }}>
            </div>
            <div className='header-items'>
                <Space
                    size="middle"
                    wrap>
                    <SearchOutlined />
                    <Tooltip title="查看帮助">

                        <QuestionOutlined />
                    </Tooltip>
                    <UserSpan />
                </Space>
            </div>
        </Layout.Header>
    );
}