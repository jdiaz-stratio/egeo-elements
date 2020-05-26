# Pop (Component)

   The pop is a component for manage floating elements like popups or dropdown-menu. This element need two element inside,a button element that launch popper and a content element that whose position will be relativo to button element.

## Inputs

| Property   | Type           | Req   | Description                                         | Default                    |
| ---------- | -------------- | ----- | --------------------------------------------------- | -------------------------- |
| placement  | StPopPlacement | False | Define position of content relative to button       | StPopPlacement.BOTOM_START |
| offset     | StPopOffset    | False | For position with offset in x o y axis              | {x: 0 , y: 0}              |
| openToLeft | Boolean        | False | For calculating all positions from the right corner | false                      |
| hidden     | Boleean        | False | TRUE: show pop content, FALSE: hide pop content     | true                       |

## Example


```html
<st-pop [hidden]="false"
      placement="bottom">
    <div pop-button>Button</div>
    <div pop-content>Content</div>
</st-pop>
```

