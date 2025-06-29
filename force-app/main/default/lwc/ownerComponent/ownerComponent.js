import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {

    //Array of the objects - non  Primitive 
    productsList = [
        {id:'1' , name: 'Mackbook Air' , rating:'3/5'},
        {id:'2' , name: 'Mackbook Pro' , rating:'4/5'},
        {id:'3' , name: 'Humanity' , rating:'5/5'}
    ];
    
    callChildMethod(){
        console.log('Parent Method called  Child to parent.');
        this.template.querySelector('c-container-component').handleParentCall();
    }
}