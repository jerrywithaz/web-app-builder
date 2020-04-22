import { gql } from 'apollo-boost';

export const APPLICATION_VIEW_QUERY = gql`
    query ApplicationViewQuery($id: ID!) {
        application(id: $id) {
            id,
            name,
            routes {
                id,
                title,
                path,
                secure,
                exact
            }
        }
    }
`;