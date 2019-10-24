import { FieldInfo } from "mysql";

import { QueryType } from "../../type/Types";

export type MySqlColumn = FieldInfo;

// Raw MySQL query config type.
// User customizable fields should be linked to UI control.
// SQL field is translated from dimensional query config.

export type SqlGetter = () => string;

export interface MySqlQueryConfig {
    type: QueryType.MYSQL;
    database: string;
    table: string;
    sqlGetter: SqlGetter;
}

export type MySqlPartialQueryConfig = Partial<MySqlQueryConfig>;

export interface MySqlQueryResult {
    type: QueryType.MYSQL;
    header?: MySqlColumn[];
    rows?: any[];
    error?: Error;
}

// Metadata type

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
