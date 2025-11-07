import { LightningElement, api, wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import fetchTaskForAccount from '@salesforce/apex/DependentWiresController.fetchTaskForAccount';


export default class DependentWires extends LightningElement {

    //drop my component on Account Record page
    //This means i will have the recordId of the Account
    
    //using this record id , get the Name of the Account - this will be the my first wire
    //once I have my account name, I will call the apex to search for tasks associated to that account name - this will be the second wire.

    @api recordId;
    taskList;
    accountName;
    taskFound = false;
    fields = [ACCOUNT_NAME];

    @wire(getRecord, {recordId: '$recordId', fields: '$fields'})
    wiredAccount({data, error})
    {
        if(data)
        {
            console.log('Related Tasks from Account:' + JSON.stringify(data));
            this.accountName = data.fields.Name.value;
            this.taskFound = true;
        }
        else if(error)
        {
             console.log(error.body.message);
        }
    }

    @wire(fetchTaskForAccount , {accountName: '$accountName'})
    wiredTask({data, error})
    {
        if(data)
        {
            console.log('Related Tasks:' + data);
            this.taskList = data;
            this.taskFound = true;
        }
        else if(error)
        {
            console.log(error.body.message);
        }
    }


}

