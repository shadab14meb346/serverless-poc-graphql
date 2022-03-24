import {gql} from "apollo-server-lambda";

const userTypeDef = gql`
	type Query {
		user: User!
	}

	type Mutation {
		createUser(input: CreateUserInput!): User!
	}

	input CreateUserInput {
		email: String!
		name: String!
	}

	type User {
		id: String!
		email: String!
		name: String!
	}
`;

export default userTypeDef;
