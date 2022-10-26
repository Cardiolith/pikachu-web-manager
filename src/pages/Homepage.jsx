import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { useAuth } from '../hooks/useAuth';
import './Homepage.less';
import Header from '../components/layout/header';
import Sider from '../components/layout/sider';
import Content from '../components/layout/content';

const Homepage = ({ }) => {

    const { user } = useAuth();

    if(!user) {
        return <Navigate to="/login" />
    }

    return (
        <Layout>
            <Header />
            <Layout>
                <Sider /> 
                <Content />
            </Layout>
        </Layout>
    );
}

export default Homepage;