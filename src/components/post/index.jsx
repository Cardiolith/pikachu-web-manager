import React, { useState } from 'react';
import './index.less';
import { useEffect } from 'react';
import ContentHeader from '../layout/content/Header';
import { PostService } from '../../services/post/post';
import { Row, Col, Form, Input, Button, Space, Select } from 'antd';
import PostPreviewItem from './PostPreviewItem';
import { useNavigate } from 'react-router-dom';

const postDate = [
    {
        title: '草稿1',
        previewContent: '你好'
    },
    {
        title: '草稿2',
        previewContent: '你好'
    },
    {
        title: '草稿3',
        previewContent: '你好'
    }
];

export default function Post(props) {

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        const data = {
            pageIndex: 1,
            pageSize: 8
        }
        PostService.index(data).then(({ data }) => {
            console.log(data.success);
        });
    });

    return (
        <div className='post'>
            <ContentHeader
                title="博客管理"
                description="管理生成的博客"
                enableBreadCrumb={true} />
            <div className='post-content'>
                <Search handleSearch={(title) => { console.log(title) }} />

                <div className='post-table'>
                    {postDate.map((post, index) => (<PostPreviewItem key={index} {...post} />))}
                </div>
            </div>
        </div>
    )
}

function Search({ handleSearch }) {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('ALL');

    const navigate = useNavigate();

    return (
        <div className='post-search'>
            <Form>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label="标题">
                            <Input value={title} onChange={e => setTitle(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="状态">
                            <Select defaultValue="all">
                                <Option key='all'>全部</Option>
                                <Option key='published'>已发布</Option>
                                <Option key='drafted'>草稿</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{
                        textAlign: "right"
                    }}>
                        <Space>
                            <Button type='primary' onClick={handleSearch(title)}>查找</Button>
                            <Button type="dashed" onClick={() => navigate('/cms/post/writer')}>新建</Button>
                        </Space>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}