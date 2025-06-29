import { LightningElement, api } from 'lwc';

export default class LDSLoadOrViewARecords extends LightningElement {

    @api recordId;
    objectApiName = 'Case';
    fields = ['CaseNumber','Type','Status','Reason','Priority'];

}