import { gql } from 'apollo-server-express';

export default /* GraphQL */ gql`
	
	type Query {
		""" Get list of all users registered on database """
		listAllUsers: [User]
	}
`;