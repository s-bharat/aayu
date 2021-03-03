import { PartnamedataObj } from "./partnamefieldsObj";
import { PartnumberdataObj } from "./partnumberfieldsObj";
import { userObj } from "./userObj";

export interface PartObj {
    partNumber :string;
    fullPartName: string;
    version: string;
    partStatus: string;
    lastUpdatedDate:String;
    user:userObj;
    partNamefields:PartnamedataObj;
    partNumberfields:PartnumberdataObj;
    }