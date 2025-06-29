import { LightningElement } from 'lwc';

export default class ComponentChildToParentB extends LightningElement {
    userName;
    isRendered=false;

 
    renderedCallback(){
        if(!this.isRendered && this.refs.compC){
            this.refs.compC?.addEventListener('usernamechange', this.userNameChangeHandler.bind(this));
            this.isRendered = true;
        }
       
    }

    userNameChangeHandler(event){
        this.userName = event.detail.userName;

       /* const customEvent = new CustomEvent('usernamechange',{
            
            detail: {
                userName: userName
            }
        });
        this.dispatchEvent(customEvent);*/
    }
}