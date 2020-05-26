# Draggable card (Component)

   The draggable card component is a custom draggable item.

## Inputs

| Property  | Type    | Req   | Description                           | Default |
| --------- | ------- | ----- | ------------------------------------- | ------- |
| id        | String  | False | Card id                               |         |
| draggable | Boolean | False | Boolean to enable or disable dragging | true    |

## Outputs

| Property  | Type | Description                                 |
| --------- | ---- | ------------------------------------------- |
| dragStart | Any  | Event emitted when user start dragging card |
| dragEnd   | Any  | Event emitted when user drops dragging card |

## Example


```html
<st-draggable-card class="card"
      id="1"
      (onDragStart)="drag($event)">
    <p>Draggable card 1</p>
</st-draggable-card>
```

