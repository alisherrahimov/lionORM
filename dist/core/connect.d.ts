import pg from "pg";
import { ConnectConfig, Database } from "../types/database";
declare class ConnectDatabase {
    private database;
    private connection;
    constructor(database: Database, config: ConnectConfig);
    executeQuery(query: string): Promise<any[] | pg.QueryResult<any> | import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query>;
}
export default ConnectDatabase;
