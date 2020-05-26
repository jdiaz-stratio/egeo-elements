# Table (Component)

   The table component has been designed to display any content like images, text, graphs, etc.

## Inputs

| Property      | Type            | Req   | Description                                                                                                                                                                  | Default |
| ------------- | --------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| fields        | StTableHeader[] | False | List of field displayed in the header                                                                                                                                        | ''      |
| qaTag         | String          | False | Prefix used to generate the id values for qa tests                                                                                                                           | ''      |
| header        | Boolean         | False | Boolean to show or hide the header                                                                                                                                           | true    |
| sortable      | Boolean         | False | Boolean to make sortable the table, To enable sorting of columns use the new "sortable" field inside stTableHeader model                                                      | true    |
| selectableAll | Boolean         | False | Boolean to show or hide a checkbox in the header to select or deselect all rows                                                                                               | false   |
| currentOrder  | Order           | False | It specifies what is the current order applied to the table                                                                                                                  | ''      |
| customClasses | String          | False | Classes for adding styles to table tag from outside. These can be: separated-rows                                                                                            |         |
| fixedHeader   | Boolean         | False | Boolean to fix the table header                                                                                                                                              | false   |
| selectedAll   | Boolean         | False | It specifies if all rows are selected                                                                                                                                        | false   |
| hasHoverMenu  | Boolean         | False | It specifies if a menu has to be displayed when user puts the mouse over the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu | true    |

## Outputs

| Property    | Type    | Description                                                                        |
| ----------- | ------- | ---------------------------------------------------------------------------------- |
| changeOrder | Order   | Event emitted with the new order which has to be applied to the table rows         |
| selectAll   | Boolean | Event emitted  when user interacts with the checkbox to select or deselect all rows |

## Example


```html
<st-table [fields]="fields"
      [sortable]="true"
      (changeOrder)="yourFunctionToOrder($event)">
    <tr st-table-row
          ngFor="let userData of data">
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.id}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.name}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.lastName}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.phone}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.company}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.completedProfile}}</label>
        </td>
        <td st-table-row-hover>
            <i class="icon icon-arrow2_right"></i>
        </td>
    </tr>
</st-table>
```

