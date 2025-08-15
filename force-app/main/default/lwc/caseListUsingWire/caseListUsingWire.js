import { LightningElement, wire} from 'lwc';
import getCasesRecordsInSequence from '@salesforce/apex/CaseController.getCasesRecordsInSequence';

export default class CaseListUsingWire extends LightningElement {

    caseList;
    errorMessage;

    //wire it.
    //who to wire(Apex method name) - return callback
    //once wiring is done , do you want to do anything? yes, I want to store the data I recieved into a variable that I will use that in html.c/bundleShowcase
    //add data and error

    @wire(getCasesRecordsInSequence)
    wiredCases({data,error}){
        try{

             if(data){
                this.caseList = data;
                this.errorMessage = '';
             }
             //Cought exception 
            if(error)
            {
                this.data = undefined;
                 this.errorMessage = error.body.message;
                console.log('Error recieved while connection to Apex ' + error.getMessage())
            }
        }
        //UnCought exception 
        catch(error)
        {
            console.error('Error found while retrive cases:' + error.getMessage());        
        }
       
    }
}