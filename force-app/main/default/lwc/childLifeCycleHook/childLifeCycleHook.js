import { LightningElement } from 'lwc';

export default class ChildLifeCycleHook extends LightningElement {

    memberAddress = 'Patil';
    handleChange()
    {
        this.memberAddress = 'Dolas';
    }

    constructor()
    {
        super();
        console.log('Child - Constructor life cycle hook called');
    }

    connectedCallback()
    {
         console.log('Child - Connected Callback life cycle hook called');
    }

     disconnectedCallback()
    {
         console.log('Child - Disconnected Callback life cycle hook called');
    }

   renderedCallback()
    {
         console.log('Child - Rendered Callback life cycle hook called');
    }

    errorCallback(stack, trace)
    {
        console.log(stack + ' -----' + trace);
    }
}