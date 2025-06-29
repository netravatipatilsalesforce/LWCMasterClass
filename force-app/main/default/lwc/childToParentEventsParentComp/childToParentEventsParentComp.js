import { LightningElement } from 'lwc';

export default class ChildToParentEventsParentComp extends LightningElement {

    eventReceived = false;
    selectedProduct;
    activeEvents = {};
    timeStamp;
    selectedBy = 'Unknown as of now';

    handleProductSelection(event)
    {
        this.eventReceived = true;
        const {selectedProduct, activeEvents, timeStamp, selectedBy} = event.detail;
        console.log(selectedProduct);
        console.log(activeEvents);
        console.log(timeStamp);
        console.log(selectedBy);

        this.selectedProduct = selectedProduct;
        this.activeEvents = activeEvents;
        this.timeStamp = timeStamp;
         this.selectedBy = selectedBy;
    }
}
