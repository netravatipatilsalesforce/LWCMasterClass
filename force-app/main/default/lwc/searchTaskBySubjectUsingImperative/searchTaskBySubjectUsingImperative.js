import { LightningElement } from 'lwc';
import fetchTaskBySubject from '@salesforce/apex/TaskController.fetchTaskBySubject';

export default class SearchTaskBySubjectUsingImperative extends LightningElement {

    subject;
    taskList;
    errorMessage;
    showTable = false;

    subjectHasChanged(event)
    {
        this.subject = event.target.value;
    }

    searchTaskSubject()
    {
        //what do you want to do?
        //I want to call apex and pass the subject that thye user has entered.
        //recieve the task list.
        //as soon as I recieve the task list I will map it to the variable so that it starts showing up on the UI.
        
        //Imperative call
        fetchTaskBySubject({subjectString: this.subject})
        .then(result => {
            console.log('Result?' + JSON.stringify(result));//object is convered into string - JSON.stringify
            this.taskList = result;
            this.showTable = true;
        })
        .catch(error => {
             console.log('Error?' +error);
            this.errorMessage = JSON.stringify(error.body.message);
        });
    }
}