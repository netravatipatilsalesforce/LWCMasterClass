import { LightningElement } from 'lwc';

export default class LifeCycleHookLWC extends LightningElement {

    userName = 'Neha';

    handleNameChange(){
        this.userName = 'Abhishek';
    }

    constructor()
    {
        super();
       console.log('Constructor hook is Called');
    }

    connectedCallback()
    {
        console.log('Connected Callback hook is Called');
    }

    disconnectedCallback()
    {
       console.log('Disconnected Callback hook is Called');
    }

    renderedCallback()
    {
       console.log('Rendered Callback hook is Called');
    }

    errorCallback(stack, trace)
    {
       console.log(stack + ' -----' + trace);
    }
}