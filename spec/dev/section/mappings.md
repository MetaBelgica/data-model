## Mappings

For interoperability we provide a number of mappings to different RDF vocabularies, but also to the used Wikbiase data model.
We have the intention to provide data of the MetaBelgica platform in different data formats, based on the following mappings.


### Wikibase Data Model
Todo: Wikibase data model


#### Flexible data governance model

The conceptual MetaBelgica data model, implemented as Wikibase entities and properties, can be used to support various data governance use cases.
It can be used in a consistent way and only relies on the properties <code>visibility</code>, <code>applies To</code> and <code>legal ground</code>, optionally with <code>start date</code> and <code>end date</code>.

The following use cases are supported which means that even fine-grained control is possible:
1. *Display entity* publicly
2. *Display property for entities* publicly
3. *Do not display entity* publicly
4. *Do not display property on entities* publicly
5. *Opt-in to display entity* publicly
6. *Opt-in to display property for specific entity* publicly
7. *Opt-out to display entity* publicly
8. *Opt-out to display property for specific entity* publicly

Additionally, the Wikibase data model can be used to annotate provenance about the visibility with a <code>legal ground</code> property when used as a qualifier.
Therefore it will be documented _why_ something is public or not and when using start and end date qualifiers, a whole provenance record can be built.
Useful to indicate if a certain opt-in only occurred at some point in time or to indicate from when an opt-out was requested.

<aside class="example" title="Visibility annotation">
<p>=== Q123 (John) ===</br>
-> visibility (P101) = public (Q101)</br>
&emsp; qualifier: appliesTo (P102) = gender (P111)</br>
&emsp; qualifier: legalGround (P103) = opt-inJohn (Q222)</br>
</p>

<p>=== Q123 (John) ===</br>
-> visibility (P101) = public (Q101)</br>
&emsp; qualifier: appliesTo (P102) = occupation (P111)</br>
&emsp; qualifier: legalGround (P103) = opt-inJohn (Q222)</br>
</p>

<p>-> visibility (P101) = public (Q101)
&emsp; qualifier: appliesTo (P102) = whole entity (Q102)
&emsp; qualifier: legalGround (P103) = public figure (Q111)</p>
</p>
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

mb:legalDeposit a dpv:LegalBasis ;
                dpv:hasJurisdiction yy ;
                dpv:hasLaw xx .

### SKOS
Todo: SKOS mapping

### CIDOC-CRM
Todo: CIDOC-CRM mapping

### OSLO
Todo: OSLO mapping

#### OSLO Persoon
