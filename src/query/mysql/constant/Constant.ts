import { QueryType } from "../../type/Types";
import { MySqlMetadata, MySqlMetadataConfig } from "../type/Types";

export const GRAPHQL_METADATA_QUERY = `
{
    metadata {
        type
        databaseMetadataList {
            name
            tableMetadataList {
                name
                columnMetadataList {
                    name
                    type
                }
            }
        }
    }
}
`;

export const INITIAL_MYSQL_METADATA: MySqlMetadata = {
    type: QueryType.MYSQL,
    databaseMetadataList: []
};

export const INITIAL_MYSQL_METADATA_CONFIG: MySqlMetadataConfig = {
    type: QueryType.MYSQL,
    topValueListSize: 0,
    sampleValueListSize: 0
};

export const MYSQL_SERVER_URL = "http://localhost:3001/mysql";

export const MYSQL_SERVER_METADATA_URL = "http://localhost:4000/graphql";

// export const MYSQL_SERVER_URL = "http://192.168.0.17:3001/mysql";

// export const MYSQL_SERVER_METADATA_URL = "http://192.168.0.17:4000/graphql";
