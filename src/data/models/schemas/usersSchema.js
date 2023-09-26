import mongoose from 'mongoose';
import { randomUUID } from 'crypto';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true
	},
	displayName: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true,
		default: randomUUID
	}
});

export { UsersSchema };
