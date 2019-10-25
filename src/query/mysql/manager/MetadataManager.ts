import axios from "axios";

import { adaptMySqlMetadata } from "../adaptor/MySqlMetadataAdapter";
import {
    GRAPHQL_METADATA_QUERY,
    MYSQL_SERVER_METADATA_URL
} from "../constant/Constant";
import { MySqlMetadata, MySqlMetadataConfig } from "../type/Types";

export async function fetchMetadataPromise(
    mySqlMetadataConfig: MySqlMetadataConfig
): Promise<MySqlMetadata> {
    const { topValueListSize, sampleValueListSize } = mySqlMetadataConfig;

    try {
        const response = await axios.post(MYSQL_SERVER_METADATA_URL, {
            query: GRAPHQL_METADATA_QUERY
        });
        const mySqlMetadata = adaptMySqlMetadata(response.data.data.metadata);
        return mySqlMetadata;
    } catch (error) {
        throw error;
    }
}
