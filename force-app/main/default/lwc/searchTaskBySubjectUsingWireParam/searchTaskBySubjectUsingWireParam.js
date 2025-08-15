import { LightningElement, wire} from 'lwc';
import fetchTaskBySubject from '@salesforce/apex/TaskController.fetchTaskBySubject';

export default class SearchTaskBySubjectUsingWireParam extends LightningElement {

    taskList;
    subjectText = 'Follow Up';

    @wire(fetchTaskBySubject , {subjectString : '$subjectText'})//variable inside the wire method, Dynamic binding for reactivity
    wiredTasks({data, error}){
        if(data){
            this.taskList = data;
        }
        if(error)
        {
            console.log('Error : found error' + error.body.message);
        }
    }
}