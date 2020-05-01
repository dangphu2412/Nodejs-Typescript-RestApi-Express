import knex from "knex";
import * as knexfile from "../../knexfile";

const environment:string = process.env.NODE_ENV || "development";
const config = (environment === "production")? knexfile["production"]:knexfile["development"];

export default knex(config);