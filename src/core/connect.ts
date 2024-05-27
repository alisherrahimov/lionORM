import { createConnection } from "mysql2";
import pg from "pg";
import { ConnectConfig, Database } from "../types/database";

class ConnectDatabase {
      private database: Database;
      private connection = {};
      constructor(database: Database, config: ConnectConfig) {
            this.database = database;
            switch (database) {
                  case "pg":
                        this.connection = config!;
                        break;
                  case "mysql":
                        this.connection = config!;
                        break;
                  default:
                        throw new Error("Invalid database");
            }
      }

      async executeQuery(query: string) {
            try {
                  switch (this.database) {
                        case "pg":
                              // Implement PostgreSQL query execution
                              const client = new pg.Client(this.connection);
                              await client.connect();
                              const pgResult = await client.query(query);
                              await client.end();
                              return pgResult.fields ? pgResult.rows : pgResult;

                        case "mysql":
                              // Implement MySQL query execution
                              const connection = createConnection(
                                    this.connection
                              );
                              connection.connect();
                              const mySqlResult = connection.query(query);
                              connection.end();
                              return mySqlResult;

                        default:
                              throw new Error("Invalid database");
                  }
            } catch (error) {
                  return new Error(`Error in query execution: ${error}`);
            }
      }
}

export default ConnectDatabase;
