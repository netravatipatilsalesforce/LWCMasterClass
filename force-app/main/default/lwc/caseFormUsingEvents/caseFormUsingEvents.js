import { LightningElement } from 'lwc';

export default class CaseFormUsingEvents extends LightningElement {

    objectApiName='Case';

    handleSubmit(event)
    {
        event.preventDefault();
        console.log('Form is submitted for Case!!' + JSON.stringify(event.detail));
    }

    handleSuccess(event)
    {
        alert('Case form has been succussfully created!' + JSON.stringify(event.detail));
    }

    handleError(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.showToast("Error", event.detail.detail, "error");
    }
    handleLoadEvent(event) {
        console.log('Form is loaded successfully');
    }
}