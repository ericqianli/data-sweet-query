import axios from "axios";

import { adaptMySqlMetadata } from "../adaptor/MySqlMetadataAdapter";
import { MYSQL_SERVER_METADATA_URL } from "../constant/Constant";
import { MySqlMetadata, MySqlMetadataConfig } from "../type/Types";

export function fetchMetadata(
    mySqlMetadataConfig: MySqlMetadataConfig,
    onSubmit: () => void,
    onSuccess: (mySqlMetadata: MySqlMetadata) => void,
    onError: (error: Error) => void
) {
    // const { topValueListSize, sampleValueListSize } = mySqlMetadataConfig;

    const query = `
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

    onSubmit();
    axios
        .post(MYSQL_SERVER_METADATA_URL, {
            query
        })
        .then(response => {
            const mySqlMetadata = adaptMySqlMetadata(
                response.data.data.metadata
            );
            onSuccess(mySqlMetadata);
        })
        .catch((error: Error) => {
            onError(error);
        });
}
