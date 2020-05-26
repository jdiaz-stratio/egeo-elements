# Sidebar (Component)

   The sidebar component has been designed to navigate through different sections of a web page.

## Inputs

| Property   | Type                | Req   | Description                                                              | Default                      |
| ---------- | ------------------- | ----- | ------------------------------------------------------------------------ | ---------------------------- |
| title      | String              | False | Title displayed on the top of menu                                       | ''                           |
| active     | StSidebarItem       | False | The current active item                                                  | ''                           |
| items      | StSidebarItem[]     | False | List of items displayed on the menu                                      | ''                           |
| searchMode | Boolean             | False | Boolean to enable or disable the search mode. By default, it is disabled | ''                           |
| visualMode | StSidebarVisualMode | False | Visual mode used to display the item list                                | 'StSidebarVisualMode.normal' |

## Outputs

| Property | Type          | Description                                                                        |
| -------- | ------------- | ---------------------------------------------------------------------------------- |
| change   | StSidebarItem | Event emitted when the active item is changed. This emits the active item          |
| search   | String        | Event emitted when search mode is enabled and user interacts with the search input |

## Example


```html
<st-sidebar class="sidebar"
      title="Mesos Manager"
      [items]="items"
      qaTag="sidebar-demo">
</st-sidebar>
```

## Models

*Sidebar items* (StSidebarItem)

```typescript
export interface StSidebarItem {
    id: string;
    label: string;
    class ? : string;
    items ? : StSidebarItem[];
    result ? : string;
}
```

