import { MySqlMetadata, MySqlMetadataConfig } from "../type/Types";
export declare const GRAPHQL_METADATA_QUERY = "\n{\n    metadata {\n        type\n        databaseMetadataList {\n            name\n            tableMetadataList {\n                name\n                columnMetadataList {\n                    name\n                    type\n                }\n            }\n        }\n    }\n}\n";
export declare const INITIAL_MYSQL_METADATA: MySqlMetadata;
export declare const INITIAL_MYSQL_METADATA_CONFIG: MySqlMetadataConfig;
export declare const MYSQL_SERVER_URL = "http://localhost:3001/mysql";
export declare const MYSQL_SERVER_METADATA_URL = "http://localhost:4000/graphql";
