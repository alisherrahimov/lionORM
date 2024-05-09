"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = __importDefault(require("./connect"));
class LionORM {
    constructor(type, config) {
        this.connection = new connect_1.default(type, config);
    }
    createTable(tableName, fields) {
        const attributesArray = Object.keys(fields).map((attribute) => `${attribute} ${fields[attribute]}`);
        return this.connection.executeQuery(`CREATE TABLE IF NOT EXISTS ${tableName} (${attributesArray.join(", ")})`);
    }
    dropTable(tableName) {
        return this.connection.executeQuery(`DROP TABLE IF EXISTS ${tableName}`);
    }
    insert(tableName, data) {
        const columns = Object.keys(data).join(", ");
        const values = Object.values(data)
            .map((value) => `'${value}'`)
            .join(", ");
        return this.connection.executeQuery(`INSERT INTO ${tableName} (${columns}) VALUES (${values})`);
    }
    select(tableName, columns = ["*"]) {
        return this.connection.executeQuery(`SELECT ${columns.join(", ")} FROM ${tableName}`);
    }
    update(tableName, data, condition) {
        const columns = Object.keys(data).map((column) => `${column} = '${data[column]}'`);
        return this.connection.executeQuery(`UPDATE ${tableName} SET ${columns.join(", ")} WHERE ${condition}`);
    }
    delete(tableName, condition) {
        return this.connection.executeQuery(`DELETE FROM ${tableName} WHERE ${condition}`);
    }
}
exports.default = LionORM;
