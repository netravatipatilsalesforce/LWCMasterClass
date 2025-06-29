import { LightningElement, wire} from 'lwc';
import fetchData  from '@salesforce/apex/sortingController.fetchData';

const columns = [
        {label : 'Id', fieldName : 'Id', type : 'text'},
        {label : 'Name', fieldName : 'Name', type : 'text'},
         {label : 'StageName', fieldName : 'StageName', type : 'text'},
        {label : 'Amount', fieldName : 'Amount' , type : 'number'},
        {label : 'CloseDate', fieldName : 'CloseDate' , type : 'date'}
];

export default class ClientSideSortingComponent extends LightningElement 
{
    data = [];
    columns = columns;
    @wire(fetchData)
    wiredData({error, data})
    {
        if(date)
        {
          this.data = data;
        }
        else if(error)
        {
            console.log('Error -->' +JSON.stringify(error));
        }
    }
}