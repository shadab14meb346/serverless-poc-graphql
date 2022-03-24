import {ApolloServer, gql} from "apollo-server-lambda";
import lambdaPlayground from "graphql-playground-middleware-lambda";
const typeDefs = gql`
	type Query {
		hello: String
		getMe: User!
	}
	type Mutation {
		createUser(input: CreateUserInput!): User!
	}
	input CreateUserInput {
		name: String!
		email: String!
	}
	type User {
		id: String!
		email: String!
		name: String!
	}
`;

const resolvers = {
	Query: {
		hello: () => "Hello, New World!, Hussain1",
		getMe: () => ({
			id: "123",
			email: "shadabsaharsa@gmail.com",
			name: "Shadab",
		}),
	},
	Mutation: {
		createUser: (_, {input}, user) => {
			console.log(input, user);
			return {
				id: "123",
				email: "shadabsaharsa@gmail.com",
				name: "Shadab",
			};
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});
export const handler = server.createHandler({});

// for local endpointURL is /graphql and for prod it is /stage/graphql
export const playgroundHandler = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;
	return lambdaPlayground({
		endpoint: "http://localhost:4000/dev/graphql",
	})(event, context, callback);
};
