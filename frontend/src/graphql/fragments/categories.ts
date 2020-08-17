import { gql } from "apollo-boost";
/* 
export const field = gql`
  fragment fields on Category {
    id
    name
  }  
} */

const getFields = (depth: number, currentDepth: number = 1): any => {

  // console.log('getFields(), depth', depth)

  if (currentDepth >= depth){
    return gql`
      fragment ${'fields' + currentDepth} on Category {
        id
        name
      }
    `
  } else {
    return gql`
      fragment ${'fields' + currentDepth} on Category {
        id
        name
        categories {
          ...${'fields' + (currentDepth + 1)}
        }
      }
      ${getFields(depth, currentDepth + 1)}
    `
  }
} 

export const categoriesFields = (depth: number) => gql`
  fragment categoriesFields on Category {
    ...fields1
  }
  ${getFields(depth)}
`;
