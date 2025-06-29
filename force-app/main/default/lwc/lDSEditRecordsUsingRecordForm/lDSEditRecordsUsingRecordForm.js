import { LightningElement, api} from 'lwc';


const FIELDS = ['CaseNumber','Priority','Origin','Type','Reason'];
export default class LDSEditRecordsUsingRecordForm extends LightningElement {

    @api recordId;
    fields = FIELDS;
}