# Table (Component)

   The pagination component has been designed to allow content to be displayed per pages. This informs user about the number of the current page, the items displayed per page and the total of  items. Moreover, when there are a lot ofitems, it allows user to customize the number of items displayed per page.It is made by two sub-components:- A range selector, that allows the user provides a dropdown to set how many items he wants to be displayed per page.- A page navigation control, in order to let the user where he is and where he can go to.

## Inputs

| Property       | Type              | Req   | Description                                                                                          | Default                                                                                                         |
| -------------- | ----------------- | ----- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| perPage        | Number            | False | The maximum number of items displayed per page                                                       | 20                                                                                                              |
| total          | Number            | False | Total of items                                                                                       | ''                                                                                                              |
| label          | PaginateTexts     | False | Translated texts displayed at the pagination                                                         | {element: 'Rows', perPage: 'per page', of: 'of'}                                                                |
| perPageOptions | PaginateOptions[] | False | List of options displayed at a selector where user can change the number of items displayed per page | Array( Object( value: 20, showFrom: 0 ),Object( value: 50, showFrom: 50 ), Object( value: 200, showFrom: 200 )) |
| currentPage    | Number            | False | Number of the current page                                                                           | 1                                                                                                               |

## Outputs

| Property | Type     | Description                                                                                                                                          |
| -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| change   | Paginate | Event emitted when user interacts with some of the elements in the pagination.This sends the new pagination status (current page and items per page) |

| changePerPage   | number | Event emitted when user interacts with some of the elements in the selector of items displayed per page.This sends the current items per page.

## Example


```html
<div class="pagination">
    <st-pagination [total]="items.length"
          [perPage]="perPage"
          [currentPage]="page"
          [id]="'pagination-demo'"
          (change)="onChangePage($event)">
    </st-pagination>
</div>
```

