import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcrypt';

import { isValidEmail } from '../../helpers/validations.js';

/**
 * All resolvers related to auth
 * @typedef {Object}
 */
export default {
	Query: {
	},
	Mutation: {
		registerUser: async (parent, { email, userId, displayName, organizations, roles, locations }, context) => {
			if (!email || !userId) {
				throw new UserInputError('Data provided is not valid');
			}

			if (!isValidEmail(email)) {
				throw new UserInputError('The email is not valid');
			}

			const isAnEmailAlreadyRegistered = await context.di.model.Users.findOne({ userId }).lean();

			if (isAnEmailAlreadyRegistered) {
				throw new UserInputError('Already registered user!');
			}

			await new context.di.model.Users({ email, userId, displayName }).save();
			await new context.di.model.OrgUsers({ userId, organizations }).save();
			await new context.di.model.RoleUsers({ userId, roles }).save();
			await new context.di.model.LocUsers({ userId, locations }).save();

			const user = await context.di.model.Users.findOne({ userId }).lean();

			return user;
		}
		
	}
};
