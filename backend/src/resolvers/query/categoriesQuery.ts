import { Context } from "../../utils";
import { Category } from "../../store/belongings";

const categoriesQuery = {
  getCategories: (_, { parentCategoryId }, context: Context): Category[] =>
    context.store.getCategories(parentCategoryId),

  getCategoriesList: (_, __, context: Context): Category[] =>
    context.store.getCategoriesList()
}

export default categoriesQuery;
