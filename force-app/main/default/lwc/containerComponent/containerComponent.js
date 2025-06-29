import { LightningElement, api} from 'lwc';

export default class ContainerComponent extends LightningElement {

    @api productsFound = false;
    
    @api productsList;
    parentCalled = false;

    get hasProduct(){
        return this.productsFound = "true" ? true : false;
    }

    @api handleParentCall(){
        this.parentCalled = true;
    }
  
}