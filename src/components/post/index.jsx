import React from 'react';
import './index.less';
import { useEffect } from 'react';
import ContentHeader from '../layout/content/Header';

export default function Post() {

    return (
        <div className='post'>
            <ContentHeader
                title="博客管理"
                description="管理生成的博客"
                enableBreadCrumb={true} />
            <Search className="" />
        </div>
    )
}

function Search() {

}