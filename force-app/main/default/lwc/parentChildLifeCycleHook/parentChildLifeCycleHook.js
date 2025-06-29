import { LightningElement } from 'lwc';

export default class ParentChildLifeCycleHook extends LightningElement {

    memberName = 'Abhi';

    handleChangeEvent()
    {
        this.memberName = 'Neha';
    }

    constructor()
    {
        super();
        console.log('Parent - Constructor life cycle hook called');
    }

    connectedCallback()
    {
         console.log('Parent - Connected Callback life cycle hook called');
    }

     disconnectedCallback()
    {
         console.log('Parent - Disconnected Callback life cycle hook called');
    }

   renderedCallback()
    {
         console.log('Parent - Rendered Callback life cycle hook called');
    }

    errorCallback(stack, trace)
    {
        console.log(stack + ' -----' + trace);
    }

}