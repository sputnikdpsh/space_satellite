import React from "react";
import Auth from "../pages/Auth";
import Home from "../pages/Home";

// Определяем тип маршрута
interface RouteType {
	id: number;
	path: string;
	element: React.ReactNode;
	exact?: boolean;
}

// Приватные маршруты
export const privateRoutes: RouteType[] = [
	{ id: 2, path: "/home", element: <Home />, exact: true },
];

// Публичные маршруты
export const publicRoutes: RouteType[] = [
	{ id: 1, path: "/login", element: <Auth />, exact: true },
];
