# API Documentation

[<-Back](../dataLayer.doc.md)

## DTOs

### /Feed

```js
[
    {
        id: string,
        title: string,
        heroImage: SquidexImageID,
        cardText: string
    },
    ...
]
```

### /Articles/:ID

```js
{
    id: string,
    title: string,
    heroImage: SquidexImageID,
    cardText: string,
    teaserText: string,
    content: string,
    tags: string[]
    readmore: [
    {
        id: string,
        title: string,
        heroImage: SquidexImageID,
        cardText: string
    },
    ...
]
}
```

### /Articles?subcategoryID=x

```js
[
    {
        id: string,
        title: string,
        heroImage: SquidexImageID,
        cardText: string
    },
    ...
]
```

### /Subcategories?categoryID=x&customerSegmentID=x

```js
[
    {
        id: string,
        title: string,
        articles: [
            {
            id: string,
            title: string,
            heroImage: SquidexImageID,
            cardText: string
            },
        ...
        ]
    }
]
```

### /Categories?customerSegmentID=x

```js
[
    {
        id: string,
        title: string,
        sliderImage: SquidexImageID,
        headerImage: SquidexImageID,
        backgroundImage: SquidexImageID,
        subCategoryIDs: string[]
    }
]
```

### /Todos?customerSegmentID=x

```js
[
    id: string,
    image: SquidexImageID,
    todos: [
        {
            id: string,
            title: string,
            cardText: string,
            checked: boolean
        },
        ...
    ]
]
```

### /Todos/:ID

```js
{
    id: string,
    title: string,
    cardText: string,
    checked: boolean,
    teaserText: string,
    contentText: string,
    note: string,
    readmoreArticles: [
            {
            id: string,
            title: string,
            heroImage: SquidexImageID,
            cardText: string
            },
        ...
        ]
}
```

### /Bookmarks

```js
[
    {
        id: string,
        title: string,
        heroImage: SquidexImageID,
        cardText: string
    },
    ...
]
```

### /Products?customerSegmentID=x

```js
[
    {
        id: string,
        title: string,
        category: string,
        headerImage: SquidexImageID,
        productImage: SquidexImageID,
        cardText: string
    },
    ...
]
```

### /Products/:ID

```js
[
    {
        id: String,
        title: String,
        category: String,
        headerImage: SquidexImageID,
        productImage: SquidexImageID,
        cardText: String,
        tags: String[],
        teaserText: String,
        content: String,
        partnerLogoImage: SquidexImageID,
        benefits: String[],
        details: String[],
        tacTitle: String,
        tacLink: String,
        price: Number,
        disclaimer: String,
        pricingDetail: String,
        recurrency: Boolean,
        isSingleBuyable: Boolean
    },
    ...
]
```

### /PackageGroup/FI?customerSegment=x

```js
{
    id: String,
    title: String,
    description: String,
    packageList: AdvisoryPackageID[]
}
```

### /PackageGroup/Advisory?customerSegment=x

```js
{
    id: String,
    title: String,
    description: String,
    promotedPackage: FIPackageID,
    packageList: FIPackageID[]
}
```

### /Packages/FI?customerSegment=x

```js
[
  {
    id: String,
    name: String,
    description: String,
    image: String,
    packageColor: String,
    fontColor: String,
    includedProducts: ProduktID[],
    price: Number,
    disclaimer: String,
    pricingDetail: String,
    recurrence: Boolean
  },
  ...
]
```

### /Packages/Advisory?customerSegment=x

```js
[
  {
    id: String,
    name: String,
    description: String,
    image: String,
    packageColor: String,
    fontColor: String,
    includedProducts: ProduktID[],
    price: Number,
    disclaimer: String,
    pricingDetail: String,
    recurrence: Boolean
  },
  ...
]
```

### /CustomerSegments

```js
[
  {
    id: String,
    name: String,
    title: String
  },
  ...
]
```

### /User

<!--

WHAT SHOULD IT RETURN?

-->
