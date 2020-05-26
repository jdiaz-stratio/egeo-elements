# Header (Component)

   The header component is a main component of an application.This component must be on top and scroll with page, when scroll is in a calculated position,the header shrinks and fix to top.

## Inputs

| Property | Type                 | Req   | Description                    | Default |
| -------- | -------------------- | ----- | ------------------------------ | ------- |
| menu     | StHeaderMenuOption[] | False | Array with menu option to show |         |

## Outputs

| Property   | Type   | Description                      |
| ---------- | ------ | -------------------------------- |
| selectMenu | String | Notify any menu option selection |

## Example


```html
<st-header [menu]="headerMenuSchema"
      id="header">
    <div class="sth-header-logo">
        <!-- Logo as svg, image, etc. -->
    </div>
    <div class="sth-header-user-menu">
        <!-- Right header menu, with user menu, notifications, etc -->
    </div>

</st-header>
```

## Models

*Header menu options* (StHeaderMenuOption)

```typescript
export class StHeaderMenuOption {
    icon: string; // Icon to show on left of menu label
    label: string; // Menu label to show
    link: string; // Link to navigate when click
    subMenus: StHeaderSubMenuOption[]; // List of submenu options
}
```

*Submenu options* (StHeaderSubMenuOption)

```typescript
export class StHeaderSubMenuOption {
    label: string; // Label to show
    link: string; // Link to navigate when click
}
```

