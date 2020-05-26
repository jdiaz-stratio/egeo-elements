# Foreground notifications (Component)

   Foreground notifications are made to let the user know info about a process she is performing in real time.

## Inputs

| Property      | Type                     | Req   | Description                                                                                                                                     | Default |
| ------------- | ------------------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| visible       | Bollean                  | False | When true the notification is shown                                                                                                             | flase   |
| autoCloseTime | AutoCloseTime            | False | Defines the time in milliseconds for autoclose the notification. The autoclose only applies if only have one notification and status is success | '1000'  |
| notifications | StNotificationElement [] | False | '] Array of notifications                                                                                                                       | '[      |

## Outputs

| Property | Type              | Description                                  |
| -------- | ----------------- | -------------------------------------------- |
| click    | ClickLinkTemplate | Event emitted when user click in a href link |
| click    | VisibleChange     | Event emitted when set param visible         |

## Example


```html
<st-foreground-notifications [notifications]="notifications"
      [(visible)]="true"
      [autoCloseTime]="1000"></st-foreground-notifications>
```

