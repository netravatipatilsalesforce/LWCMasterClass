import { LightningElement } from 'lwc';
import createAccountWithName from "@salesforce/apex/ToastMessageController.createAccountWithName";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class ToastDisplay extends LightningElement {

    accountName;

    handleNameChange(event){
        this.accountName = event.detail.value;
    }

    handleAccountCreation()
    {
       // console.log(this.accountName);
        //I want to call apex, - create an account , once created, come back here and show toast or succuss message. 
        if(this.accountName)
        {
                createAccountWithName({accountName: this.accountName})
                .then(() => {
                    //result here if all good
                    console.log('Account Created!!');
                    this.ShowToast('Success','Account record created  Succussfully!','success','sticky');
                    
                })
                .catch(error => {
                    //error if got error
                    console.log('error'  + error.body.message);
                    this.ShowToast('Error','Something went Wrong!','error','sticky');
                })
        }
        else{
              this.ShowToast('Error','Please Enter Account Name','error','sticky');
        }
       

    }

    ShowToast(title,message,variant,mode) 
    {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(event);
    }

    /* ShowErrorToast() 
    {
        const event = new ShowToastEvent({
            title: 'Error Message',
            message:'Somthing went wrong!!',
            variant: 'error',
            mode: 'sticky'
        });
         this.dispatchEvent(event);
    }*/
}