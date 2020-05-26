# Vertical Icon Tabs (Component)

   The vertical icon tabs component has been designed to display content in different sections.

## Inputs

| Property     | Type        | Req   | Description   | Default |
| ------------ | ----------- | ----- | ------------- | ------- |
| activeOption | StIconTab   | False | Active option |         |
| options      | StIconTab[] | False | Option list   |         |

## Outputs

| Property     | Type      | Description                                 |
| ------------ | --------- | ------------------------------------------- |
| changeOption | StIconTab | Event emitted when user clicks on an option |

## Example


```html
<st-vertical-icon-tabs class="vertical-icon-tabs"
      [options]="options"
      [activeOption]="active"
      (changeOption)="onChangeOption($event)">
</st-vertical-icon-tabs>
```

## Models

*Icon tab* (StIconTab)

```typescript
export interface StIconTab {
    id: string;
    text: string;
    iconClass: string;
}
```

