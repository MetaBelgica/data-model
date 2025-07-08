## Authority entities and properties

Within MetaBelgica we maintain [=authorities=], represented as [=entities=] that are interlinked.
Generally we distinguish the following three types of entities and additionally have the concept of time represented as [=property=].

1. Persons
2. Organizations (Corporate bodies)
3. Locations

In the following we elaborate on the different entities and properties.

Similarly, organizations will be linked to locations to indicate where an organiation is established.

Each of these entities has a number of properties such as related dates, but most importantly external identifiers to other reliable databases.

Todo: elaborate

### Persons

We refer to persons as the creators or in other form contributors to cultural content.
More specifically a person within MetaBelgica can also be a public identity such as a pseudonym.

Our goal is to provide high quality reference data which requires a disambiguation of persons.
Hence we define a number of properties that help to distinguish persons among each other.
In other words, two persons with the same name can still be distinguished by other additional properties.

#### Preferred name spelling

Historically, [=authority=] data used a single name to uniquely refer to it, hence as a sort of identifier.
Instead of by name, we use a unique and persistent identifier to refer to persons.
Nevertheless, we still use the preferred name spelling as the preferred label of a person.

* Each person `must` have at least one preferred name
* Each person `may` have one preferred name per language. This supports for example multilingual interfaces to consult the record.
* A preferred name `must` be comprised of unicode characters. This supports multilingual use cases in which different alphabets need to be supported.

#### Alternate names



#### Birth date

#### Death date

#### Occupation

#### Birth place

This property links a person to an [=entity=] of type Location (see definition below).

#### Death place



### Organizations


### Locations


### Time

This concept is not an entity on its own, but modelled as a property.
