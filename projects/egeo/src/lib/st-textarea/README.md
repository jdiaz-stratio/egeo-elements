# Textare (Component)

   The textarea component is for use normally inside a form, you can use too outside a form like a template driven form.

## Inputs

| Property         | Type            | Req   | Description                                                                                                                           | Default |
| ---------------- | --------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| placeholder      | String          | False | The text that appears as placeholder of the textarea. It is empty by default                                                          | ''      |
| name             | String          | False | Name of the textarea                                                                                                                  | ''      |
| label            | String          | False | Label to show over the textarea. It is empty by default                                                                               | ''      |
| errors           | StTextareaError | False | Error to show for each error case, if you don\'t provide this parameter,the default behaviour is only to change color without message | ''      |
| qaTag            | String          | False | Id for QA test                                                                                                                        | ''      |
| forceValidations | Boolean         | False | If you specify it to 'true', the textarea checks the errors before being modified by user                                             | false   |
| contextualHelp   | String          | False | It will be displayed when user clicks on the info button                                                                              | ''      |
| maxLength        | String          | False | Define a max-length for textarea field                                                                                                | ''      |
| isFocused        | Boolean         | False | If true, the textarea will be focused on view init.                                                                                   | false   |
| cols             | Number          | False | Define textarea number of cols                                                                                                        | ''      |
| rows             | Number          | False | Define textarea number of rows                                                                                                        | ''      |
| wrap             | String          | False | Define type of wrap as html standard                                                                                                  | 'soft'  |
| default          | String          | False | Default value of textarea                                                                                                             |         |

## Outputs

| Property | Type | Description                     |
| -------- | ---- | ------------------------------- |
| blur     |      | Notify when user leaves a field |

## Example


```html
<st-textarea label="Components"
      placeholder="Number of components"
      [forceValidations]="forceValidations"
      [errors]="errorsTextarea"
      name="components-template"
      qaTag="components-textarea-template"
      required
      [(ngModel)]="model.components"
      contextualHelp="This is the contextual help of the components"
      [cols]="50"
      [rows]="10">
</st-textarea>
```

