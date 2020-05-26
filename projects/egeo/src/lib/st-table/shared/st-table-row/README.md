# Table Row (Component)

   This component is designed to be added to the table component

## Inputs

| Property        | Type    | Req   | Description                                                           | Default |
| --------------- | ------- | ----- | --------------------------------------------------------------------- | ------- |
| selected        | Boolean | False | It indicates if row is selected or not                                | ''      |
| standUpSelected | Boolean | False | It indicates if when row is selected, it has to be displayed stood up | true    |

## Example


```html
<tr st-table-row
      [selected]="true"
      [standUpSelected]="false">
    <!-- CELL LIST WILL BE HERE -->
</tr>
```

