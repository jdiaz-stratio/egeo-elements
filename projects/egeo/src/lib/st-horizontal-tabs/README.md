# Horizontal tabs (Component)

   The tabs are a navigation component that divides content into separate views hiding the ones that the user is not focused in.

## Inputs

| Property     | Type              | Req   | Description                                                                                                      | Default |
| ------------ | ----------------- | ----- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| activeOption | StHorizontalTab   | False | Current active option                                                                                            | ''      |
| options      | StHorizontalTab[] | True  | An array of StHorizontalTab objects (see below) that defines the links that will appear and that will be disabled | ''      |
| qaTag        | String            | False | Prefix used to generate the id values for qa tests                                                               | ''      |

## Outputs

| Property      | Type            | Description                                                                                 |
| ------------- | --------------- | ------------------------------------------------------------------------------------------- |
| changedOption | StHorizontalTab | This event is emitted when active option has changed. It has the active option name as param |

## Example


```html
<st-horizontal-tabs [options]="options"
      [qaTag]="qaTag">
</st-horizontal-tabs>
```

## Models

*Id, text and optional status of a tab* (StStHorizontalTab)

```typescript

```

