import { Context } from "../../utils";

const categoriesQuery = {
  categories: (parent, { parentCategoryId }, context: Context) => {
    return context.store.getCategories(parentCategoryId)
  }
}

export default categoriesQuery;
