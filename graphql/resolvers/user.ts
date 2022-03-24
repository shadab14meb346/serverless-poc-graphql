import {User} from "../../core/user";

export const UserResolver = {
	Query: {
		user: async (_parent, args, ctx) => {
			return {
				id: "123",
				email: "sjhvjvh",
				name: "shadab",
			};
		},
		getAllUsers: async (_parent, args, ctx, info) => {
			return await User.getAll(ctx);
		},
	},
	Mutation: {
		createUser: async (parent, args, ctx) => {
			const {email, name} = args.input;
			return {
				id: "123",
				email,
				name,
			};
		},
	},
};
