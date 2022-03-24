export const HelloResolver = {
	Query: {
		hello: async (_parent, args, ctx) => {
			return {
				message: "Hello, New World",
			};
		},
	},
};
