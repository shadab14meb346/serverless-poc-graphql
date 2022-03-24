import {gql} from "apollo-server-lambda";

const helloTypeDef = gql`
	type Query {
		hello: Greetings!
	}

	type Greetings {
		message: String!
	}
`;

export default helloTypeDef;
