# Breadcrumbs (Component)

   The breadcrumb is s a type of secondary navigation element that shows a trail for allowing users to keep track of their location.

## Inputs

| Property       | Type               | Req   | Description                                       | Default                  |
| -------------- | ------------------ | ----- | ------------------------------------------------- | ------------------------ |
| options        | StBreadCrumbItem[] | False | ] List of navigation parts for show in breadcrumb | \[\                      |
| elementsToShow | Number             | False | Max number of elements to show.                   | 5                        |
| mode           | StBreadCrumbMode   | False | Visualization mode                                | StBreadCrumbMode.DEFAULT |
| qaTag          | String             | False | Id value for qa test                              | ''                       |

## Outputs

| Property | Type   | Description               |
| -------- | ------ | ------------------------- |
| select   | Number | Notify any item selection |

## Example


```html
<st-breadcrumbs [options]="options"
      (select)="onSelect($event)"
      qaTag="breadcrumbs">
</st-breadcrumbs>
```

## Models

*Id, optional label and icon of an option* (StBreadCrumbItem)

```typescript
export class StBreadCrumbItem {
    id: string;
    label ? : string;
    icon ? : string;
}
```

