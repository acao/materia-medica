# materia-medica
A social material medica

## Utilizing SparQL to query DBpedia for reference information

### Autocomplete by binomial:

```sparql
PREFIX dbo: <http://dbpedia.org/ontology/>
		PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
		SELECT * FROM <urn:autocomplete:dbpedia> 
		WHERE {
			?s a dbo:Plant ;rdfs:label ?label .
			FILTER(LANGMATCHES(LANG(?label), 'en') && REGEX(?label, '^SEARCH_TERM','i'))
		} LIMIT 10
```
