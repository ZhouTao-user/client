import RequestHeader from "@api/RequestHeader";
const MESSAGE_NAME = "StatusModelManage";

export default class StatusModelRequestHeader extends RequestHeader{

    constructor() {  
        super(MESSAGE_NAME);
    }
    
}
