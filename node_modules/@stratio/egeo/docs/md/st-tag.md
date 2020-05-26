# Tag (Component)

   The tag component allows to display small texts.

## Inputs

| Property  | Type      | Req   | Description                                            | Default |
| --------- | --------- | ----- | ------------------------------------------------------ | ------- |
| tag       | StTagItem | False | Item that contains the tag info                        |         |
| removable | Boolean   | False | Boolean to display or not the cross icon to remove tag |         |
| clickable | Boolean   | False | Boolean to set tag as clicklable or not                | true    |

## Outputs

| Property | Type      | Description                             |
| -------- | --------- | --------------------------------------- |
| remove   | StTagItem | Even emitted when cross icon is clicked |
| click    | StTagItem | Event emitted when tag is clicked       |

## Example


```html
<st-tag [tag]="simpleTag"
      class="small"
      [removable]="true"></st-tag>
```

## Models

*StTagItem* (StTagItem)

```typescript
export class StTagItem {
    id: any;
    text: string;
    icon ? : string;
    bubble ? : string;
    [key: string]: any;
}
```

