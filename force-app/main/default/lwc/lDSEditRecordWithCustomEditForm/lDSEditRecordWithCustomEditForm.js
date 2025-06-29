import { LightningElement, api} from 'lwc';

export default class LDSEditRecordWithCustomEditForm extends LightningElement {

    @api recordId;
    objectApiName = 'Case';

    /*will use this method when we working on create 
    handleSuccussSubmit(event)
    {
        let formReset = this.template.querySelector('lightning-record-edit-form');
        formReset.reset();
    }*/
}