import { LightningElement } from 'lwc';

export default class MessageParentComponentA extends LightningElement {

     message = '';

    handleInputChange(event) {
        this.message = event.target.value;
    }
}