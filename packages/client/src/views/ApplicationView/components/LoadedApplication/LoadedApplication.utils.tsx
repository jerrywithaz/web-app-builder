import React from 'react';
import { ApplicationRouteType } from "__generated__/graphql/types";
import LoadComponent from 'components/LoadComponent';

export function createApplicationURL(applicationViewUrl: string) {
    return "/" + applicationViewUrl.replace(/^\//, "").replace(/\/$/, "");
};

export function createApplicationRoutes(
    applicationUrl: string, 
    applicationRoutes: ApplicationRouteType[]
) {
    return applicationRoutes.map(({ id, path, secure, exact, component }) => ({
        key: id,
        path: `${applicationUrl}${path}`,
        component: () => <LoadComponent url={component}/>,
        exact: exact,
        secure: secure
    }))
}