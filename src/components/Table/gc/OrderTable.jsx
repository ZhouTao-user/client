
import EntityListTable from '../EntityListTable';
import { Button } from 'antd';
import AsyncManagerRequest from '../../../api/gc/async-manager/AsyncManagerRequest';

/**
 * 单据表单
 */
export default class OrderTable extends EntityListTable {

    static displayName = 'OrderTable';

    createButtonGroup = () => {
        let buttons = [];
        buttons.push(this.createExportDataButton());
        buttons.push(this.createAsyncErpButton());
        return buttons;
    }

    asyncErp = () => {
        AsyncManagerRequest.sendAsyncSoRequest({});
    }

    buildOperation = (record) => {
        let operations = [];
        operations.push(this.buildEditButton(record));
        return operations;
    }

     /**
     * 同步EPR
     */
    createAsyncErpButton = () => {
        return <Button key="asyncErp" type="primary" style={styles.tableButton} icon="file-excel" onClick={this.asyncErp}>
                        {"ERP"}
                    </Button>
    }
}

const styles = {
    tableButton: {
        marginLeft:'20px'
    }
};
