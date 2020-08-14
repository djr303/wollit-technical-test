import { Context } from "../../utils";

const itemMutation = {
  addItem: (parent, { name, parentCategoryID }, context: Context) => {
    return context.store.addItem(name, parentCategoryID);
  },
}

export default itemMutation;
