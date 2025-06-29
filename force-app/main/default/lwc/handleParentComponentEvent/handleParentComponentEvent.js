import { LightningElement } from 'lwc';

export default class HandleParentComponentEvent extends LightningElement {

    handleCustomClick(event)
    {
       const message = event.detail.message;
        console.log('Recieved Message From Child:' + message);
    }
}