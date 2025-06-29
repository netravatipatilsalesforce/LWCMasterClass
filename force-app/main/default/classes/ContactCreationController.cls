public class ContactCreationController 
{
   @AuraEnabled(Cacheable=true)
    public static List<Id> getFilteredAccountIds(String leadSource)
    {
        List<AggregateResult> accountAgg = [SELECT AccountId FROM Opportunity WHERE Account.AccountSource =:leadSource
                                     AND Account.IsActive__c = true GROUP BY AccountId HAVING COUNT(Id) > 1];

        List<Id> filteredIds = new List<Id>();

        for(AggregateResult ar : accountAgg)
        {
            filteredIds.add((Id) ar.get('AccountId'));
        }

        return filteredIds;
    }
}