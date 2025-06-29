import { LightningElement } from 'lwc';

export default class LightningMessageServiceCompA extends LightningElement {
    userName;

    userNameChangeHandler(event){
        this.userName = event.detail.userName;
    }
}