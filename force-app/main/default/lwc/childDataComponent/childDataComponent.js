import { LightningElement,api } from 'lwc';

export default class ChildDataComponent extends LightningElement {


    @api productId;
    @api productName;
    @api productRating;
}