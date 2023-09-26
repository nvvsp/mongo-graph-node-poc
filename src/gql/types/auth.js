import { gql } from 'apollo-server-express';

export default /* GraphQL */ gql`
	type Token {
		token: String
	}

	type User {
		email: String
		displayName: String
		userId: String
		locations: [String]
	}

	type Mutation {
		""" It allows users to register """
		registerUser(email: String!, displayName: String!, userId: String!, organizations: [Int], roles: [Int], locations: [Int]): User

	}
`;