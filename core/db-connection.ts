import knex from "knex";
import {connection} from "../config/database";

export const DB = () =>
	knex({
		client: "pg",
		connection: connection,
	});

export * as PostGrace from "./db-connection";
