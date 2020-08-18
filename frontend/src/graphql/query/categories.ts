import { gql } from "apollo-boost";
import { categoriesFields } from "../fragments/categories";

export const getCategoriesList = gql`
  query getCategoriesList {
    getCategoriesList {
      id
      name
    }
  }
`

export const getCategories = (depth: number) => gql`
  query getCategories {
    getCategories {
      ...categoriesFields
    }
  }
   ${categoriesFields(depth)}
`


