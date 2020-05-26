# Alert Box (Component)

   Alert box is made to let the user know errors or information about he is trying to do.

## Inputs

| Property      | Type    | Req   | Description             | Default |
| ------------- | ------- | ----- | ----------------------- | ------- |
| alert         | StAlert | False | Data of the alert       |         |
| showInConsole | Boolean | False | Display logs in console | false   |

## Outputs

| Property  | Type        | Description                        |
| --------- | ----------- | ---------------------------------- |
| clickLink | StAlertLink | Event emitted when link is clicked |

## Example


```html
<st-alert-box [alert]="alert"
      [showInConsole]="showInConsole"></st-alert-box>
```

