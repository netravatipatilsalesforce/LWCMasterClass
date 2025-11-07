import { LightningElement, wire} from 'lwc';
import getCases from '@salesforce/apex/independentWiresController.getCases';
import getTasks from '@salesforce/apex/independentWiresController.getTasks';

export default class IndependentWires extends LightningElement {

    foundCases = false;
    foundTasks= false;

    caseList;
    taskList;

    @wire(getCases)
    wiredCases({data, error}){
        if(data)
        {
            this.caseList = data;
            this.foundCases = true
        }
        if(error)
        {
              this.caseList = undefined;
        }
    }

    @wire(getTasks)
    wiredTasks({data, error}){
        if(data)
        {
            this.taskList = data;
            this.foundTasks = true
        }
        if(error)
        {
              this.taskList = undefined;
        }
    }


}