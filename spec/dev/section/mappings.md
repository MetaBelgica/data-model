## Mappings

For interoperability we provide a number of mappings to different RDF vocabularies, but also to the used Wikbiase data model.
We have the intention to provide data of the MetaBelgica platform in different data formats, based on the following mappings.


### Wikibase Data Model
Todo: Wikibase data model


#### Flexible data governance model

The conceptual MetaBelgica data model, implemented as Wikibase entities and properties, can be used to support various data governance use cases.
It can be used in a consistent way and only relies on the properties _visibility_, _applies To_ and _legal ground_, optionally with start and end date.

The following use cases are supported:
1. *Display entity*
2. *Display property for entities*
3. *Do not display entity*
4. *Do not display property on entities*
5. *Opt-in to display entity*
6. *Opt-in to display property for specific entity*
7. *Opt-out to display entity*
8. *Opt-out to display property*

Additionally, the Wikibase data model can be used to annotate provenance about the visibility with a _legal ground_ property when used as a qualifier.
Therefore it will be documented _why_ something is public or not.

By using optional start and end dates as qualifier on the visibility, the history of visibility can be modeled.
Useful to indicate if a certain opt-in only occurred at some point in time or to indicate from when an opt-out was requested.

Todo: elaborating on the following, ideally put it to administrative entities in the authority model section?
Legal ground values
* Generic item: deceased person
* Generic item: sensitive data
* Generic item: personal data
* Specific item: entity of type consent or 'public figure exception' containing specific consent information or context how determined as public figure and by whom with references

<aside class="example" title="Visibility annotation">
=== Q123 (John) ===
-> visibility (P101) = public (Q101)
  qualifier -> appliesTo (P102) = gender (P111)
  qualifier -> legalGround (P103) = opt-inJohn (Q222)

-> visibility (P101) = public (Q101)
  qualifier -> appliesTo (P102) = whole entity (Q102)
  qualifier -> legalGround (P103) = public figure (Q111)
</aside>

<p class="note" title="Why is visibility a claim and not a qualifier">
Placing the visibility property directly on the property that is annotated seems intuitive,
but then the additional legal ground would qualify the property and not the visibility.
Additionally, the history of data governance with start and end dates cannot be modeled.
Yet when using using the visibility property as a claim, additional metadata like
the legal ground and possible start and end dates can be consistently modeled with qualifiers.
</p>



### Schema.org
Todo: Schema.org mapping

### SKOS
Todo: SKOS mapping

### CIDOC-CRM
Todo: CIDOC-CRM mapping

### OSLO
Todo: OSLO mapping
