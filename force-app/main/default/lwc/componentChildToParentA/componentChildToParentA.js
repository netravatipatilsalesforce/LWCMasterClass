import { LightningElement } from 'lwc';

export default class ComponentChildToParentA extends LightningElement {
    userName;

    userNameChangeHandler(event){
        this.userName = event.detail.userName;
    }
}