import React, { FunctionComponent } from 'react';
import { If } from '@jerrywithaz/react-conditionals';
import LoadedApplication from './components/LoadedApplication';
import ErroredApplication from './components/ErroredApplication';
import LoadingApplication from './components/LoadingApplication';
import { ApplicationViewProps } from './ApplicationView.types';
import { useApplicationViewQuery } from './ApplicationView.hooks';

import * as Styled from './ApplicationView.style';

const ApplicationView: FunctionComponent<ApplicationViewProps> = ({
    match
}) => {

    const { data, error, loading } = useApplicationViewQuery(match.params.applicationId);

    return (
        <Styled.ApplicationView>
            <If condition={loading}>
                <LoadingApplication />
            </If>
            <If data={error} render={error => (
                <ErroredApplication error={error} />
            )} />
            <If data={data} render={data => (
                <LoadedApplication data={data} url={match.url} />
            )} />
        </Styled.ApplicationView>
    );

}

export default ApplicationView;