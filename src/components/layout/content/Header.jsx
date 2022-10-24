import React from 'react';
import './Header.less';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import routes from '../../../../config/routes';
import { flatten, findOne } from '../../../utils/ArrayUtil';

const flattenRoutes = flatten(routes, 'subs');

export default function ContentHeader(props) {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        const item = findOne(flattenRoutes, 'path', url.slice(1));
        return item ? <Breadcrumb.Item key={url}>{item.label}</Breadcrumb.Item> : null;
    });
    return (
        <div className='content-header'>
            {props.enableBreadCrumb ? <div className='breadcrumb'><Breadcrumb>{breadcrumbItems}</Breadcrumb></div> : null}
            <div className="title">
                {props.title}
            </div>
            <div className='description'>
                {props.description}
            </div>
        </div>
    )
} 