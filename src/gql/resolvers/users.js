/**
 * All resolvers related to users
 * @typedef {Object}
 */
export default {
	Query: {
		listAllUsers: async (parent, args, context) => {
			// const locations = context.di.model.Locations.find().lean();

			return context.di.model.Users.aggregate([
				{
					$lookup: {
						from: 'user_location_mappings',
						localField: 'userId',
						foreignField: 'userId',
						as: 'location',
					},
				},
				{ $unwind: '$location' },
				{
					$project: {
						__v: 0,
						'location.__v': 0,
						'location._id': 0,
						'location.userId': 0,
					},
				},
				{
					$unwind: '$location.locations',
				},
				{
					$lookup: {
						from: 'locations',
						localField: 'location.locations',
						foreignField: 'locId',
						as: 'locationData',
					},
				},
				{
					$unwind: '$locationData',
				},
				{
					$group: {
						_id: '$_id',
						email: { $first: '$email' },
						displayName: { $first: '$displayName' },
						userId: { $first: '$userId' },
						locations: { $push: '$locationData.displayName' },
					},
				},
			]);
		},
	},
	Mutation: {},
};
