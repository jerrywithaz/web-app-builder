import { gql } from 'apollo-boost';

export const HOME_VIEW_QUERY = gql`
    query HomeViewQuery {
        applications {
            id,
            name
        }
    }
`;