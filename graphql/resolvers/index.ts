import merge from "lodash.merge";
import {HelloResolver} from "./hello";
import {UserResolver} from "./user";

const resolvers = merge(UserResolver, HelloResolver);

export default resolvers;
