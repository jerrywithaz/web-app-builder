import React from 'react';
import { ApplicationRouteType } from "__generated__/graphql/types";

export function createApplicationURL(applicationViewUrl: string) {
    return "/" + applicationViewUrl.replace(/^\//, "").replace(/\/$/, "");
};

export function createApplicationRoutes(
    applicationUrl: string, 
    applicationRoutes: ApplicationRouteType[]
) {
    return applicationRoutes.map(({ id, path, title, secure, exact }) => ({
        key: id,
        path: `${applicationUrl}${path}`,
        component: () => <div>{title}</div>,
        exact: exact,
        secure: secure
    }))
}