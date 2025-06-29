import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { LightningElement, api, wire} from 'lwc';
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import TYPE_FIELD from '@salesforce/schema/Case.Type';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

export default class LDSLoadARecordsWithoutOutputFields extends LightningElement {

    @api recordId;
    fields = [CASE_NUMBER , STATUS_FIELD, TYPE_FIELD, REASON_FIELD, PRIORITY_FIELD];

    //getRecord, getFieldValue(wired adapters) - I am using the both without using any lightning-record-form,lightning-record-view-form, and otheer ant output fields as well.c/bundleShowcase

    @wire(getRecord, {recordId : '$recordId', fields : '$fields'}) caseVar;

    get casenumber(){
        return getFieldValue(this.caseVar.data , CASE_NUMBER);
    }

    get status(){
        return getFieldValue(this.caseVar.data , STATUS_FIELD);
    }

    get type(){
        return getFieldValue(this.caseVar.data , TYPE_FIELD);
    }

    get reason(){
        return getFieldValue(this.caseVar.data , REASON_FIELD);
    }

    get priority(){
        return getFieldValue(this.caseVar.data , PRIORITY_FIELD);
    }

}