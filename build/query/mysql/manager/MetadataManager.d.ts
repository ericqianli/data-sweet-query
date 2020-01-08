import { MySqlMetadata, MySqlMetadataConfig } from "../type/Types";
export declare function fetchMetadataPromise(serverUrl: string, mySqlMetadataConfig: MySqlMetadataConfig): Promise<MySqlMetadata>;
