import axios from "axios";

import { QueryType } from "../../type/Types";
import { MYSQL_SERVER_URL } from "../constant/Constant";
import { MySqlColumn, MySqlQueryConfig, MySqlQueryResult } from "../type/Types";

export async function fetchQueryResultPromise(
    mySqlQueryConfig: MySqlQueryConfig
): Promise<MySqlQueryResult> {
    const { database, sqlGetter } = mySqlQueryConfig;
    const sql = sqlGetter();

    try {
        const response = await axios.post(MYSQL_SERVER_URL, {
            database,
            sql
        });
        const header: MySqlColumn[] = response.data.header;
        const rows: any[] = response.data.rows;

        const result = {
            type: QueryType.MYSQL,
            header,
            rows
        };

        return result;
    } catch (error) {
        throw error;
    }
}
