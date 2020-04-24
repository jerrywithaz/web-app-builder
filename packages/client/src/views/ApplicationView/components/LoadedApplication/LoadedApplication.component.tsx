import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Switch, RouteConfig } from '@jerrywithaz/better-react-router-routing';
import { LoadedApplicationProps } from './LoadedApplication.types';
import { createApplicationURL, createApplicationRoutes } from './LoadedApplication.utils';

import * as Styled from './LoadedApplication.style';

const LoadedApplication: FunctionComponent<LoadedApplicationProps> = ({
    data,
    url
}: LoadedApplicationProps) => {

    const { application } = data;
    const applicationUrl = createApplicationURL(url);
    const routes: RouteConfig[] = createApplicationRoutes(applicationUrl, application.routes);

    return (
        <React.Fragment>
            <h2>{data.application.name}</h2>
            <Styled.Main>
                <Styled.Sidebar>
                    {application.routes.map(({ id, title, path }) => {
                        return (
                            <div key={id}><Link to={`${applicationUrl}${path}`}>{title}</Link></div>
                        );
                    })}
                </Styled.Sidebar>
                <Styled.Application>
                    <Switch routes={routes} />
                </Styled.Application>
            </Styled.Main>
        </React.Fragment>
    );
};

export default LoadedApplication;