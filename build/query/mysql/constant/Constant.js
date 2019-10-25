"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = require("../../type/Types");
exports.GRAPHQL_METADATA_QUERY = "\n{\n    metadata {\n        type\n        databaseMetadataList {\n            name\n            tableMetadataList {\n                name\n                columnMetadataList {\n                    name\n                    type\n                }\n            }\n        }\n    }\n}\n";
exports.INITIAL_MYSQL_METADATA = {
    type: Types_1.QueryType.MYSQL,
    databaseMetadataList: []
};
exports.INITIAL_MYSQL_METADATA_CONFIG = {
    type: Types_1.QueryType.MYSQL,
    topValueListSize: 0,
    sampleValueListSize: 0
};
exports.MYSQL_SERVER_URL = "http://localhost:3001/mysql";
exports.MYSQL_SERVER_METADATA_URL = "http://localhost:4000/graphql";
// export const MYSQL_SERVER_URL = "http://192.168.0.17:3001/mysql";
// export const MYSQL_SERVER_METADATA_URL = "http://192.168.0.17:4000/graphql";
