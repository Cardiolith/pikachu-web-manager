import React from 'react';
import { Row, Col, Space, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, QuestionOutlined } from '@ant-design/icons';
import './index.less';
import UserSpan from './UserSpan';
class PikaHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { siderCollapsed, toggleSiderCollapsed } = this.props;

        return (
            <div className='pika-header'>
                <Button onClick={toggleSiderCollapsed}>
                    {siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <div className='content'>
                    <Space size="large" wrap>
                        <SearchOutlined />
                        <QuestionOutlined />
                        <UserSpan />
                    </Space>
                </div>
            </div>
        )
    }
}

export default PikaHeader;