import { MySqlQueryConfig, MySqlQueryResult } from "../type/Types";
export declare function fetchQueryResultPromise(serverUrl: string, mySqlQueryConfig: MySqlQueryConfig): Promise<MySqlQueryResult>;
