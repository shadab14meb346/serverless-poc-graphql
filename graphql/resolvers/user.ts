export const UserResolver = {
	Query: {
		user: async (_parent, args, ctx) => {
			console.log(ctx);
			return {
				id: "123",
				email: "sjhvjvh",
				name: "shadab",
			};
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
