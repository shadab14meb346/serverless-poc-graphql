import {Context} from "./context";
import {PostGrace} from "./db-connection";

export async function getAll(ctx: Context) {
	// ctx.assertAuthenticated();
	const results = await PostGrace.DB().select("*").from("users");
	return results;
}

export * as User from "./user";
