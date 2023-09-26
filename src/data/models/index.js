import mongoose from 'mongoose';

import { 
	UsersSchema,
	OrgUsersSchema,
	RoleUsersSchema,
	LocUsersSchema,
	OrgsSchema,
	RolesSchema,
	LocationsSchema
} from './schemas/index.js';

export const models = {
	Users: mongoose.model('users', UsersSchema),
	OrgUsers: mongoose.model('user_org_mapping', OrgUsersSchema),
	RoleUsers: mongoose.model('user_role_mapping', RoleUsersSchema),
	LocUsers: mongoose.model('user_location_mapping', LocUsersSchema),
	Orgs: mongoose.model('orgs', OrgsSchema),
	Roles: mongoose.model('roles', RolesSchema),
	Locations: mongoose.model('locations', LocationsSchema)
};
