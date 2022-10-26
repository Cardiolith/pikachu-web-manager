import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, FormOutlined, LockOutlined } from '@ant-design/icons';
import routes from '../../../../config/routes';
import './index.less';

const IconMap = {
    dashboard: <DashboardOutlined />,
    cms: <FormOutlined />,
    authority: <LockOutlined />
}

const loopMenuItem = menus => {
    return menus.filter(m => (m.label != undefined)).map(({ path, name, label, icon, subs, component, ...item }) => {
        return ({
            ...item,
            key: name,
            label: component ? <Link to={path}>{label}</Link> : <span>{label}</span>,
            icon: icon && IconMap[icon],
            children: subs && loopMenuItem(subs)
        })
    })
}

const menuItems = loopMenuItem(routes);

const Sider = ({ }) => {

    return (
        <Layout.Sider
            className='pika-sider' 
            collapsible>
            <Menu
                className='pika-menu'
                mode='inline'
                items={menuItems} />
        </Layout.Sider>
    );
};

export default Sider;