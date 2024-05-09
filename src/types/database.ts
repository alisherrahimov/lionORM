import { ConnectionOptions } from "mysql2";
import { ConnectionConfig } from "pg";

export type Database = "pg" | "mysql";

export interface MysqlDefaultConfig {
      host: string | "localhost";
      user: string | "root";
      password: string | "root";
      database: string | "test";
      port: number | 3306;
}
export interface PgDefaultConfig {
      user: string | "postgres";
      host: string | "localhost";
      database: string | "postgres";
      password: string | "postgres";
      port: number | 5432;
}

export type ConnectConfig = ConnectionOptions &
      MysqlDefaultConfig &
      ConnectionConfig &
      PgDefaultConfig;
