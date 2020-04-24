import React, { FunctionComponent, useEffect, useState } from 'react';
import { LoadComponentProps } from './LoadComponent.types';

const LoadComponent: FunctionComponent<LoadComponentProps> = ({
    url
}) => {

    const [Component, setComponent] = useState<(props: any) => null | JSX.Element>(() => null);

    useEffect(() => {
        // import("../../../library/src/pages/LoginPage").then((result) => {
        //     setComponent(result.default);
        // });
    }, []);
    
    
    return (
        <React.Fragment>
            {Component}
        </React.Fragment>
    );

};

export default LoadComponent;