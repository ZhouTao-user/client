import PackageValidationRequestBody from "./PackageValidationRequestBody";
import PackageValidationRequestHeader from "./PackageValidationRequestHeader";
import { UrlConstant } from "../const/ConstDefine";
import Request from "../Request";
import MessageUtils from "../utils/MessageUtils";

export default class PackageValidationRequest {

    static sendValidationPackRequest = (object) => {
        const {materialLots, packageType} = object;
        let requestBody = PackageValidationRequestBody.buildValidationPackageBody(materialLots, packageType)
        let requestHeader = new PackageValidationRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.ValidationPackMaterialLotsUrl);
        let requestObject = {
            request: request,
            success: object.success,
            fail: object.fail
        }
        MessageUtils.sendRequest(requestObject);
    }
    
    static sendValidationAppendPackRequest = (object) => {
        const {materialLots, packagedMaterialLotId} = object;
        let requestBody = PackageValidationRequestBody.buildValidationAppendBody(materialLots, packagedMaterialLotId)
        let requestHeader = new PackageValidationRequestHeader();
        let request = new Request(requestHeader, requestBody, UrlConstant.ValidationPackMaterialLotsUrl);
        let requestObject = {
            request: request,
            success: object.success,
            fail: object.fail
        }
        MessageUtils.sendRequest(requestObject);
    }

}