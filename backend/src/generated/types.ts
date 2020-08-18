export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  items?: Maybe<Array<Maybe<Item>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
};

export type CategoryListItem = {
  __typename?: 'CategoryListItem';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addItem?: Maybe<Item>;
  addCategory?: Maybe<Category>;
  updateCategory?: Maybe<Category>;
};


export type MutationAddItemArgs = {
  parentCategoryID: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationAddCategoryArgs = {
  parentCategoryID: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  root?: Maybe<Scalars['Boolean']>;
  parentCategoryId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCategories: Array<Category>;
  getCategoriesList: Array<CategoryListItem>;
};


export type QueryGetCategoriesArgs = {
  parentCategoryId?: Maybe<Scalars['ID']>;
};
