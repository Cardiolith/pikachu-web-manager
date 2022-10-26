import React, {} from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const Content = ({}) => {

    return (
        <Layout.Content>
            <Outlet />
        </Layout.Content>
    )
};

export default Content;
