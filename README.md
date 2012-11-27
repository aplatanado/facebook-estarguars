## Facebook Estarguars

### YQL Open Data Tables

These Facebook applications use YQL to retrieve the data that they will use when running. So they do not have to run any code on server-side.

The YQL Open Data Tables used are build scraping web pages that contains the information of interest to these applications (Wikipedia, Wikiquote, Wikia, etc.).

At this time, these are the Open Data Table defintion files created for this proyect:

 * [wikia.es.starwars.xml](facebook-estarguars/blob/master/wikia.es.starwars.xml) - Without any condition, provides a list of Star Wars featured articles in spanish ([see in YQL console](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20wikia.es.starwars%3B&env=http%3A%2F%2Fraw.github.com%2Faplatanado%2Ffacebook-estarguars%2Fmaster%2Falltables.env)). If we provide an article URL through ```article``` key, the query will return partial content of this article ([see in YQL console](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20wikia.es.starwars%20where%20article%3D'http%3A%2F%2Fes.starwars.wikia.com%2Fwiki%2FObi-Wan_Kenobi'%3B&env=http%3A%2F%2Fraw.github.com%2Faplatanado%2Ffacebook-estarguars%2Fmaster%2Falltables.env)). It is taken from [es.starwars.wikia.org](http://es.starwars.wikia.org)

 * [wikiquote.es.starwars.xml](facebook-estarguars/blob/master/wikiquote.es.starwars.xml) - List of Star Wars quotes in spanish. It is taken from [es.wikiquote.org](http://es.wikiquote.org) ([see in YQL console](http://developer.yahoo.com/yql/console/?q=select%20*%20from%20wikiquote.es.starwars%3B&env=http%3A%2F%2Fraw.github.com%2Faplatanado%2Ffacebook-estarguars%2Fmaster%2Falltables.env)).

To simplify the access to these tables, [alltables.env](facebook-estarguars/blob/master/alltables.env) YQL enviroment file includes all of them.

