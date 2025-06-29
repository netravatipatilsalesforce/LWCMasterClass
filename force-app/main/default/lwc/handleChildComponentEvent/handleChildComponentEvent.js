import { LightningElement } from 'lwc';

export default class HandleChildComponentEvent extends LightningElement {

    handleClick()
    {
        const event = new CustomEvent('customClick', {
            detail : { message : 'Hello child Component' }
        });
        this.dispatchEvent(event);
    }
}