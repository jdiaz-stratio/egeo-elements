# Zero Page (Component)

   Zero page is displayed when there are no results to show in a table

## Inputs

| Property    | Type   | Req   | Description       | Default |
| ----------- | ------ | ----- | ----------------- | ------- |
| title       | String | False | Title message     | ''      |
| info        | String | False | Info message      | ''      |
| imageSource | String | False | Image source path | ''      |

## Example


```html
<st-zero-page class="zero-page-example"
      title="There are no Variables created yet "
      info="Variables help you to have consistent values through your Quality Rules, Attributes…"
      imageSource="assets/images/variable-icon.svg">
</st-zero-page>
```

