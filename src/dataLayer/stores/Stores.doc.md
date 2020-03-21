# Stores

[<-Back](../dataLayer.doc.md)

## RootStore

```js
{
    Todo: TodoStore,
    Guide: GuideStore,
    Premium: PremiumStore,
    User: UserStore,
    UI: UIStore
}
```

## GuideStore

```js
{
    feed: ArticleIDs[],
    feedSearchText: String,
    caregories: Category[],
    articles: Map(Article)
}
```

[Article](../models/Models.doc.md#Article)\
[Category](../models/Models.doc.md#Category)

## TodoStore

```js
{
  todos: Map(Todo),
  todoCategories: TodoCategory[]
}
```

[Todo](../models/Models.doc.md#Todo)\
[Todo Category](../models/Models.doc.md#TodoCategory)

## PremiumStore

```js
{
  products: Map(Product),
  promotedBuyableProductIDs: ID[],
  advisoryPackages: Package[],
  fiPackages: Package[]
}
// views
{
  buyableProductIDs: Product[],
}
// actions
{

}
```

[Product](../models/Models.doc.md#Product)\
[Package](../models/Models.doc.md#Package)

## UserStore

```js
{
  displayName: String,
  signInState: Enum("loggedOut", "loggingIn","loggingOut", "loggedIn", "error"),
  image: String,
  token: String,
  bookmarks: ArticleIDs[],
  productSelection: ProductSelection,
  formData: FormDataStore,
  settings: Settings
}
```

[Article](../models/Models.doc.md#Article)\
[ProductSelection](../models/Models.doc.md#ProductSelection)\
[FormData](../models/Models.doc.md#FormData)

## SettingsStore

```js
{
  language: String,
  country: String,
  activeCustomerSegmentID: String,
  customerSegments: String[]
}
```

## UIStore

```js
{
  Modal: ModalStore,
  ProfileOpen: boolean
}
```

## ModalStore

```js
{
  activeModal: any,
  activeParameters: any
}
```
