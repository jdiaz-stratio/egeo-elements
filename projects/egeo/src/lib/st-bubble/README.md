# Bubble (Component)

   This component displays a text inside a floating box

## Inputs

| Property  | Type        | Req   | Description                            | Default        |
| --------- | ----------- | ----- | -------------------------------------- | -------------- |
|           | String      | False | Text of the bubble                     |                |
| hidden    | Boolean     | False | Show or hide the bubble                | false          |
| offset    | StPopOffset | False | For position with offset in x o y axis | {x: 0 , y: 17} |
| showArrow | Boolean     | False | when true, arrow icon is displayed     | true           |

## Example


```html
<st-bubble [qaTag]="qaTag"
      [text]="text"
      [hidden]="hidden">
</st-bubble>
```

