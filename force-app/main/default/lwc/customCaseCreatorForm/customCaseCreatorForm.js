import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CASE_OBJ from '@salesforce/schema/case';
import SUBJECT from '@salesforce/schema/Case.Subject';
import PRIORITY from '@salesforce/schema/Case.Priority';
import DESCRIPTION from '@salesforce/schema/Case.Description';

export default class CustomCaseCreatorForm extends LightningElement {

    subject = '';
    priority='';
    description='';
    recordTypeId = '';

    @wire(getObjectInfo, {objectApiName: CASE_OBJ}) caseRecord({data, error})
    {
        if(data)
        {
            let recordTypeDetails = data.recordTypeInfos;
            console.log('Data recieved is: ' + JSON.stringify(recordTypeDetails));
            Object.keys(recordTypeDetails).forEach((key) => {
                const recordTypeInfo = recordTypeDetails[key];
                if(recordTypeDetails.name == 'SMS Community Cases')
                {
                    console.log('SMS Community Cases');
                    this.recordTypeId = recordTypeInfo.recordTypeId;
                }
            })
        }
    }

    get options()
    {
        return[
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High', value: 'High'},
        ];
    }

    populateSubject(event)
    {
       
        this.subject = event.target.value;
    }
    populatePriority(event)
    {
        
        this.priority = event.detail.value;
    }
    populateDescription(event)
    {
        
        this.description = event.detail.value;
    }
    /*I have the values , now i want to create case without calling Apex or server side. 
    I want to call and talk to the server directly from js.*/ 

    async createCase()
    {
        //object Api name & the list of fields
        //Case object
        //Subject, Priority, description.

        const fields = {};
        fields[SUBJECT.fieldApiName] = this.subject;
        fields[PRIORITY.fieldApiName] = this.priority;
        fields[DESCRIPTION.fieldApiName] = this.description;


        let recordInput = { apiName: CASE_OBJ.objectApiName, fields};
        await createRecord(recordInput)
        //As soon as the record is created , or error will come, you actually want to alert it.
        .then((record) => {  
            alert('Your case has been succussfully submitted!!' +record.id);
         })
        .catch(error => { 
            alert('Sorry, Something went wrong' +error.body.message);

         });

    }
}