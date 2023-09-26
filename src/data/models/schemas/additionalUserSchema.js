import mongoose from 'mongoose';
import { randomUUID } from 'crypto';

const Schema = mongoose.Schema;

const OrgUsersSchema = new Schema({
	userId: {
		type: String,
		required: true,
		default: randomUUID
	},
	organizations: {
		type: [Number],
		required: true
	}
});

const RoleUsersSchema = new Schema({
	userId: {
		type: String,
		required: true,
		default: randomUUID
	},
	roles: {
		type: [Number],
		required: true
	}
});

const LocUsersSchema = new Schema({
	userId: {
		type: String,
		required: true,
		default: randomUUID
	},
	locations: {
		type: [Number],
		required: true
	}
});

export { OrgUsersSchema, RoleUsersSchema, LocUsersSchema };
