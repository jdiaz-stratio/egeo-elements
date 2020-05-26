# Form list (Component)

   The form list component allows to create dynamically list of items.

## Inputs

| Property    | Type   | Req   | Description                                      | Default             |
| ----------- | ------ | ----- | ------------------------------------------------ | ------------------- |
| schema      | Any    | False | JSON schema of items                             | ''                  |
| buttonLabel | String | False | String displayed in the button to add more items | 'Add one more item' |

## Outputs

| Property    | Type   | Description                                                    |
| ----------- | ------ | -------------------------------------------------------------- |
| valueChange | Any[]  | Notify any value change                                        |
| add         | Number | Notify the position of the added item and the modified model   |
| remove      | Number | Notify the position of the removed item and the modified model |
| blur        | Any[]  | Notify when user leaves a field                                |

## Example


```html
<st-form-list [schema]="jsonSchema"
      [ngModel]="model1"
      name="list"
      (blur)="onBlur($event)"
      (add)="onAddItem($event)"
      (remove)="onRemoveItem($event)">
</st-form-list>
```

