import { FieldInfo } from "mysql";
import { QueryType } from "../../type/Types";
export interface MySqlQuerySourceConfig {
    type: QueryType.MYSQL;
    url: string;
    name: string;
    username?: string;
    password?: string;
}
export interface MySqlQueryConfig extends MySqlQuerySourceConfig {
    type: QueryType.MYSQL;
    database: string;
    table: string;
    sql: string;
}
export declare type MySqlPartialQueryConfig = Partial<MySqlQueryConfig>;
export declare type MySqlColumn = FieldInfo;
export interface MySqlQueryResult {
    type: QueryType.MYSQL;
    header?: MySqlColumn[];
    rows?: any[];
    error?: any;
}
export interface MySqlMetadata {
    type: QueryType.MYSQL;
    databaseMetadataList: MySqlDatabaseMetadata[];
}
export interface MySqlDatabaseMetadata {
    name: string;
    tableMetadataList: MySqlTableMetadata[];
}
export interface MySqlTableMetadata {
    name: string;
    columnMetadataList: MySqlColumnMetadata[];
}
export interface MySqlColumnMetadata {
    name: string;
    type: MySqlColumnType;
    topValueList?: string[];
    sampleValueList?: string[];
}
export declare type MySqlColumnType = string;
export interface MySqlMetadataConfig {
    type: QueryType.MYSQL;
    topValueListSize: number;
    sampleValueListSize: number;
}
