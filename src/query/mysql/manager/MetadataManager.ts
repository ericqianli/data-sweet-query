import axios from "axios";

import { adaptMySqlMetadata } from "../adaptor/MySqlMetadataAdapter";
import { GRAPHQL_METADATA_QUERY } from "../constant/Constant";
import { MySqlMetadata, MySqlMetadataConfig } from "../type/Types";

export async function fetchMetadataPromise(
    serverUrl: string,
    mySqlMetadataConfig: MySqlMetadataConfig
): Promise<MySqlMetadata> {
    // const { topValueListSize, sampleValueListSize } = mySqlMetadataConfig;

    try {
        const response = await axios.post(serverUrl, {
            query: GRAPHQL_METADATA_QUERY
        });
        const mySqlMetadata = adaptMySqlMetadata(response.data.data.metadata);
        return mySqlMetadata;
    } catch (error) {
        throw error;
    }
}
