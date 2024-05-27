import LionORM from "./core/db";
import { DEFAULT_TYPES, TYPES } from "./core/table.types";

import { Database, ConnectConfig } from "./types/database";

async function main() {
      const db = new LionORM("pg", {
            host: "localhost",
            port: 5432,
            user: "postgres",
            password: "postgres",
            database: "grpc",
      });

      await db.insert("admins", {
            id: 2,
            name: "lionx",
            age: 101,
            updated_at: DEFAULT_TYPES.NOW,
            created_at: DEFAULT_TYPES.NOW,
      });

      const data = await db.select("admins");
      console.log(data);
}
main();

export { LionORM, Database, ConnectConfig };
