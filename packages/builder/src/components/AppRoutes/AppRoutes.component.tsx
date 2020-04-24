import React from 'react';
import BetterReactRouterProvider, { Capture404, Switch } from '@jerrywithaz/better-react-router-routing';
import routes from 'routes';

const PageFound = () => <Switch routes={routes}/>;
const PageNotFound = () => <div>Page not found.</div>;

const AppRoutes = () => {
    return (
        <BetterReactRouterProvider authenticated={true}>
            <Capture404 FoundComponent={PageFound} NotFoundComponent={PageNotFound}/>
        </BetterReactRouterProvider>
    );
}

export default AppRoutes;