# Bubble (Component)

   This component displays a text inside a floating box

## Inputs

| Property   | Type        | Req   | Description                                                | Default        |
| ---------- | ----------- | ----- | ---------------------------------------------------------- | -------------- |
| text       | String      | False | Text of the bubble                                         |                |
| hidden     | Boolean     | False | Show or hide the bubble                                    | false          |
| offset     | StPopOffset | False | For position with offset in x o y axis                     | {x: 0 , y: 17} |
| showArrow  | Boolean     | False | when true, arrow icon is displayed                         | true           |
| animation  | Boolean     | False | when true, bubble is displayed with an animation           | true           |
| openToLeft | Boolean     | False | when true, bubble is displayed with the arrow to the right | true           |
| small      | Boolean     | False | when true, bubble is displayed with theme small            | false          |
| minWidth   | String      | False | min width for bubble                                       |                |
| maxWidth   | String      | False | max width for bubble                                       |                |

## Example


```html
<st-bubble [qaTag]="qaTag"
      [text]="text"
      [hidden]="hidden">
</st-bubble>
```

