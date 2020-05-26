# Fullscreen Layout (Component)

   Component that shows a full screen view with a title and space for buttons and a main content defined by user using ng-content

## Inputs

| Property  | Type    | Req   | Description                     | Default |
| --------- | ------- | ----- | ------------------------------- | ------- |
| fullWidth | Boolean | False | Enable full width visualization | false   |

## Example


```html
<st-fullscreen-layout [fullWidth]="true">
    <p class="st-fullscreen-layout-title">Edition</p>
    <div class="st-fullscreen-layout-buttons">
        <button class="button button-secondary-line button-separator"
              (click)="onClickHideButton()">Cancel</button>
        <button class="button button-primary"
              (click)="onClickHideButton()">Save</button>
    </div>
    <div class="st-fullscreen-layout-content">
        <h1>TEST</h1>
    </div>
</st-fullscreen-layout>
```

