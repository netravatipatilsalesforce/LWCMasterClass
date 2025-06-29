public class IMDBController {
    @AuraEnabled(Cacheable=true)
    public static string getMovies(String searchText)
    {
        http http = new Http();
        httpRequest req = new httpRequest();
        //Whenever we have the confidential API's that time instead of Remote site setting should have to use Named credentials
        //So, that is help whenver we want or,we add multiple API's to use in our application.if we add only Remote site settings we have to add all apis manually
        //we can use Named Credentials in Salesforce UI
        //This is better future proof code using Named credentials
        req.setEndpoint('callout:IMDB/imdb/imdbSearchByName?query=' +searchText);
        //req.setEndpoint('https://api.collectapi.com/imdb/imdbSearchByName?query=' +searchText);
        req.setMethod('GET');
        //req.setHeader('Authorization','apikey 6ldfWd4tHTtIWpQg1NdnBE:7DskwtZYb1gNZw4NoIrZcC');
        httpResponse res =new httpResponse();
        res = http.send(req);
        System.debug('Status Code:' +res.getStatusCode());
        System.debug('Body :' +res.getBody());
        
        if(res.getStatusCode() == 200)
        {
            return res.getBody();
        }
        else
        {
            return 'Error Code : ' + res.getBody();
        }
    }
   
    @AuraEnabled(Cacheable=true)
    public static string getMoviesDetails(String movieId)
    {
        http http = new Http();
        httpRequest req = new httpRequest();
       // req.setEndpoint('https://api.collectapi.com/imdb/imdbSearchById?movieId=' +movieId);
        req.setEndpoint('callout:IMDB/imdb/imdbSearchById?movieId=' +movieId);
        req.setMethod('GET');
        //req.setHeader('Authorization','apikey 6ldfWd4tHTtIWpQg1NdnBE:7DskwtZYb1gNZw4NoIrZcC');
        httpResponse res =new httpResponse();
        res = http.send(req);
        System.debug('Status Code:' +res.getStatusCode());
        System.debug('Body :' +res.getBody());
        
        if(res.getStatusCode() == 200)
        {
            return res.getBody();
        }
        else
        {
            return 'Error Code : ' + res.getBody();
        }
    }
}