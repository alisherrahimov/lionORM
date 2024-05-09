import { Database } from "./../types/database";
import { ConnectConfig } from "../types/database";
declare class LionORM {
    private connection;
    constructor(type: Database, config: ConnectConfig);
    createTable(tableName: string, fields: any): Promise<any[] | import("pg").QueryResult<any> | import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query>;
    dropTable(tableName: string): Promise<any[] | import("pg").QueryResult<any> | import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query>;
    insert(tableName: string, data: any): Promise<any[] | import("pg").QueryResult<any> | import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query>;
    select(tableName: string, columns?: string[]): Promise<any[] | import("pg").QueryResult<any> | import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query>;
    update(tableName: string, data: any, condition: string): Promise<any[] | import("pg").QueryResult<any> | import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query>;
    delete(tableName: string, condition: string): Promise<any[] | import("pg").QueryResult<any> | import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query>;
}
export default LionORM;
