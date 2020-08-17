import { gql } from "apollo-boost";
import { categoriesFields } from "../fragments/categories";

/* export const getCategories = gql`
  query {
    categories {
      id
      name
    }
  }
`;  */

export const getCategories = (depth: number) => gql`
  query {
    categories {
      ...categoriesFields
    }
  }
   ${categoriesFields(depth)}
`;  


