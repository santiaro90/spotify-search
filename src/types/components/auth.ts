import { RouteProps } from 'react-router-dom';

export type LoginProps = {
    loggedIn: boolean;
    login: () => void;
};

export type ProtectedRouteProps = RouteProps & {
    component: React.ComponentClass;
    loggedIn: boolean;
};
