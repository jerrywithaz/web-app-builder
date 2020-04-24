import { useQuery } from "@apollo/react-hooks";
import { ApplicationViewQueryData } from "./ApplicationView.types";
import { APPLICATION_VIEW_QUERY } from "./ApplicationView.graphql";

export function useApplicationViewQuery(applicationId: string) {
    return useQuery<ApplicationViewQueryData>(APPLICATION_VIEW_QUERY, {
        variables: {
            id: "application-" + applicationId
        }
    });
}