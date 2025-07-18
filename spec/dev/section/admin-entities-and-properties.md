## Administrative entities and properties

Within MetaBelgica we collaboratively maintain [=authority=] data which requires a data governance strategy.
In order to support data governance aspects, we define additional administrative entities and properties.
How these entities and properties can be used in the Wikibase to on the one hand indicate data governance aspects such as what can be shown publicly and on the other hand enforce it, will be discussed in the following section <a href='#mappings'>mappings</a>.

The Data Privacy Vocabulary [[DPV]] provides an extensive data model to cover many legal and practical aspects of data processing. For simplicity we only specify entities and properties needed for our use case, but we aim to reuse existing [[DPV]] terms as much as possible and align own terms to ensure compatibility.

Todo: mention DPV concepts

### Public visibility

One goal of MetaBelgica is to provide its reference data to the public.
However, certain entities or properties should not be made openly available.

On the one hand we indicate if a an entity or property should be shown publicly by using a <code>visibility</code> property,
and on the other hand we indicate the reason why with a property <code>legal ground</code>.

#### Visibility property
We employ the property <code>visibility</code> to indicate the envisioned target audience. 
In MetaBelgica we distinguish between the following three use cases:

1. <code>internal</code>: An entity/property is only meant to be used internally, one example are other administrative properties
2. <code>shared</code>: An entity/property can be shared in a research context and in the frame of a data sharing agreement with a trusted partner, one example is sensitive data such as gender information
3. <code>public</code>: An entity/property is meant to be displayed publicly, one example is the name of a person record

<p class="note" title="Visibility is merely an annotation">
Indicating a visibility is merely an annotation, you (or the software using the data) still need to use this annotation and act/filter accordingly!
</p>


The visibility property <em class="rfc2119">MUST</em> be applicable to annotate a whole entity, a whole property or a specific [=property instance=].
Entities annotated with <code>internal</code> or <code>shared</code> <em class="rfc2119">MUST NOT</em> be shown publicly.
Entities annotated with <code>internal</code> <em class="rfc2119">MUST NOT</em> be shared with third-parties.

An entity may have several properties, in case the entity itself has the visibility <code>public</code>,
but one of the used properties has the visibility <code>internal</code> or <code>shared</code>,
then those property values <em class="rfc2119">MUST NOT</em> be shown publicly.

<p class="informative" title="Note: annotation">
For example, the property `gender` has the visibility `shared`, hence all person entities with visibility `public` may be displayed publicly, but the value of the gender property `shall not` be shown.
</p>

#### Legal basis
We employ the property <code>legal basis</code> to qualify why an entity, a property or a [=property instance=] has a certain visibility.

The property <code>legal basis</code> <em class="rfc2119">MUST</em> link to one of the following legal bases (future versions of this specification may extend this list):

* <code>Freedom of Information</code>: Used to indicate that an entity, property or property value should be publicly visible. Based on Belgian law, covering the access of administrative documents held by public bodies.
* <code>Deceased</code>: Used to indicate that all personal data can be publicly visible, GDPR no longer applies
* <code>Consent</code>: Used to indicate that something can be publicly visible, because the person described by the record ([=data-subject=]) provided consent to display the property value.
* <code>Opt-out</code>: Used to indicate that something must not be publicly visible, because the person described by the record ([=data-subject=]) opted out.
* <code>Sensitive data</code>: Used to indicate that a property or property value should not be publicly visible as it is sensitive data which also due to data minimization must not be made publicly visible.


When the legal basis <code>Consent</code> is used, there <em class="rfc2119">MUST</em> be a link to a <code>Consent</code> entity that provides further details about the consent.

The following default values apply, for example for the initial bulk-load from MetaBelgica partners.

* The default legal basis for living persons <em class="rfc2119">MUST</em> be <code>Freedom of Information</code>.
* The default legal basis for persons with a known death date <em class="rfc2119">MUST</em> be <code>Deceased</code>

#### Data minimization
With respect to GDPR's [=data minimization=], certain data must not be shown. To a certain extent this is already covered by the visibility property.
However, in some cases data might still be needed and can be shown in aggregated form.

The following three annotations for a [=property=] or [=property instance=] can be chosen to accomodate data minimization use cases in which _some_ data should be shown instead of nothing.

* <code>yearOnly</code>: Instead of a full date, only the year is shown. This supports entity disambiguation while preserving privacy-related details. 
* <code>regionOnly</code>: Instead of a detailed place, only the next higher administrative level of the place is shown.
* <code>countryOnly</code>: Instead of a detailed place, only the country of the place is shown.

The following default values apply, for example for the initial bulk-load from MetaBelgica partners.

* The default annotation for year of birth <em class="rfc2119">MUST</em> be <code>yearOnly</code> in case no date of death is known.
* No data minimization annotation is needed for place of birth or place of death, if known the place will be shown.


### Data quality

The MetaBelgica project brings together [=authority=] data from different Federal Scientific Institutes, 
this also covers legacy data that might be incomplete. 
Also new records might initially miss the value of certain data fields if unknown.
Therefore we distinguish different data quality annotations.

#### Possible Duplicate
Our aim is to provide high-quality reference data and this requires to disambiguate entities by means of names with additional metadata.
In case an entity only has one or more name spellings that occur multiple times in our data, we consider the record a possible duplicate.





