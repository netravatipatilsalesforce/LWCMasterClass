import { LightningElement, api} from 'lwc';

export default class LDSEditRecordWithCustomEditForm extends LightningElement {

    @api recordId;
    objectApiName = 'Case';
}