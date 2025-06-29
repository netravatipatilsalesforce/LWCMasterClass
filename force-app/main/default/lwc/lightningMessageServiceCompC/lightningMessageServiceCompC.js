import { LightningElement,wire } from 'lwc';
import { publish, MessageContext} from 'lightning/messageService';
import demoMessageChannel from '@salesforce/messageChannel/demoMessageChannel__c'

export default class LightningMessageServiceCompC extends LightningElement {

    @wire(MessageContext)
    messageContext;

    submitClickHandler(event){
        let userName= this.refs.userName.value;

        const customEvent = new CustomEvent('usernamechange',{
            bubbles:true,
            composed:true,
            detail: {
                userName: userName
            }
        });
        this.dispatchEvent(customEvent);

        let payLoad = { userName: userName};

        publish(this.messageContext, demoMessageChannel, payLoad);
    }
}