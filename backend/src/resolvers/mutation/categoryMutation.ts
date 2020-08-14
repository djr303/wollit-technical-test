import { Context } from "../../utils";

const categoryMutation = {
  addCategory(parent, { name, parentCategoryId }, context: Context) {
    return context.store.addCategory(name, parentCategoryId);
  },
  updateCategory(parent, { id, root, parentCategoryId, name }, context: Context) {
    return context.store.updateCategory(id, root, parentCategoryId, name);
  }
}

export default categoryMutation;
