# Alerts (Component)

   Alerts are made to let the user know errors or information about he is trying to do.

## Inputs

| Property      | Type    | Req   | Description             | Default |
| ------------- | ------- | ----- | ----------------------- | ------- |
| showInConsole | Boolean | False | Display logs in console | false   |
| qaTag         | String  | False | Component qa tag        |         |

## Example


```html
<st-alerts [showInConsole]="true"></st-alerts>
```

## Models

*Alert* (StAlert)

```typescript
export class StAlert {
    private _changeVisibilityInterval: number;
    private _lifeTimeout: number;
    private _readed: boolean = false;
    private _opacity: number = 0;
    private _opacityState: Subject < number > = new Subject < number > ();
    private _removeEvent: Subject < StAlert > = new Subject < StAlert > ();

    constructor(
        public id: number,
        public title: string,
        public message: string,
        public severity: STALERT_SEVERITY,
        public timeout: number,
        public extendedTimeout: number,
        public link: StAlertLink
    ) {}
```

