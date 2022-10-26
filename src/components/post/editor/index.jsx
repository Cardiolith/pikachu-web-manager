import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Upload, Space } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ContentHeader from "../../layout/content/Header";
import MarkdownEditor from "../../markdown/Editor";
import './index.less';

export default function PostEditor({ }) {

    const { id } = useParams();

    useEffect(() => {
        console.log('getPost')
    }, [id]);

    const [title, setTitle] = useState('');

    return (
        <div className="post-editor">
            <ContentHeader title={id ? "编辑博客" : "新建博客"} />
            <div className="edit-content">
                <Input
                    bordered={false}
                    className="title-input"
                    placeholder="请输入标题" />
                <Divider />
                <MarkdownEditor style={{ margin: "12px 0 12px" }} />
                <Divider />
                <Form style={{marginTop: 20}}> 
                    <Form.Item label="封面">
                        <Upload listType="picture-card"
                            multiple={false}>
                            <PlusOutlined />
                        </Upload>
                    </Form.Item>
                    <Form.Item label="文章类型">
                    </Form.Item>
                    <Form.Item style={{ textAlign: "right" }}>
                        <Space>
                            <Button type="default">暂存草稿</Button>
                            <Button type="primary">发布</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}