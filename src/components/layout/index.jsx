import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import './index.less';
import PikaHeader from './header';
import PikaMenu from './sider';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './../../hooks/useAuth';

const { Header, Content, Sider, Footer } = Layout;

export default function PikaLayout(props) {
    const [siderCollapsed, setSiderCollapsed] = useState(false);

    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='pika-layout'>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={siderCollapsed}
                    trigger={null}>
                    <PikaMenu
                        siderCollapsed={siderCollapsed} />
                </Sider>
                <Layout>
                    <Header>
                        <PikaHeader
                            toggleSiderCollapsed={() => setSiderCollapsed(!siderCollapsed)}
                            siderCollapsed={siderCollapsed} />
                    </Header>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
