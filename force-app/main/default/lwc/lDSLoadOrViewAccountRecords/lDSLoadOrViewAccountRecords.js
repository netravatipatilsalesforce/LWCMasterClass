import { LightningElement, api} from 'lwc';

export default class LDSLoadOrViewAccountRecords extends LightningElement {

    @api recordId;
    objectApiName = 'Account';
    fields = ['Name','Type','Phone','Website','Active__c','Industry',];
}