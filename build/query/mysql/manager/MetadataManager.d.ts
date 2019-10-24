import { MySqlMetadata, MySqlMetadataConfig } from "../type/Types";
export declare function fetchMetadata(mySqlMetadataConfig: MySqlMetadataConfig, onSubmit: () => void, onSuccess: (mySqlMetadata: MySqlMetadata) => void, onError: (error: Error) => void): void;
