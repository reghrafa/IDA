# Models

[<-Back](../dataLayer.doc.md)

## Article

```js
{
    id: String, // Identifier
    title: String,
    heroImage: String,
    cardText: String,
    teaserText: String,
    content: String,
    tags: String[],
    readmore: articleIDs[], // Cant be references because ring references would be possible
    preview: Boolean
}
```

## Sub-Category

```js
{
    id: String, // Identifier
    title: String,
    articles: String[] // References to articles
}
```

## Category

```js
{
    id: String, // Identifier
    title: String,
    sliderImage: String,
    headerImage: String,
    backgroundImage: String,
    subCategoryIDs: String[]
}
```

## Todo

```js
{
    id: String, // Identifier
    title: String,
    cardText: String,
    checked: Boolean,
    teaserText: String,
    content: String,
    headerImage: String,
    note: String,
    readmoreArticles: String[], // References
    preview: Boolean
}
```

## TodoCategory

```js
{
    id: String, // Identifier
    image: String,
    todoIDs: Todo[] // Reference
}
```

## Product

```js
{
    id: String, // Identifier
    title: String,
    serviceCategory: String,
    cardText: String,
    cardImage: String,
    productImage: String,
    teaserText: String,
    content: String,
    partnerLogoImage: String,
    headerImage: String,
    tags: String[],
    benefits: String[],
    details: String[],
    termsAndConditionTitle: String,
    termsAndConditionPdfLink: String,
    price: Number,
    disclaimer: String,
    pricingDetail: String,
    recurrence: String,
    isSingleBuyable: Boolean,
    preview: Boolean
}
```

## FIPackage

```js
{
    id: String, // Identifier
    name: String,
    description: String,
    image: String,
    packageColor: String,
    fontColor: String,
    includedProducts: Produkt[], // References
    price: Number,
    disclaimer: String,
    pricingDetail: String,
    recurrence: Boolean
}
```

## FIPackageGroup

```js
{
    id: String,
    title: String,
    description: String,
    promotedPackage: FIPackage,
    packageList: FIPackage[]
}
```

## AdvisoryPackage

```js
{
    id: String, // Identifier
    name: String,
    description: String,
    image: String,
    packageColor: String,
    fontColor: String,
    includedProducts: Produkt[], // References
    price: Number,
    disclaimer: String,
    pricingDetail: String,
    recurrence: Boolean
}
```

## AdvisoryPackageGroup

```js
{
    id: String,
    title: String,
    description: String,
    packageList: AdvisoryPackage[]
}
```

## CustomerSegment

```js
{
    id: String, // Identifier
    name: String,
    title: String
}
```

## ProductSelection

```js
{
    selectedPackageID: String,
    selectedAdvisoryPackageIDs: String[],
    selectedProductIDs: String[]
}
```

## FormData

```js
{
    title: String,
    chunks: FormChunk[]
}
```

## FormChunk

```js
{
    title: String,
    description: String,
    fields: FormField,
    noBackButton: Boolean
}
```

## FormField

```js
{
    label: String,
    type: Enum("Text", "Dropdown", "SwitchSlider", "DatePicker"),
    placeholder: String,
    textContentType: String,
    options: String[],
    icons: String[],
    value: String
}
```
