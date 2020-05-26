# Radio Menu (Component)

   The Radio Menu is composed of options with radios. Usually, it is used in forms and when user interacts with the radio menu, certain part of that form changes according to the selected option.Moreover, you can add to the radio menu a specific theme in order to adapt its colors as you need it.

## Inputs

| Property      | Type                | Req   | Description                                                                                                                                                                   | Default |
| ------------- | ------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| activeOption  | StRadioMenuOption   | False | Current active option                                                                                                                                                         | ''      |
| options       | StRadioMenuOption[] | False | Array of string with options, option names must be translated                                                                                                                 | ''      |
| qaTag         | String              | False | Identifier to generate a qa tag for each option                                                                                                                               | ''      |
| theme         | String              | False | String representing the theme (css class) to be applied to the radio menu component. If you are using the Stratio theme, the possible values are theme-gray-1 and theme-gray-2 | ''      |
| changedOption | StRadioMenuOption   | False |                                                                                                                                                                               | ''      |

## Example


```html
<st-radio-menu [activeOption]="selectedOptionTheme1"
      class="radio-menu"
      [options]="options"
      qaTag="radio-menu-theme-gray-1">
</st-radio-menu>
```

