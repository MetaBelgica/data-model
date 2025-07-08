## Administrative entities and properties

Within MetaBelgica we collaboratively maintain [=authority=] data which requires a data governance strategy.
In order to support data governance aspects, we define additional administrative entities.

### Administrative entities


### Administrative properties


#### Visibility

One goal of MetaBelgica is to provide its reference data to the public.
However, certain entities or properties should not be made openly available.

We employ a visibility property to indicate the envisioned target audience. 
In MetaBelgica we distinguish between the following three use cases:

1. `internal`: An entity/property is only meant to be used internally 
2. `shared`: An entity/property can be shared in a research context and in the frame of a data sharing agreement
3. `public`: An entity/property is meant to be displayed publicly

<p class="note" title="Visibility is merely an annotation">
Indicating a visibility is merely an annotation, you (or the software using the data) still need to use this annotation and act/filter accordingly!
</p>

The visibility property can be used to either annotate an entity or a property.
Entities annotated with `internal` or `shared` `must not` be shown publicly.

An entity may have several properties, in case the entity itself has the visibility `public`,
but one of the used properties has the visibility `internal` or `shared`,
then those property values `must not` be shown publicly.

<p class="informative" title="Note: annotation">
For example, the property `gender` has the visibility `shared`, hence all person entities with visibility `public` may be displayed publicly, but the value of the gender property `shall not` be shown.
</p>


#### Person record category


1. Deceased person
2. Minor
3. ...
4. Public figure
