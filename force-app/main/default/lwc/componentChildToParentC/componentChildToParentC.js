import { LightningElement } from 'lwc';

export default class ComponentChildToParentC extends LightningElement {

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
    }
}