import { LightningElement, api} from 'lwc';

export default class LDSLoadOrViewContactRecords extends LightningElement {

    @api recordId;
    objectApiName = 'Contact';
    fields = ['FirstName','LastName','Email','MobilePhone','Department','AccountId','LeadSource'];
}