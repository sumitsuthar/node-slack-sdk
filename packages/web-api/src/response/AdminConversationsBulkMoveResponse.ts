/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type AdminConversationsBulkMoveResponse = WebAPICallResult & {
  bulk_action_id?:    string;
  error?:             string;
  needed?:            string;
  not_added?:         NotAdded[];
  ok?:                boolean;
  provided?:          string;
  response_metadata?: ResponseMetadata;
};

export interface NotAdded {
  channel_id?: string;
  errors?:     string[];
}

export interface ResponseMetadata {
  messages?: string[];
}
