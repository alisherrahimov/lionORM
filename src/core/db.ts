import { Database } from "./../types/database";
import { ConnectConfig } from "../types/database";
import ConnectDatabase from "./connect";

interface Field {
      [key: string]: string | string[];
}
interface InsertField {
      [key: string]: string | number;
}

class LionORM {
      private connection: ConnectDatabase;
      constructor(type: Database, config: ConnectConfig) {
            this.connection = new ConnectDatabase(type, config);
      }

      async createTable(tableName: string, fields: Field) {
            if (!Object.keys(fields).length)
                  return new Error("Fields are required");

            if (!tableName) return new Error("Table name is required");

            if (typeof tableName !== "string")
                  return new Error("Table name must be a string");

            if (typeof fields !== "object")
                  return new Error("Fields must be an object");

            if (Array.isArray(fields))
                  return new Error("Fields must be an object");
            if (Object.keys(fields).length === 0)
                  return new Error("Fields must not be empty");

            const attributesArray = Object.keys(fields).map(
                  (attribute) => `${attribute} ${fields[attribute]}`
            );
            console.log(attributesArray);
            return await this.connection.executeQuery(
                  `CREATE TABLE IF NOT EXISTS ${tableName} (${attributesArray.join(
                        ", "
                  )})`
            );
      }

      async dropTable(tableName: string) {
            if (!tableName) return new Error("Table name is required");
            if (typeof tableName !== "string")
                  return new Error("Table name must be a string");
            try {
                  return await this.connection.executeQuery(
                        `DROP TABLE IF EXISTS ${tableName}`
                  );
            } catch (error) {
                  return new Error("Error in drop table query");
            }
      }

      async insert(tableName: string, data: InsertField) {
            const columns = Object.keys(data).join(", ");
            const values = Object.values(data)
                  .map((value) => `'${value}'`)
                  .join(", ");

            try {
                  return await this.connection.executeQuery(
                        `INSERT INTO ${tableName} (${columns}) VALUES (${values})`
                  );
            } catch (error) {
                  return new Error("Error in insert query");
            }
      }

      async select(tableName: string, columns: string[] = ["*"]) {
            try {
                  return await this.connection.executeQuery(
                        `SELECT ${columns.join(", ")} FROM ${tableName}`
                  );
            } catch (e) {
                  return new Error("Error in select query");
            }
      }

      async update(tableName: string, data: any, condition: string) {
            const columns = Object.keys(data).map(
                  (column) => `${column} = '${data[column]}'`
            );
            try {
                  return await this.connection.executeQuery(
                        `UPDATE ${tableName} SET ${columns.join(
                              ", "
                        )} WHERE ${condition}`
                  );
            } catch (error) {
                  return new Error("Error in update query");
            }
      }

      async delete(tableName: string, condition: string) {
            try {
                  return await this.connection.executeQuery(
                        `DELETE FROM ${tableName} WHERE ${condition}`
                  );
            } catch (error) {
                  return new Error("Error in delete query");
            }
      }
}

export default LionORM;
