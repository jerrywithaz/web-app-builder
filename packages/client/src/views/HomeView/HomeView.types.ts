import { RouteConfigComponentProps } from "@jerrywithaz/better-react-router-routing";
import { ApplicationType } from "__generated__/graphql/types";

export type HomeViewQueryData = {
    applications: Omit<ApplicationType, "views">[]
};
export type HomeViewProps = RouteConfigComponentProps;