# General

## Code Structure

A component is always contained inside a folder (component name camelCase) and comprised of one main component file (component name PascalCase) and one interface file (same filename as the main file with a "I" before and "Props" after it). Also we supply a documentation file if needed.

```sh
exampleComponent
    ExampleComponent.tsx
    IExpampleComponentProps.ts
    ExampleComponent.doc.md
```

## Form Structure

<span style="color: red">THIS IS STILL SUBJECT TO CHANGE</span>

The Form gets automaticly generated from a JSON. For to signup Process this JSON file comes from the backend. The JSON **MUST** folow the following structure.

```json
{
  "title": "The title of the Form",
  "chunks": []
}
```

_"title" is optional, but we advise to set it_
_"chunks" is mandatory. It is an array of [chunk json snippets](#chunk)_

### Chunk

One chunk describes the content of one page inside the Form.

```json
{
  "title": "The title of this part of the form",
  "description": "The description of this part of the form",
  "fields": [],
  "noBackButton": false
}
```

_"title" is optional. If not supplied the form title is used instead._\
_"description" is optional. If not supplied no description is shown._\
_"fields" is mandatory. It is an array of [field json snippets](#field)_\
_"noBackButton" is optional. If not supplied we assume its false. It changes the buttons on the bottom of a form part to not include a "back" option. (also is is subject to change)._

### Field

One Field describes one input element. At the moment we have four different input element types.

- [Textinput](#Textinput)
- [Dropdown](#Dropdown)
- [Switchslider](#Switchslider)
- [Datepicker](#Datepicker)

In the following the different json structures for the input fields is shown.

### Textinput

```json
{
  "label": "The Label of the Field",
  "type": "Text",
  "placeholder": "The placeholder",
  "textContentType": "The contenttype",
  "value": "the value"
}
```

_"label" is mandatory and used for the label above the field._\
_"type" is mandatory and needs to be "Text"._\
_"placeholder" is optional. If not supplied the field ether has no placeholde or the label is used._\
_"textContentType" is optional and only needed if the field needs to validate some kind of structure. A list of possible values can be found [here](#TextContentTypeList)_\
_"value" is optional and used if the field should be prefilled with a value._

### Dropdown

```json
{
  "label": "The Label of the Field",
  "type": "Dropdown",
  "placeholder": "The placeholder",
  "options": ["Strings"],
  "icons": ["Icons"],
  "value": "the value"
}
```

_"label" is mandatory and used for the label above the field._\
_"type" is mandatory and needs to be "Dropdown"._\
_"placeholder" is optional. If not supplied the field ether has no placeholde or the label is used._\
_"options" is mandatory. It needs to contain all possible selectable values._\
_"icons" is optional and should not be used yet because the icons are not yet implemented_\
_"value" is optional and used if the field should be prefilled with a value._

### Switchslider

```json
{
  "label": "The Label of the Field",
  "type": "SwitchSlider",
  "defaultIndex": 1,
  "options": ["Strings"],
  "value": "the value"
}
```

_"label" is mandatory and used for the label above the field._\
_"type" is mandatory and needs to be "SwitchSlider"._\
_"defaultIndex" is optional. Its the zero based index of the preselected value. If not supplied 0 is used. ***Be careful to not state an index that is out of bounds. That could lead to errors.***_\
_"options" is mandatory. It needs to contain all possible selectable values._\
_"value" is optional and used if the field should be prefilled with a value._\
**_(Here we still need to combine the value and default index fields because they really are the same.)_**

### Datepicker

```json
{
  "label": "The Label of the Field",
  "type": "DatePicker",
  "value": "the value"
}
```

_"label" is mandatory and used for the label above the field._\
_"type" is mandatory and needs to be "DatePicker"._\
_"value" is optional and used if the field should be prefilled with a value. The value needs to be a timestamp for this!_\
**_(Here we still need to add bounds. So we can state a min age for example.)_**

### Example Form

```json
{
  "title": "Personal Data",
  "chunks": [
    {
      "title": "Personal Data",
      "description": "Let’s get to know each other!",
      "fields": [
        { "label": "First Name", "type": "Text", "placeholder": "Maxi" },
        { "label": "Last Name", "type": "Text", "placeholder": "Mustermensch" },
        {
          "label": "Nationality",
          "type": "Dropdown",
          "placeholder": "Nationality",
          "options": ["German", "Vietnamese", "English", "Chinese"]
        },
        {
          "label": "Gender",
          "type": "SwitchSlider",
          "options": ["Male", "Female", "Other"],
          "defaultIndex": 1
        }
      ]
    },
    {
      "description": "How can we get in contact with you?",
      "fields": [
        {
          "label": "Email",
          "type": "Text",
          "placeholder": "max@mustermensch.com"
        },
        {
          "label": "Country code",
          "type": "Dropdown",
          "options": ["0001", "0002", "0003"]
        },
        {
          "label": "Phone number",
          "type": "Text",
          "placeholder": "(0001) 01234 567891011",
          "textContentType": "telephoneNumber"
        }
      ]
    },
    {
      "description": "Please tell us a little bit about your past.",
      "fields": [
        { "label": "Birthday", "type": "DatePicker" },
        {
          "label": "Country of birth",
          "type": "Dropdown",
          "options": ["German", "Vietnamese", "English", "Chinese"]
        },
        {
          "label": "Place of birth (City)",
          "type": "Text",
          "placeholder": "Berlin"
        },
        {
          "label": "Do you have children?",
          "type": "SwitchSlider",
          "options": ["Yes", "No"],
          "defaultIndex": 1
        }
      ]
    },
    {
      "description": "Where do you live now?",
      "fields": [
        { "label": "Street & Number", "type": "Text" },
        { "label": "Zip code", "type": "Text" },
        { "label": "City", "type": "Text" },
        {
          "label": "Country",
          "type": "Dropdown",
          "options": ["German", "Vietnamese", "English", "Chinese"]
        }
      ]
    }
  ]
}
```

### TextContentTypeList

- "none"
- "URL"
- "addressCity"
- "addressCityAndState"
- "addressState"
- "countryName"
- "creditCardNumber"
- "emailAddress"
- "familyName"
- "fullStreetAddress"
- "givenName"
- "jobTitle"
- "location"
- "middleName"
- "name"
- "namePrefix"
- "nameSuffix"
- "nickname"
- "organizationName"
- "postalCode"
- "streetAddressLine1"
- "streetAddressLine2"
- "sublocality"
- "telephoneNumber"
- "username"
- "password"
- "newPassword"
- "oneTimeCode"
