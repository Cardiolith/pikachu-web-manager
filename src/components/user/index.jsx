import React from 'react';
import {} from 'antd';
import { UserService } from '../../services/user/user';
import ContentHeader from '../layout/content/Header';

export default function User(props) {


    return (
        <div className='user'>
            <ContentHeader 
                title="用户管理"
                enableBreadcrumb={true} />
        </div>
    )
}
