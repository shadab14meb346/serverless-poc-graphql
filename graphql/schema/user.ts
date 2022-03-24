import {gql} from "apollo-server-lambda";

const userTypeDef = gql`
	type Query {
		user: User!
		getAllUsers: [User!]!
	}

	type Mutation {
		createUser(input: CreateUserInput!): User!
		getAllUsers: [User!]!
	}

	input CreateUserInput {
		email: String!
		username: String!
	}

	type User {
		id: Int!
		email: String!
		username: String!
	}
`;

export default userTypeDef;
