public class ToastMessageController {
   
  @AuraEnabled
    public static void createAccountWithName(String accountName) {
        if (String.isNotBlank(accountName)) {
            insert new Account(Name = accountName);
        }
        else {
            throw new AuraHandledException('Account Name cannot be blank');
        }
    }
}