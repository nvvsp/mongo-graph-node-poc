import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrgsSchema = new Schema({
	orgId: {
		type: Number,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	}
});

export { OrgsSchema };
