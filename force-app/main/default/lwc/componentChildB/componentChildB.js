import { LightningElement, api } from 'lwc';

export default class ComponentChildB extends LightningElement {

    @api userName;

    /*@api
    demoMethod(name){
        console.log(name);
    }*/
}
