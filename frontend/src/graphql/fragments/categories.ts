import { gql } from "apollo-boost";

export const categoriesFields = gql`
  fragment categoriesFields on Category {
    id
    name
  }
`;
