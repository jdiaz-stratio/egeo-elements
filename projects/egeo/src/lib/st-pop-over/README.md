# {TITLE} (Component)

   Pop OverThis components pop over a content with a title

## Inputs

| Property       | Type        | Req   | Description                            | Default        |
| -------------- | ----------- | ----- | -------------------------------------- | -------------- |
| qaTag          | String      | False | For set id for tests                   | ''             |
|                | String      | False | title Title of the pop over            |                |
| hidden         | Boolean     | False | Show or hide the pop over              | false          |
| offset         | StPopOffset | False | For position with offset in x o y axis | {x: 0 , y: 17} |
| showSettingBtn | Boolean     | False | when true, settings icon is displayed  | false          |
| showArrow      | Boolean     | False | when true, arrow icon is displayed     | true           |

## Outputs

| Property | Type  | Description        |
| -------- | ----- | ------------------ |
| click    | Event | Notify event click |

## Example


```html
<st-pop-over [qaTag]="qaTag"
      [title]="title"
      [hidden]="hidden">
    <!-- CONTENT TO POP OVER -->
</st-pop-over>
```

