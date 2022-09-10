import React, { useState } from 'react';
import { Layout } from 'antd';
import './index.less';
import PikaHeader from './header';
import PikaMenu from './sider';

const { Header, Content, Sider, Footer } = Layout;

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            siderCollapsed: false
        }
    }

    toggleSiderCollapsed = () => {
        this.setState((state) => ({
            siderCollapsed: !state.siderCollapsed
        }));
    }

    render() {
        return <div className='dashboard'>
            <Layout className='layout' style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={this.state.siderCollapsed}
                    trigger={null}>
                    <PikaMenu
                        siderCollapsed={this.state.siderCollapsed} />
                </Sider>
                <Layout>
                    <Header>
                        <PikaHeader
                            siderCollapsed={this.state.siderCollapsed}
                            toggleSiderCollapsed={this.toggleSiderCollapsed} />
                    </Header>
                    <Content>
                    </Content>
                    <Footer>
                    </Footer>
                </Layout>
            </Layout>
        </div>
    }
}

export default Dashboard;