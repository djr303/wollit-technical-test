import { gql } from "apollo-boost";
import { categoriesFields } from "../fragments/categories";

export const getCategoriesList = gql`
  query categoriesList {
    getCategoriesList {
      id
      name
    }
  }
`

export const getCategories = (depth: number) => gql`
  query categories {
    getCategories {
      ...categoriesFields
    }
  }
   ${categoriesFields(depth)}
`


