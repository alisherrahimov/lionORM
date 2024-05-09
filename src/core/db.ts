import { Database } from "./../types/database";
import { ConnectConfig } from "../types/database";
import ConnectDatabase from "./connect";

class LionORM {
      private connection: ConnectDatabase;
      constructor(type: Database, config: ConnectConfig) {
            this.connection = new ConnectDatabase(type, config);
      }

      createTable(tableName: string, fields: any) {
            const attributesArray = Object.keys(fields).map(
                  (attribute) => `${attribute} ${fields[attribute]}`
            );
            return this.connection.executeQuery(
                  `CREATE TABLE IF NOT EXISTS ${tableName} (${attributesArray.join(
                        ", "
                  )})`
            );
      }

      dropTable(tableName: string) {
            return this.connection.executeQuery(
                  `DROP TABLE IF EXISTS ${tableName}`
            );
      }

      insert(tableName: string, data: any) {
            const columns = Object.keys(data).join(", ");
            const values = Object.values(data)
                  .map((value) => `'${value}'`)
                  .join(", ");
            return this.connection.executeQuery(
                  `INSERT INTO ${tableName} (${columns}) VALUES (${values})`
            );
      }

      select(tableName: string, columns: string[] = ["*"]) {
            return this.connection.executeQuery(
                  `SELECT ${columns.join(", ")} FROM ${tableName}`
            );
      }

      update(tableName: string, data: any, condition: string) {
            const columns = Object.keys(data).map(
                  (column) => `${column} = '${data[column]}'`
            );
            return this.connection.executeQuery(
                  `UPDATE ${tableName} SET ${columns.join(
                        ", "
                  )} WHERE ${condition}`
            );
      }

      delete(tableName: string, condition: string) {
            return this.connection.executeQuery(
                  `DELETE FROM ${tableName} WHERE ${condition}`
            );
      }
}

export default LionORM;
