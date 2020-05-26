# Color picker (Component)

   The color picker allows user to choose between several colors

## Inputs

| Property | Type     | Req   | Description                                             | Default |
| -------- | -------- | ----- | ------------------------------------------------------- | ------- |
| label    | String   | False | Optional label displayed on the top of the color picker |         |
| palette  | String[] | False | List of colors to be selected                           |         |

## Outputs

| Property | Type   | Description                            |
| -------- | ------ | -------------------------------------- |
| change   | String | Event emitted when a color is selected |

## Example


```html
<st-color-picker label="Choose a Status color"
      [selected]="selectedColor"
      [palette]="palette"
      (change)="onSelectColor($event)">
</st-color-picker>
```

