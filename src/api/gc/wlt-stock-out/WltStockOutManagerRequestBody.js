import MaterialLotAction from "../../dto/mms/MaterialLotAction";

const actionType = {
    WltStockOut: "WltStockOut",
    validationWltMlot: "validationWltMlot",
    queryTagMlotUnit: "queryTagMlotUnit",
    StockOutTag: "StockOutTag",
    UnStockOutTag: "UnStockOutTag"
}

export default class WltStockOutManagerRequestBody {

    actionType;
    documentLine;
    materialLotActions;
    queryMaterialLot;
    stockTagNote;
    customerName;
    stockOutType;
    poId;

    constructor(actionType, documentLine, materialLotActions, queryMaterialLot, stockTagNote, customerName,stockOutType, poId){
        this.actionType = actionType;
        this.documentLine = documentLine;
        this.materialLotActions = materialLotActions;
        this.queryMaterialLot = queryMaterialLot;
        this.stockTagNote = stockTagNote;
        this.customerName = customerName;
        this.stockOutType = stockOutType;
        this.poId = poId;
    }
    
    static buildWltStockOut(documentLine, materialLots) {
        let materialLotActions = [];
        materialLots.forEach(materialLot => {
            let materialLotAction = new MaterialLotAction();
            materialLotAction.setMaterialLotId(materialLot.materialLotId);
            materialLotActions.push(materialLotAction)
        });

        return new WltStockOutManagerRequestBody(actionType.WltStockOut, documentLine, materialLotActions, undefined);
    }

    static buildValidateMLot(queryMaterialLot, materialLots) {
        let materialLotActions = [];
        materialLots.forEach(materialLot => {
            let materialLotAction = new MaterialLotAction();
            materialLotAction.setMaterialLotId(materialLot.materialLotId);
            materialLotActions.push(materialLotAction)
        });
        return new WltStockOutManagerRequestBody(actionType.validationWltMlot, undefined, materialLotActions, queryMaterialLot);
    }

    static buildGetStockOutTagMLotUnit(materialLots) {
        let materialLotActions = [];
        materialLots.forEach(materialLot => {
            let materialLotAction = new MaterialLotAction();
            materialLotAction.setMaterialLotId(materialLot.materialLotId);
            materialLotActions.push(materialLotAction)
        });
        return new WltStockOutManagerRequestBody(actionType.queryTagMlotUnit, undefined, materialLotActions);
    }

    static buildStockOutTagging(materialLots, stockTagNote, customerName, stockOutType, poId) {
        let materialLotActions = [];
        materialLots.forEach(materialLot => {
            let materialLotAction = new MaterialLotAction();
            materialLotAction.setMaterialLotId(materialLot.materialLotId);
            materialLotActions.push(materialLotAction)
        });
        return new WltStockOutManagerRequestBody(actionType.StockOutTag, undefined, materialLotActions, undefined, stockTagNote, customerName, stockOutType, poId);
    }

    static buildUnstockOutTagging(materialLots) {
        let materialLotActions = [];
        materialLots.forEach(materialLot => {
            let materialLotAction = new MaterialLotAction();
            materialLotAction.setMaterialLotId(materialLot.materialLotId);
            materialLotActions.push(materialLotAction)
        });
        return new WltStockOutManagerRequestBody(actionType.UnStockOutTag, undefined, materialLotActions);
    }

}


