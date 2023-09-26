import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RolesSchema = new Schema({
	roleId: {
		type: Number,
		required: true,
		unique: true
	},
	displayName: {
		type: String,
		required: true
	}
});

export { RolesSchema };
