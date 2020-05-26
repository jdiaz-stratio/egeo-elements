# {TITLE} (Component)

   InputThis component specifies an input field where the user can enter data.

## Inputs

| Property                    | Type                                                     | Req   | Description                                                                            | Default |
| --------------------------- | -------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------- | ------- |
| placeholder                 | String                                                   | False | The text that appears as placeholder of the input. It is empty by default              | null    |
| name                        | String                                                   | False | Input name                                                                             | ''      |
| label                       | String                                                   | False | Label to show over the input. It is empty by default                                   | ''      |
| fieldType                   | &#39;text&#39; \| &#39;number&#39; \| &#39;password&#39; | False | Input type                                                                             | 'text'  |
| errors                      | StInputError                                             | False | Customized error messages                                                              |         |
| qaTag                       | String                                                   | False | Id value for qa test                                                                   | ''      |
| forceValidations            | Boolean                                                  | False | If you specify it to 'true', the input checks the errors before being modified by user | false   |
| contextualHelp              | String                                                   | False | It will be displayed when user clicks on the info button                               | ''      |
| maxLength                   | String                                                   | False | Define a max-length for input field                                                    | ''      |
| min                         | String                                                   | False | Define a minimum number for number inputs                                              | ''      |
| max                         | String                                                   | False | Define a maximum number for number inputs                                              | ''      |
| isFocused                   | Boolean                                                  | False | If true, the input will be focused on view init.                                       | false   |
| readonly                    | Boolean                                                  | False | This parameter disables the input and it can not be modified by the user               | ''      |
| step                        | String                                                   | False | It specifies the interval between legal numbers in the input field                     | ''      |
| default                     | String                                                   | False | Default value of input                                                                 |         |
| autocompleteList            | (StDropDownMenuItem \| StDropDownMenuGroup)[]            | False | List to be used for autocomplete feature. It is empty by default                       | Array() |
| charsToShowAutocompleteList | Number                                                   | False | Number of characters before displaying autocomplete list. By default is 1              | 1       |
| value                       | Any                                                      | False | Value of the input                                                                     | ''      |

## Outputs

| Property | Type | Description                     |
| -------- | ---- | ------------------------------- |
| blur     |      | Notify when user leaves a field |

## Example


```html
<st-input class="st-form-field"
      type="text"
      formControlName="name"
      placeholder="Enter your name"
      label="Field"
      default="default name"
      contextualHelp="This is a normal field">
</st-input>
```

## Models

*Error messages* (StInputError)

```typescript

```

