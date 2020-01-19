import { FieldInfo } from "mysql";

import { QueryType } from "../../type/Types";

// Query source

export interface MySqlQuerySourceConfig {
    type: QueryType.MYSQL;
    url: string;
    // TODO: Encrypt the following
    username?: string;
    password?: string;
}

// Query config

export interface MySqlQueryConfig extends MySqlQuerySourceConfig {
    type: QueryType.MYSQL;
    database: string;
    table: string;
    sql: string;
}

export type MySqlPartialQueryConfig = Partial<MySqlQueryConfig>;

// Query result

export type MySqlColumn = FieldInfo;

export interface MySqlQueryResult {
    type: QueryType.MYSQL;
    header?: MySqlColumn[];
    rows?: any[];
    error?: any;
}

// Metadata

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

export type MySqlColumnType = string;

export interface MySqlMetadataConfig {
    type: QueryType.MYSQL;
    topValueListSize: number;
    sampleValueListSize: number;
}
