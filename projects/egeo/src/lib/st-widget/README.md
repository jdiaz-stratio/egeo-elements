# Widget (Component)

   Widget component is a container box for any type of widgets

## Inputs

| Property              | Type    | Req   | Description                                                 | Default |
| --------------------- | ------- | ----- | ----------------------------------------------------------- | ------- |
| title                 | String  | False | title will be displayed in the widget header                |         |
| loading               | Bolean  | False | when true, loading stauts is displayed                      |         |
| title                 | String  | False | text "loading data" will be overwritten with this parameter |         |
| displaySettingsButton | Boolean | False | Boolean to display or hide the settings button              |         |
| draggable             | Boolean | False | Boolean to enable or disable dragging of widget             | true    |

## Example


```html
<st-widget title="widget demo"
      [loading]="isLoading"
      overwriteLoadingData="Loading..."></st-widget>
```

