public class sortingController {

    @AuraEnabled(Cacheable=true)
    public static List<Opportunity> fetchData()
    {
        List<Opportunity> oppList = [SELECT Id, Name, StageName, Amount, CloseDate FROM Opportunity WHERE Amount != null];

        return oppList;
    }
}   