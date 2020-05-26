# Filter selector (Component)

   The filter selector allows display a filter with a list of options

## Inputs

| Property           | Type                 | Req   | Description                                                                 | Default |
| ------------------ | -------------------- | ----- | --------------------------------------------------------------------------- | ------- |
| openFilter         | Boolean              | False | This boolean is needed to specify the status of the filter (open or closed) | false   |
| filterList         | StDropDownMenuItem[] | False | List of options                                                             |         |
| selected           | StDropDownMenuItem   | False | Selected option                                                             |         |
| menuAlignedToRight | Boolean              | False | Boolean to indicate if menu has to be displayed aligned to the right        | false   |

## Outputs

| Property               | Type               | Description                                      |
| ---------------------- | ------------------ | ------------------------------------------------ |
| clickFilter            | StDropDownMenuItem | Event emitted when an option is selected         |
| changeFilterVisibility | Boolean            | Event emitted when visibility of options changes |
| closeFilter            | Boolean            | Event emitted when option menu is closed         |

## Example


```html
<st-filter-selector [filterList]="filter"
      [openFilter]="openFilter"
      [selected]="selectedFilter"
      (clickFilter)="onFilter($event)"
      (changeFilterVisibility)="onChangeFilterVisibility()"
      (closeFilter)="onCloseFilter()">
</st-filter-selector>
```

