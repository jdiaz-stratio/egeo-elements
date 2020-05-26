# File button (Component)

   The file button allows to upload a file with a specified extension.

## Inputs

| Property    | Type   | Req   | Description            | Default |
| ----------- | ------ | ----- | ---------------------- | ------- |
| text        | String | False | Displayed text         | ''      |
| buttonClass | String | False | Class for button       | ''      |
| accepted    | String | False | The allowed extensions | ''      |
| id          | String | False | Identifier for input   | ''      |

## Outputs

| Property | Type  | Description                                    |
| -------- | ----- | ---------------------------------------------- |
| selected | File  | Event emitted when a file is selected          |
| error    | Error | Event emitted when an invalid file is selected |

## Example


```html
<st-file-button text="IMPORT"
      accepted='json'
      (selected)="onUploadValidFile($event)"
      (error)="onUploadInvalidFile()">
</st-file-button>
```

