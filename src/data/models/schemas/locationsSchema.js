import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
	locId: {
		type: Number,
		required: true,
		unique: true
	},
	location_rms: {
		type: [Number],
		required: true
	},
	displayName: {
		type: String,
		required: true
	}
});

export { LocationsSchema };
