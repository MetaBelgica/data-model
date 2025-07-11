## Authority entities and properties

Within MetaBelgica we maintain [=authorities=], represented as [=entities=] that are interlinked.
Generally we distinguish the following three types of entities and additionally have the concept of time represented as [=property=].

1. Persons
2. Organizations (Corporate bodies)
3. Locations

In the following we elaborate on the different entities and properties.

Similarly, organizations will be linked to locations to indicate where an organiation is established.

Each of these entities has a number of properties such as related dates, but most importantly external identifiers to other reliable databases like [=ISNI=].

This data model follows the Open World Assumption ([=OWA=]), hence a missing property does not mean that it does not exist,
just that it is not known.
For example, in cases where we do not know if a person is dead, we do not indicate "unknown" or something similar, we rather leave the property empty.

### Persons

Persons are the creators or in other form contributors to cultural content.
More specifically a person within MetaBelgica can also be a public identity such as a pseudonym.

Our goal is to provide high quality reference data which requires a disambiguation of persons.
Hence we define a number of properties that help to distinguish persons among each other.
In other words, two persons with the same name can still be distinguished by other additional properties.

#### Preferred name spelling

Historically, in [=authority=] control, a single uniform name was used to uniquely identify an authority record, hence the name as a sort of identifier.
Instead of by name, we use a unique and persistent identifier to refer to persons.
Nevertheless, we still use the preferred name spelling as the preferred label of a person.

* A person <em class="rfc2119">MUST</em> have at least one preferred name
* A person <em class="rfc2119">MAY</em> have one preferred name per language. This supports for example multilingual interfaces to consult the record.
* A preferred name <em class="rfc2119">MUST</em> be comprised of unicode characters and cannot be empty. This supports multilingual use cases in which different alphabets need to be supported.
* A preferred name <em class="rfc2119">MAY</em> be annotated with a language.
* The language of a preferred name or alternate name <em class="rfc2119">MUST</em> be annotated with language tags according to [[RFC5646]].

#### Alternate names

Names might be spelled differently in other languages, there might be recorded nicknames or aliases.
As mentioned above, historically a single uniform name was chosen as preferred name spelling. 
Other spellings were recorded as well to improve information retrieval.

* A person <em class="rfc2119">MAY</em> have zero or more [=alternate names=]
* An alternate name <em class="rfc2119">MUST</em> be comprised of unicode characters and cannot be empty. This supports multilingual use cases in which different alphabets need to be supported.

#### Birth date
This is the recorded date of birth of a person according to the Gregorian calender.

* The birth date <em class="rfc2119">MUST</em> be indicated by using [[ISO8601:2019-1]] or its extension for uncertain dates [[ISO8601:2019-2]].

<p class="note" title="ISO8601:2019 extension for uncertain dates is used">
We allow dates according to the ISO8601:2019 extension [[ISO8601:2019-2]] that is based on the Extended Date Time Format (EDTF) from the Library of Congress.
This allows to also record uncertain dates in various ways.
</p>

#### Death date
This is the recorded date of death of a person according to the Gregorian calender.

* The death date <em class="rfc2119">MUST</em> be indicated by using [[ISO8601:2019-1]] or its extension for uncertain dates [[ISO8601:2019-2]].

#### Occupation
This is the occupation of a person according to a controlled vocabulary.

* A person <em class="rfc2119">MAY</em> have zero or more occupations.

#### Birth place
This property links a person to an [=entity=] of type Location (see definition below).

#### Death place
This property links a person to an [=entity=] of type Location (see definition below).

### Organizations
Todo

### Locations
Todo

### Time
This concept is not an entity on its own, but modelled as a property.
