import { LightningElement, api} from 'lwc';

export default class LDSLoadACustomViewRecords extends LightningElement {

    @api recordId;
    objectApiName = 'Case';
    fields = ['CaseNumber','Status','Type','Reason','Origin','Priority'];
}