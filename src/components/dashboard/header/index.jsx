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
                <Row>
                    <Col span={2}>
                        <Button onClick={toggleSiderCollapsed}>
                            {siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>
                    </Col>
                    <Col span={1} 
                        offset={18}
                        className='pika-header-icons'>
                        <Space>
                            <SearchOutlined />
                            <QuestionOutlined />
                        </Space>
                    </Col>
                    <Col span={2}
                        className='pika-header-user'>
                        <UserSpan />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PikaHeader;