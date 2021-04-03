import { PartNameFields } from "./partNameFields";
import { PartNumberFields } from "./partNumberFields";
import { userObj } from "./userObj";

export interface PartObj {
    partNumber :string;
    fullPartName: string;
    version: string;
    partStatus: string;
    lastUpdatedDate:string;

    partName:string;
    partNumberFields:PartNumberFields;
    partNameFields:PartNameFields;
    userObj:userObj;

    }
