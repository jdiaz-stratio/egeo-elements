# Launcher (Component)

   This components show a launcher for the instances of an item group

## Inputs

| Property            | Type              | Required | Description                                                  |
| ------------------- | ----------------- | -------- | ------------------------------------------------------------ |
| `qaTag`             | String            | False    | For set id for tests, default: ''                            |
| `items`             | StLauncherGroup[] | True     | List of groups of items to show                              |
| `groupLimit`        | Number            | False    | Limit of items to be displayed per group, default: undefined |
| `groupLimitMessage` | String            | False    | Label when the group items limit is exceeded, default: ''    |

## Outputs

| Property   | Type            | Required | Description                                                 |
| ---------- | --------------- | -------- | ----------------------------------------------------------- |
| `change`   | StLauncherItem  | False    | Notify any item selection, default: ''                      |
| `toggle`   | StLauncherGroup | False    | Notify any group expansion or collapsed, default: ''        |
| `viewMore` | StLauncherGroup | False    | Notify that wants to see more items in a group, default: '' |

## Example
```
   {html} ```
<st-launcher qaTag="launcher-example" [items]="items" [groupLimit]="4" [groupLimitLabel]="'View more'" (toggle)="onToggle(event)" (select)="onSelect(event)" (viewMore)="onViewMore(event)">
</st-launcher>
```
```
