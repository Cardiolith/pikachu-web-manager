import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PikaLayout from "./components/layout";
import Login from "./components/login";
import loadable from "@loadable/component";
import routes from "../config/routes";

const loadComponent = component => loadable(() => import(`${component}`));      // loadable 库动态加载组件
const loadSubRoute = route => {
    if (route.path && route.component) {        // 路由 => 组件
        const DynmComponent = loadComponent(route.component);
        routesArr.push({ path: route.path, element: <DynmComponent /> });
    }

    if (route.subs) {
        route.subs.forEach(sub => {
            loadSubRoute(sub);
        })
    }
}

const routesArr = [];

routes.forEach(route => {
    loadSubRoute(route);
});

export default function App() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="dashboard/analysis" />} />
            <Route path="/" element={<PikaLayout />} >
                {routesArr.map((r, index) => (<Route key={r.path} path={r.path} element={r.element} />))}
            </Route>
        </Routes>
    );
}