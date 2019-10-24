"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var MySqlMetadataAdapter_1 = require("../adaptor/MySqlMetadataAdapter");
var Constant_1 = require("../constant/Constant");
function fetchMetadata(mySqlMetadataConfig, onSubmit, onSuccess, onError) {
    // const { topValueListSize, sampleValueListSize } = mySqlMetadataConfig;
    var query = "\n    {\n        metadata {\n            type\n            databaseMetadataList {\n                name\n                tableMetadataList {\n                    name\n                    columnMetadataList {\n                        name\n                        type\n                    }\n                }\n            }\n        }\n    }\n    ";
    onSubmit();
    axios_1.default
        .post(Constant_1.MYSQL_SERVER_METADATA_URL, {
        query: query
    })
        .then(function (response) {
        var mySqlMetadata = MySqlMetadataAdapter_1.adaptMySqlMetadata(response.data.data.metadata);
        onSuccess(mySqlMetadata);
    })
        .catch(function (error) {
        onError(error);
    });
}
exports.fetchMetadata = fetchMetadata;
