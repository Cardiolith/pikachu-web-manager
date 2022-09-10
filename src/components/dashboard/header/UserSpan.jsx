import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';

class UserSpan extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Avatar icon={<UserOutlined />} />
                <span style={{marginLeft: 10}}>username</span>
            </div>
        )
    }
}

export default UserSpan;