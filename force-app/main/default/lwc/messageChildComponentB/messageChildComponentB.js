import { LightningElement, api} from 'lwc';

export default class MessageChildComponentB extends LightningElement {

     _message;

    @api 
    set message(value) {
        this._message = value ? value.toUpperCase() : '';
    }

    get upperCaseMessage() {
        return this._message;
    }
}