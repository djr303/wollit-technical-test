import categoryMutation from "./categoryMutation";
import itemMutation from "./itemMutation";

const Mutation = {
  ...categoryMutation,
  ...itemMutation
};

export default Mutation;
