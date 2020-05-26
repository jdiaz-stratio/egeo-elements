# StBubbleLabel (Component)

   This component displays a bubble below a content if its width is longer than container

## Inputs

| Property   | Type    | Req   | Description                                                | Default |
| ---------- | ------- | ----- | ---------------------------------------------------------- | ------- |
| text       | String  | False | Text of the bubble                                         |         |
| minWidth   | String  | False | min width for bubble                                       |         |
| maxWidth   | String  | False | max width for bubble                                       |         |
| lines      | String  | False | number of lines where ellipsis is placed                   | 1       |
| openToLeft | Boolean | False | when true, bubble is displayed with the arrow to the right | true    |

## Example


```html
<st-bubble-on-ellipsis [text]="'Text for bubble'"
      [openToLeft]="true"
      [maxWidth]="'40%'">
    Any text
</st-bubble-on-ellipsis>
```

