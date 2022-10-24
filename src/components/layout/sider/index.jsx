import React, { useState } from "react";
import { DashboardOutlined, FormOutlined, LockOutlined} from '@ant-design/icons';
import { Avatar, Button, Image, Menu, Space } from 'antd';
import './index.less';
import Logo from '../../../../public/icons/pikachu.png';
import { Link } from "react-router-dom";
import menus from '../../../../config/routes';

const IconMap = {
    dashboard: <DashboardOutlined />,
    cms: <FormOutlined />,
    authority: <LockOutlined />
}

const loopMenuItem = menus => {
    return menus.filter(menu => {
        return menu.label != undefined;
    }).map(({ path, name, label, icon, subs, component, ...item }) => {
        return ({
            ...item,
            key: name,
            label: component ? <Link to={path}>{label}</Link>:<span>{label}</span>,
            icon: icon && IconMap[icon],
            children: subs && loopMenuItem(subs)
        })
    })
}

const menuItems = loopMenuItem(menus);

function PikaMenu(props) {

    const [collapsed, setCollapsed] = useState(props.siderCollapsed);
    const [openKeys, setOpenKeys] = useState([]);

    const onOpenChange = (keys) => {
        setOpenKeys(keys);
      };

    return (
        <div className="pika-menu">
            <div className='logo'>
                <Space size="middle"
                    style={{ height: "100%" }}>
                    <Avatar src={
                        <Image src={Logo}
                            preview={false} />}
                        shape="circle"
                        size="large"
                    />
                    {props.siderCollapsed ? null : <span>Pikachu</span>}
                </Space>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={['dashboard']}
                items={menuItems}/>
        </div>
    )
}

export default PikaMenu;