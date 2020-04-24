import React, { FunctionComponent, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { If } from '@jerrywithaz/react-conditionals';
import { HomeViewProps, HomeViewQueryData } from './HomeView.types';
import { HOME_VIEW_QUERY } from './HomeView.graphql';

import * as Styled from './HomeView.style';

const HomeView: FunctionComponent<HomeViewProps> = () => {

    const [applicationId, setApplicationId] = useState<string | null>(null);
    const { data } = useQuery<HomeViewQueryData>(HOME_VIEW_QUERY);

    return (
        <Styled.HomeView>
            <If data={data} render={({ applications }) => (
                <React.Fragment>
                    <div>
                        {applications.map(({ name, id }) => (
                            <div key={id}>
                                <span onClick={() => setApplicationId(id)}>
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <If data={applicationId} render={applicationId => (
                        <Styled.HomeViewApplicationViewer 
                            src={`/application/${applicationId.replace("application-", "")}`} />
                    )}/>
                </React.Fragment>
            )}/>
        </Styled.HomeView>
    );

};

export default HomeView;