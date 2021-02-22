import { userObj } from "../userObj";

export interface PartHistoryObj {
  
    id: string,
    partname: string,
    partnumber: string,
    updatedOn: Date,
    version: string,
    partStatus: string,
    action: string,
    userId: string
}