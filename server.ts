import {ApolloServer} from "apollo-server-lambda";
import lambdaPlayground from "graphql-playground-middleware-lambda";
import {useContext} from "./core/context";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schema";

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({event, context, express}) => {
		const auth = express.req.headers["authorization"] as string;
		if (auth) {
			const [_, token] = auth.split("Bearer ");
			try {
				const payload = {
					sub: "123",
				};
				// const payload = await cognito.verify(token);
				return useContext({
					type: "user",
					properties: {
						id: payload.sub,
					},
				});
			} catch (ex) {}
		}
		return useContext({
			type: "public",
		});
	},
});
export const handler = server.createHandler({});

// for local endpointURL is /graphql and for prod it is /stage/graphql
export const playgroundHandler = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;
	return lambdaPlayground({
		endpoint: "http://localhost:4000/dev/graphql",
	})(event, context, callback);
};
