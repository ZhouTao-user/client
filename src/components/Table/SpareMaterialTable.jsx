import React from 'react';

import './ListTable.scss';
import EntityListTable from './EntityListTable';
import { Form, Button, Table } from 'antd';
import I18NUtils from '../../api/utils/I18NUtils';
import { i18NCode } from '../../api/const/i18n';
import TableManagerRequest from '../../api/table-manager/TableManagerRequest';
import TableObject from '../../api/dto/ui/Table';
import MessageUtils from '../../api/utils/MessageUtils';
import MaterialPartsForm from '../Form/MaterialPartsForm';
import ReceivePartsForm from '../Form/ReceivePartsForm';

const TableName = {
    ReceiveMLot: "MMReceiveMLot"
}

export default class SpareMaterialTable extends EntityListTable {

    static displayName = 'SpareMaterialTable';

    constructor(props) {
        super(props);
        let state = Object.assign(this.state, {
            receiveMaterialTable: {fields: []},
        });
        this.state = state;
    }

    createForm = () => {
        let childrens = [];
        const WrappedAdvancedMaterialForm = Form.create()(MaterialPartsForm);
        childrens.push(<WrappedAdvancedMaterialForm key={MaterialPartsForm.displayName} ref={this.formRef} object={this.state.editorObject} visible={this.state.formVisible} 
                                                        table={this.state.table} onOk={this.refresh} onCancel={this.handleCancel} />);
        const WrappedAdvancedReceiveMaterialForm = Form.create()(ReceivePartsForm);
        childrens.push(<WrappedAdvancedReceiveMaterialForm key={ReceivePartsForm.displayName} ref={this.formRef} object={this.state.receiveMaterialObject} visible={this.state.receiveMaterialFormVisible} 
                                                            table={this.state.receiveMaterialTable} onOk={this.handleReceiveMaterialOk} onCancel={this.handleCancelReceiveMaterialLot} />);                                   
        return childrens;

    }

    /**
     * 创建btn组。不同的table对button的组合要求不一样时。可以重载其方法做处理
     */
    createButtonGroup = () => {
        let buttons = [];
        buttons.push(this.createAddButton());
        buttons.push(this.createImportButton());
        buttons.push(this.createExportDataAndTemplateButton());
        buttons.push(this.createReceiveMaterialLotButton());
        return buttons;
    }

    createReceiveMaterialLotButton = () => {
        return <Button key="ReceiveMaterialLot" type="primary" style={styles.tableButton} icon="plus" onClick={() => this.handleReceiveMaterialLot()}>{I18NUtils.getClientMessage(i18NCode.BtnReceive)}</Button>;
    }

    handleReceiveMaterialLot = () => {
        const selectedMaterial = this.getSingleSelectedRow();
        if (!selectedMaterial) {
            return;
        }
        let self = this;
        let requestObject = {
            name: TableName.ReceiveMLot,
            success: function(responseBody) {
                let table = responseBody.table;
                let receiveMaterialObject = TableObject.buildDefaultModel(table.fields, selectedMaterial);
                self.setState({
                    receiveMaterialTable: responseBody.table,
                    receiveMaterialObject: receiveMaterialObject,
                    receiveMaterialFormVisible : true
                });
            }
        }
        TableManagerRequest.sendGetByNameRequest(requestObject);
    }

    handleReceiveMaterialOk = () => {
        this.setState({
            receiveMaterialFormVisible : false
        });
        MessageUtils.showOperationSuccess();
    }

    handleCancelReceiveMaterialLot = () => {
        this.setState({
            receiveMaterialFormVisible : false
        });
    }
}

const styles = {
    tableButton: {
        marginLeft:'20px'
    }
};