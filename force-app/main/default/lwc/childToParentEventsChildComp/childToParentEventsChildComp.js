import { LightningElement } from 'lwc';

export default class ChildToParentEventsChildComp extends LightningElement {

    selectedProduct;

    activeEvents = {};

    handleFiringEvent()
    {
        this.selectedProduct = 'Geely Coolrey';
        this.activeEvents = {id: 1, name:'Poolen Platra'};

        //Custom events come in picture to send this datato parent
        //child level : Student : raise their hand

        //Tips and best practices
        //always name custom events in lowercase , e.g:namechange
        //Use event.detail to carry simple or complex objects.
        const event = new CustomEvent('sendproductselected' , {
            detail : 
            {
                selectedProduct : this.selectedProduct,
                activeEvents : this.activeEvents,
                timeStamp : new Date().toISOString(),
                selectedBy : 'Neha Patil'
            }
        });

        this.dispatchEvent(event);
    }
}