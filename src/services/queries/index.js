import { gql } from "@apollo/client";

const CHARACTERS_QUERY = gql`
    query {
        characters {
            results {
                id
                name
                image
                gender
                origin {
                name
                }
                location {
                name
                }
            }
        }
    }
`;

export { CHARACTERS_QUERY };
