public  class DependentWiresController {
   
    @AuraEnabled(cacheable = true)
    public static List<Task> fetchTaskForAccount(String accountName){
        try {
            return [SELECT Id, Subject, ActivityDate, Description, what.Name FROM TASK WHERE what.Name = :accountName];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}