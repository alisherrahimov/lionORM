"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
const pg_1 = __importDefault(require("pg"));
class ConnectDatabase {
    constructor(database, config) {
        this.connection = {};
        this.database = database;
        switch (database) {
            case "pg":
                this.connection = config;
                break;
            case "mysql":
                this.connection = config;
                break;
            default:
                throw new Error("Invalid database");
        }
    }
    executeQuery(query) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.database) {
                case "pg":
                    // Implement PostgreSQL query execution
                    const client = new pg_1.default.Client(this.connection);
                    yield client.connect();
                    const pgResult = yield client.query(query);
                    yield client.end();
                    return pgResult.fields ? pgResult.rows : pgResult;
                case "mysql":
                    // Implement MySQL query execution
                    const connection = (0, mysql2_1.createConnection)(this.connection);
                    connection.connect();
                    const mySqlResult = connection.query(query);
                    connection.end();
                    return mySqlResult;
                default:
                    throw new Error("Invalid database");
            }
        });
    }
}
exports.default = ConnectDatabase;
