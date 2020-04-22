import { RouteConfigComponentProps } from "@jerrywithaz/better-react-router-routing";
import { ApplicationType } from "__generated__/graphql/types";

export type ApplicationViewQueryData = {
    application: ApplicationType
};

export type ApplicationViewParams = {
    applicationId: string
};

export type ApplicationViewProps = RouteConfigComponentProps<ApplicationViewParams>;