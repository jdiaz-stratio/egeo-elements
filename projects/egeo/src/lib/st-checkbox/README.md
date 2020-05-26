# Checkbox (Component)

   The checkbox component represents a custom input of the checkbox type.

## Inputs

| Property | Type    | Req   | Description                                                                 | Default |
| -------- | ------- | ----- | --------------------------------------------------------------------------- | ------- |
| checked  | Boolean | False |                                                                             | ''      |
| name     | Boolean | False | This parameter shows the final name of the input                            | ''      |
| qaTag    | Boolean | False | Id value for qa test                                                        | ''      |
| disabled | Boolean | False | It allows to disable the input component of the checkbox                    | ''      |
| required | Boolean | False | It converts the component into a mandatory field in a form                  | ''      |
| readonly | Boolean | False | This parameter disables the checkbox and it can not be modified by the user | ''      |
| value    | Any     | False | The value of the checkbox                                                   | ''      |

## Outputs

| Property | Type                           | Description                                         |
| -------- | ------------------------------ | --------------------------------------------------- |
| change   | { checked: boolean, value: any | }  This is emitted when user clicks on the checkbox |

## Example


```html
<st-checkbox name="option"
      value="1">
    Option 1
</st-checkbox>
```

