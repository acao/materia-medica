import 'whatwg-fetch'
import SparqlHttp from 'sparql-http-client'
import { dedent } from './lib'
SparqlHttp.fetch = fetch

export function autocompletePlants(searchText) {
  const endpoint = new SparqlHttp({ endpointUrl: 'http://dbpedia.org/sparql' })
  const queryString = `SELECT * FROM <urn:autocomplete:dbpedia> WHERE { ?s a dbo:Plant ;rdfs:label ?label . FILTER(LANGMATCHES(LANG(?label), 'en') && REGEX(?label, '^${searchText}','i') } LIMIT 10`
  return new Promise((resolve, reject) => {
    endpoint
      .selectQuery(queryString)
      .then(res => res.text())
      .then(body => resolve(body))
      .catch(err => reject(err))
  })
}
