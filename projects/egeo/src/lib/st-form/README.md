# Dynamic form (Component)

   The form component allows to generate forms dynamically using a JSON schema.

## Inputs

| Property                | Type    | Req   | Description                                                                                                | Default                          |
| ----------------------- | ------- | ----- | ---------------------------------------------------------------------------------------------------------- | -------------------------------- |
| schema                  | Any     | False | JSON schema needed to generate the form                                                                    |                                  |
| parentName              | String  | False | Name of the parent section. By default, it is undefined                                                    |                                  |
| nestingLevel            | String  | False | This informs about the nesting level of the form. This input is only used for design purposes              | 0                                |
| forceValidations        | Boolean | False | Boolean to force the field validations                                                                     |                                  |
| disabledSectionMessage  | String  | False | Message displayed when a section is disabled. This is always displayed after the section name              | 'for this instance is disabled.' |
| sectionDescriptionLevel | Number  | False | Level of the section to which description is displayed.By default, section descriptions are not displayed. | -1                               |
| textFieldMaxWidth       | Number  | False | Maximum width of a field needed to paint a input or textarea                                               |                                  |
| showTooltips            | Boolean | False | Enable or disable displaying of tooltipsBy default, tooltips are displayed                                 | -1                               |

## Outputs

| Property    | Type | Description                                                            |
| ----------- | ---- | ---------------------------------------------------------------------- |
| valueChange | Any  | Event emitted when value is changed. This emits the current form value |

## Example


```html
<st-form [schema]="jsonSchema"
      [(ngModel)]="model"
      #formModel="ngModel">
</st-form>
```

