# Changelog

## 21.0.0 (upcoming)

**New features:**

* st-dropdown-menu: Apply new UX definition
* st-table: Allow to customize some styles from outside using css variables
* st-table: Emit event when filter icon is clicked
* st-table: Added sticky mode to st-table header
* st-dynamic-table: Create dynamic table component in order to render tables using a json schema to define their structure
* st-dynamic-table: added fk's and groups
* st-spinner: Allow to customize its color from outside using css variables
* st-sidebar: Allow to customize some styles from outside using css variables
* st-table: Allow to customize sort and filter icons using an input
* st-pagination: Allow to customize icon classes of previous and next page buttons using input "iconClasses"
* st-pop-over: Allow to choose placement and added input 'openToLeft' to be displayed from the button left side 
* st-button: Allow to customize its style from outside using css variables
* st-button: Updated button colors
* st-form: Allow to customize some styles from outside using css variables and error messages

**Breaking changes:**

* st-header: Apply new UX definition
* egeo-theme: Moved fonts to egeo-ui-base
* st-table: Rename output selectedFilters to selectFilters
* st-table: Current order now is not changed inside component. It only emits the output "changeOrder" to be changed outside
* st-table: The height of the table must be defined when fixedHeader is true
* theme: Removed $input-field-error from colors. Use $error color

**Fixed bugs:**

* st-table: Filtered header fields are introduced as input and they are not modified inside table component
* st-tag: Fix default style without size class
* st-table: Fix table filters popup position
* st-pagination: Fix bug when user clicks several times on per page select

**Others:**

* Added css variables to customize colors from outside
* build: Upgrade to Gulp 4


## 20.1.0 (April 27, 2020)

**New features:**

* st-bubble-on-ellipsis: Allow to specify how many lines have to be displayed before ellipsis
* st-dropdown-menu: Allow to display a right aligned extra icon with bubble
* st-dropdown-menu: Emit events when mouse enters and leaves an item
* st-filter-selector: Emit events when mouse enters and leaves an option
* st-vertical-icon-tabs: Create component
* st-tag: Create component

**Fixed bugs:**

* st-input: Export min and max validators to can be validated
* st-form-directives: Public directive module in order to can be used from outside
* st-click-outside: Public directive module in order to can be used from outside
* st-search: Fixed EvenWindowManager elementRef injection

**Others:**

* Configure puppeteer to launch tests
* Update icon font to 1.32


## 20.0.0 (March 24, 2020)

**New features:**

* st-table: Includes new field 'filterable' to apply filters by column.
* st-bubble: Allow to add a min and max width from outside and cut words when there are longer than width
* st-alert: Publish alert box component
* st-alert: Adapted to new style definition
* st-bubble-on-ellipsis: Create component to display a bubble below a text when it is longer than container width

**Breaking changes:**

* st-header: Include new UX defined styles to header
* st-alert: Change link behaviour to emit link when it is clicked

**Others:**

* st-button: Set cursor pointer to button class
* Color palette: Add color space-40
* Update icon font to 1.30


## 19.0.0 (February 20, 2020)

**New features:**

* st-two-list-selection: allows to show and control movement of disabled items in origin list (optional parameter).

**Fixed bugs:**

* st-dropdown-menu: Do not diplay dropdown items in several lines with menu list visualization
* st-modal: Do not break words
* st-dropdown-menu: Fix wrong visualization of select dropdown
* egeo-demo: fix wrong path (fonts).

**Breaking changes:**

* st-table: Apply new UX specifications and remove custom theme 'white'
* st-table: Change hasHoverMenu to false by default
* buttons: Changed button styles and renamed button classes:\
    button-secondary-gray -> button-borderless\
    button-secondary-line -> button-secondary\
    button-link-primary -> button-link\
    button-link-secondary -> removed\
    button-warning -> removed\
    button-success -> removed

**Others:**

* Update to Angular 8 and include angular elements generator
* Update icon palette
* Update font size variables
* st-select: Apply new UX font size and color in forms
* st-modal: apply new ux style, include new statusIcon in delete and warnings modals.
* st-foreground-notificactions: apply new UX style

## 18.0.0 (January 16, 2020)

**New features:**

* st-input: Allow to display an autocomplete list in order to select a predefined text
* st-menu: Create component
* grid: Allow to customize max-width with a css variable
* st-progress-bar: Option for a bigger progress-bar
* st-search: New Output when select another filter

**Fixed bugs:**

* st-select: Fix bug in scroll listener. Sometimes when user does scroll it wasn't called

**Breaking changes:**

* st-select: Renamed input 'search' to 'enabledSearcher' and change all internal search logic by event emitted to outside.

**Others:**

* Update icon font to 1.26
* Remove min-width in bubble component
* st-dropdown-menu: Allow to display dropdown items in several lines when container's width is smaller


## 17.2.0 (October 25, 2019)

**New features:**

* st-fullscreen-layout: Allow to display it on full width
* Update icon font to 1.22


## 17.1.0 (October 18, 2019)

**New features:**

* st-dropdown-menu: Allow to display a text info below label
* st-bubble: Allow to disable or enable animation and small theme and added functionality to open to left or right
* st-select, st-dropdown-menu: Allow to show a spinner and capture event when scroll reaches the end

**Fixed bugs:**

* st-foreground-notifications: Fix refreshing notification statuses


## 17.0.0 (September 10, 2019)

**New features:**

* st-color-picker: Create component
* st-two-list-selection: Allow to show dropdown menu options  if it is a non-editable list.
* st-dropdown-menu: Allow to custom label and icon colors
* st-two-list-selection: allow to show dropdown menu options  if it is a non-editable list.
* Construction tasks refactor
* Egeo Demo AOT compilation
* Included 'xs' breakpoint into grid system

**Fixed bugs:**

* st-table: Fix error with selectableAll and sortable columns
* st-foreground-notifications: Fix selected current notification
* st-header: Fixed current active item
* Construction tasks: Fixed package.json main config
* theme: fix st-widget imports
* fix prismjs dependency
* ngx-virtual-scroller: Put version to 3.0.2 to fix compatibility error with internal library tweenjs

**Breaking changes:**

* st-zero-page: Added ng-content to be able to display one or mote buttons

**Others:**

* st-breadcrumbs: change 'title mode' links color to default
* Update icon font to 1.14
* Update lodash to 4.17.13


## 16.4.0 (June 10, 2019)

**New features:**

* st-horizontal-tabs: Allow to insert content from outside after tabs
* st-filter-selector: Allow to display menu aligned to the right
* st-toggle-buttons: New styles

**Fixed bugs:**

* st-tag-input: Input shows error when user create a tag and click out

**Others:**

* Fix method calls from templates
* Update icon font

## 16.3.0 (May 08, 2019)

**New features:**

* st-zero-page: Create component
* st-modal2: New modal component

**Fixed bugs:**

* st-table: Border disappears when user puts the mouse over the row

**Others:**

* Update icon font
* st-table: Align cell content to the top when texts are so long
* Remove st-info-box from demo.
* Removed st-tree, st-tip, st-tab-box, st-info-card, st-help components


## 16.2.0 (April 12, 2019)

**New features:**

* st-filter-selector: Do not change the arrow icon when menu is open

**Fixed bugs:**

* st-select: Fix error message format
* st-table: Put pointer cursor to clickable cell´s children and not to entire cell
* st-breadcrumbs: Do not display capitalized text

**Others:**

* Upgrade lodash to 4.17.11


## 16.1.0 (April 05, 2019)

**New features:**

* st-dropdown-menu: Allow user to move through options using the keyboard arrows
* st-select: new design for the search of elements
* st-search: Allow to hide or show loupe icon

**Others:**

* Update icon font


## 16.0.0 (March 18, 2019)

**New features:**

* st-search: Allow to differentiate search events by its origin
* st-dropdown-menu: Allow to display texts with HTML tags

**Fixed bugs:**

* st-breadcrumb, st-modal: Fix style bug when a long text displays displaced section
* st-two-list: Searcher disappears when user is typing and introduces a text without results
* st-search: Display autocomplete list when user clicks on input after leaving it
* st-search: Display empty message when autocomplete list does not have any item

**Breaking changes:**

* theme: Nunito sans font refactor.
* st-search: When user selects an option from the autocomplete list, input is updated with the value of the selected option


## 15.0.2 (January 16, 2019)

**Fixed bugs:**

* st-table: Remove transition for all attributes in order to prevent a wrong behaviour


## 15.0.1 (January 14, 2019)

**New features:**

* st-filter-selector: Create component
* st-table: Allow to display tables with white and default themes
* st-horizontal-tabs: Allow to add classes to tabs according to its status

**Breaking changes:**

* st-table: Checkbox 'Select all' is added to the first header field inside of taking a separated cell

**Fixed bugs:**

* st-sidebar: Fix minor style bug

**Others:**

* Web:  Show the examples source code in Egeo Web

* Because of technical problems, the 15.0.0 release could not be correctly released. Therefore, version 15.0.1 is the first available 15.0.x version.


## 14.0.0 (December 19, 2018)

**New features:**

* st-breadcrumbs: Allow to configure visualization mode as "default" or "title"

**Breaking changes:**

* st-foreground-notifications: allow to control multiple notifications
* st-fullscreen-layout: Allow to customize title

**Fixed bugs:**

* st-select: Disable html native autocomplete
* st-foreground-notifications: must admit an empty list. Fix error when inserting a notification after it has been previously closed

## 13.4.0 (November 19, 2018)

**New features:**

* st-tag-input: Allow to be configured to display an option list without typing anything
* st-tag-input: Allow to be configured to allow or avoid to type a free text
* Replace deprecated dependency with ngx-virtual-scroller.
* st-tag-input: Allow to force validations
* st-two-list: Improve st-two-list to show spinner when scroll down in lists.
* st-pagination: Emits new  event when user interacts with some of the elements in the selector of items displayed per page.

**Fixed bugs:**

* st-text-area: fix error style

## 13.3.0 (October 30, 2018)

**New features:**

* st-modal: Allow to add a cross button to close modal

**Fixed bugs:**

* st-two-list: fix bad behavior if user is searching something and click checkbox all (it must be select only filtered list)
* st-select: When select is in a form, user still has to click two times to select an option
* st-select: Close select when user clicks outside
* st-file-button: Add id to input

**Others:**

* st-horizontal-tabs: Apply new design according to UX specifications


## 13.2.2 (October 24, 2018)

**Fixed bugs:**

* st-two-list: fix bad behavior if user is searching something and click checkbox all (it must be select only filtered list)
* st-select: When select is in a form, user still has to click two times to select an option
* st-select: Close select when user clicks outside


## 13.2.1 (October 17, 2018)

**Others:**

* st-tag-input: Remove array value as string from view


## 13.2.0 (October 16, 2018)

**Others:**

* st-form: Add id to form fields

**Fixed bugs:**

* st-select: When select is in a form, user has to click two times to select an option


## 13.1.1  (September 28, 2018)

**Fixed bugs:**
 * st-two-list: fix bad behavior with virtual scroll and checkbox all, when an item is added to selected list


## 13.1.0 (September 25, 2018)

**New features:**

* st-button: Add small toolbar button style
* st-tag-input: Allow user to generate arrays of integers or numbers

**Others:**

* Update to angular 6 (angular, angular-cli, rxjs, typescript)
* st-footer: Apply new design according to UX specifications
* st-two-list: Adds new styles. Change position of check all button on scroll bar.
* st-select: Add the possibility to search and filter options


## 13.0.0 (September 06, 2018)

**New features:**

* st-two-list: Added click listener only to checkbox and 'check all' button is only displayed when it has elements. Apply new style and behaviour according to UX specifications

**Breaking changes:**

* st-spinner: Apply new style and behaviour according to UX specifications

**Fixed bugs:**

* st-bubble: Fix visible style
* st-dropdown-menu: Fix wrong visualization on small screens
* st-input: Do not hide placeholder when user clicks on it

**Others**

* st-dropdown-menu: Put cursor pointer to items and improve design
* st-input: Label is only generated if it is not empty
* st-button: Minor style changes


## 12.0.0 (August 17, 2018)

**New features:**

* st-bubble: Create component
* st-button: Add small button style
* st-input, st-textarea, st-select, st-radio-button, st-checkbox, st-tag-input: Change disabled style
* st-modal: Set default max and min width
* st-sidebar: Allow to add any content from outside to header and footer
* st-dropdown-menu: Allow to add a visual mode in order to display it as option or menu list

**Breaking changes:**

* st-breadcrumb: Changed options from string to object with label and icon to allow icons
* st-two-list: Includes checkbox all button in list-scroll component. Emits new event with number of elements selected.

**Others**

* Update version of the Stratio Icon Font


## 11.5.1 (July 25, 2018)

**Fixed bugs:**

* Fix styles to Stratio Icon Font


## 11.5.0 (July 25, 2018)

**Others**

* Update version of the Stratio Icon Font


## 11.4.0 (July 23, 2018)

**New features:**

* st-form: Allow to render textareas when text fields are longer than the specified maximum width

**Fixed bugs:**

* st-form: Form is marked as pristine only if forceValidation input is false
* st-tag-input: Put needed position relative in order to display autocompleted menu correctly
* st-widget: Removed resize button

**Others:**

* egeo-theme: Improve margins between fields and sections in dynamic form


## 11.3.0 (June 27, 2018)

**New features:**

* st-pop-over: Set as optional the arrow icon and header is only displayed if settings button is displayed or title is not empty

**Fixed bugs:**

* st-fullscreen-layout: Avoid to display scroll of the previous page when fullscreen is being displayed

**Others:**

* egeo-theme: Changes in labels and buttons styles


## 11.2.0 (June 18, 2018)

**New features:**

* st-sidebar: Add functionality to close the expanded items when active item changes
* st-foregrounds-notifications: Add property autoclose for notifications.

**Fixed bugs:**

* st-two-list-selection: Fix search functionality


## 11.1.0 (June 04, 2018)

**New features:**

* st-table: Allow to add classes from egeo theme to table tag
* st-sidebar: Add functionality to display as a complex mode, disabled items and a search mode


## 11.0.0 (May 22, 2018)

**New features:**

* st-sidebar: Allow to display more than one level

**Breaking changes:**

* st-horizontal-tabs: Changed activeOption from string with the text for an option with the interface StHorizontalTab
* st-sidebar: Changed active from string to the interface StSidebarItem

**Fixed bugs:**

* st-horizontal-tabs: Fix activeOption on init the component
* st-form-list: Fix select dropdown is not displayed

**Others:**

* Update stratio parent artifact to 0.10.0


## 10.1.0 (May 03, 2018)

**New features:**

* st-form: Allow to enable or disable tooltips


## 10.0.1 (April 24, 2018)

**Fixed bugs:**

* st-form: Fix performance when there are fields with ui attribute 'visible'


## 10.0.0 (April 20, 2018)

**Fixed bugs:**

* st-form: Fields should not be displayed with error at the beginning

**Breaking changes:**

* st-sidebar: Active item is now changed from outside in order to convert it to stateless


## 9.1.0 (April 19, 2018)

**New features:**

* st-form: Allow to display sections descriptions
* st-foreground-notification: two way binding for visible input

**Fixed bugs:**

* st-form: Fix validations of nested properties

**Others:**

* st-tree: StTreeEvent refactor


## 9.0.0 (April 12, 2018)

**Breaking changes:**

* st-tree: Completely refactored

**New features:**

* st-select: Allow to propagate itemsBeforeScroll from select to dopdown

**Others**

* st-form: Remove e.g. from placeholders


## 8.9.0 (April 06, 2018)

**New features:**

* st-form: Allow to display and hide fields according to the value of another fields
* st-form: Display readonly fields as text

**Others**

* Apply visual changes to several components for contrast improvements

**Fixed bugs:**

* st-draggable-card: Fix delay and performance

## 8.8.0 (April 04, 2018)

**New features:**

* st-form: Allow to display related fields in the same row
* st-input: Allow to reset value to default
* st-select: Allow to reset value to default

**Fixed bugs:**

* st-select: When select is opened after scrolling, its dropdown is not displayed
* st-tooltip: It is not displayed yet when compiling to AOT
* st-checkbox: Fix margins


## 8.7.0 (March 21, 2018)

**New features:**

* st-form: Allow to show and hide entire sections clicking a link button and using the ui attribute 'component'
* st-form: Add the possibility of enabling and disabling sections using the ui attribute 'component' as 'switch'
* st-form: Add the possibility of displaying sections as accordion
* st-form: Allow to force the validation of fields without any user interaction

**Fixed bugs:**

* st-tooltip: It is not displayed when compiling to AOT


## 8.6.0 (March 14, 2018)

**Breaking changes:**

* st-form: Placeholder now is in 'examples' attribute of json schema

**New features:**

* st-form: Allow to render read only fields
* st-form: Allow to add dependant fields

**Fixed bugs:**

* st-sidebar: Fix bug when there are an active item and another with an added class
* st-form: Remove dependant fields when parent field does not have any value


**Others:**

* st-tooltip: Apply new style
* st-pagination: Apply new style


## 8.5.2 (March 13, 2018)

**Fixed bugs:**

* st-sidebar: Fix bug when there are an active item and another with an added class


## 8.5.1 (March 12, 2018)

**Fixed bugs:**

* st-form-list: Fixed the formArray refresh


## 8.5.0 (March 07, 2018)

**New features:**

* st-form: Add functionality to hide and display optional fields
* st-form: Add functionality to render nested properties
* st-sidebar: Allow to add classes to items


## 8.4.0 (March 05, 2018)

**New features:**

* st-form: Adapt it to display checkboxes, integer and number inputs
* st-checkbox: Allow to display a tooltip in its label
* st-form: Add select fields

**Fixed bugs:**

* st-pop: Floating element is relocated when user scrolls page
* st-form: Fixed the form validations

**Breaking changes:**

* st-form-list: Now, it emits the events: add, remove, valueChange and blur


## 8.3.2 (February 23, 2018)

**Fixed bugs:**

* st-form-list: Add a provisional solution to make it stateless


## 8.3.1 (February 19, 2018)

**Fixed bugs:**

* st-form-list: Fixed model loading when it is initialized


## 8.3.0 (February 14, 2018)

**New features:**

* st-draggable-card: Create component
* st-form-list: Emit an event when value is changed

**Fixed bugs:**

* Add missing class to 'icon-move-to-folder' icon
* st-form-list: Remove duplicated ids


## 8.2.0 (February 13, 2018)

**New features:**

* st-form-list: Allow to generate list of items dynamically

**Fixed bugs:**

* st-header: Fix z-index
* st-tag-input: Fix tag input bug when user types more than one line of values
* st-input: Fix error when forceValidations is true and form control is not defined yet

**Others**

* Update version of the Stratio Icon Font


## 8.1.1 (February 02, 2018)

**Fixed bugs:**

* st-pagination: Fix error when a change is listened from outside because. This causes that some inputs are changed after checked


## 8.1.0 (January 31, 2018)

**New features:**

* st-tag-input: Add functionality to not allow user to type values with invalid format

**Fixed bugs:**

* st-input: Add a gray color to text when it is disabled and it has value


## 8.0.2 (February 05, 2018)

**Fixed bugs:**

* st-pagination: Do not perform any action when changes are listened when pagination is being created


## 8.0.1 (February 02, 2018)

**Fixed bugs:**

* st-pagination: Fix error when a change is listened from outside because. This causes that some inputs are changed after checked


## 8.0.0 (January 24, 2018)

**Fixed bugs:**

* st-pagination: Update per page value when it is updated from outside
* st-alert: Fix alerts displayed behind the page title

**New features:**

* st-search: Add filter to search
* st-widget: Add settings button and draggable action as optional
* st-tag-input: Add functionality to not allow user to type forbidden values

**Breaking changes:**

* st-search: The output 'search' now emits and object with properties text and filter

## 7.0.0 (January 12, 2018)

**Fixed bugs:**

* st-select: Fix duplicate event "select" when user selected text inside input
* st-fullscreen-layout: Fix scroll

**New features:**

* st-tag-input: Add autocomplete and disable features
* st-pop-over: Add optional settings button

**Breaking changes:**

* st-pagination: Remove "showPerPage", "hidePerPage" and "theme" inputs. Remove "qaTag" to use "attr.id". Change "perPageOptions" type from number[] to PaginateOptions[]

**Refactor**

* st-pagination: Apply new style and behaviour according to UX specifications

## 6.0.0 (December 28, 2017)

**Fixed bugs:**

* st-modal: Removed space when modal does not have buttons
* st-modal: Reorder buttons in delete confirmation modal
* st-breadcrumbs: Remove left padding from the first item and right padding to the last one
* st-pop: In some cases pop menu is hidden under other elements
* st-select: When the selected option is changed from outside via the input 'selected' but there are not any option marked as selected in model, selected is set to undefined
* general: Preserve z-index value when build

**New features:**

* st-modal: Added new function showBasicModal to show Info, Confirmation and Delete Modals
* st-header: New input "navigateByDefault" for prevent navigation when click
* st-header: Add new parameter "external" to model to define external links
* st-header: Add new parameter "openInNewPage" to model to define if open new tab when navigate to link
* st-progress-bar: create component
* st-widget: Implement loading state
* st-foreground-notifications: create component
* st-fullscreen-layout: Create new component
* st-tag-input: create component
* st-modal: New empty option to declare a modal without content

 **Breaking changes:**

* st-modal: Removed function showDeleteConfirmation
* icons: Update icons

## 5.0.0 (November 15, 2017)

**New features:**

* st-file-button: Create component to upload files
* st-modal: New parameter fullscreen for fullscreen modals
* st-modal: New parameter messageTitle to add a title before messages
* st-modal: New parameter maxWidth to define modal max width
* st-modal: New parameter closeOnClick in StModalButton, for close modal when click this button
* st-modal: New parameter leftIcon and rightIcon in StModalButton to add icons to buttons
* st-modal: New parameter response in StModalButton to pass a callback function to one button
* st-sidebar: Create component to navigate through different sections
* st-launcher: Create component to display and launch different instances
* st-pop: Add offset input to move floating component
* st-pop: Change placement type to define with enum
* st-dropdown-menu: Add offset and change placement type input for adapt to st-pop
* st-dropdown-menu: Add input to select item with input
* st-dropdown-menu: Add input to move selected on top when show
* st-dropdown-menu: Add input to apply selected style
* st-select: Add output for emit when expand menu named expand
* st-select: Add output for emit when select an item named select
* st-pop-over: Create component to pop over a content with a title

**Fixed bugs:**

* st-tooltip: Fix empty title bug
* st-header: Fix user menu width

**Breaking changes:**

* icons: Update new version of icon library
* st-header: Change submenu behaviour, now act as arrow no navigate to first option
* st-dropdown: Removed component
* st-dropdown-menu: Remove qaTag now read from id if exists
* st-dropdown-menu: Refactor styles
* st-select: Refactor component and add new styles
* st-select: Remove input qaTag now read from id if exists
* st-select: Rename input errorRequiredMessage to errorMessage
* st-select: Rename input selectedValue to selected
* st-select: Remove input forceValidations
* st-modal: Refactor styles
* st-modal: Remove main text
* st-modal: Remove modal type
* st-modal: Remove modal width
* st-modal: Remove qaTag
* st-modal: Remove closeOnAccept
* st-modal: In StModalButton change response by responseValue
* st-modal: In StModalButton remove icon
* st-modal: In StModalButton remove iconLeft
* st-modal: In StModalButton remove primary
* st-modal: In StModalButton remove closeOnAccept
* st-modal: Modified params to showDeleteConfirmation

## 4.0.0 (September 21, 2017)

**Fixed bugs:**

* grid: fix container and row flexbox behaviors
* st-breadcrumbs: Fix qaTags
* st-dropdown: Fix qaTags
* st-page-title: Fix bug when page is refreshed, the editable page title is displayed wrong
* st-search: Send an empty search when the user presses the cross button
* st-checkbox: Fix disabled style

**New features:**

* st-label: New component based on label native tag
* st-header: Menu notifies navigation
* st-table: Add functionality to select rows optionally
* st-breadcrumb: Add input for define max elements to show

**Breaking changes:**

* st-header: Remove stHeaderBehavior directive because now it's unnecessary
* st-header: Change contentChangeOffset parameter by changeHeight
* st-header: Removed app name, now use a ng-content to define
* st-header: Removed user menu, now use a ng-content to define
* st-header: Removed company name input
* st-header: Remove disable parameter of menu and submenu model
* st-header: Models change of name
* st-header: Change general behaviour and design
* st-input-adjustable: Rename directive 'StInputAdjustable' to st-input-adjustable
* st-switch: Remove labelPosition input, label always are dispayed at the left
* st-horizontal-tabs: Event emitted when active tabs changes, now sends the option of type StHorizontalTab
* st-horizontal-tabs: Removed functionality to display disabled tabs
* st-button: Removed component now use native tag and classes
* st-select: Output emitted when select is changed is now the value of the option instead of the entire option
* st-form-label: Deleted, replaced by st-label
* st-tooltip: New behaviour based on native tag

**Refactor**

* st-radio: Apply new style according to UX specifications
* st-table: Apply new style according to UX specifications
* st-switch: Apply new style according to UX specifications
* st-breadcrumb: Apply new style according to UX specifications
* st-horizontal-tabs: Apply new style according to UX specifications
* st-select: Apply new style according to UX specifications
* st-textarea: Apply new style according to UX specifications
* st-input: Apply new style according to UX specifications
* st-input: Refactor styles to can be applied to a native input
* All: Removed all references old fonts in all components
* st-table: Remove unneeded cell when there is not a hover menu

**Documentation:**

* Update license
* st-checkbox: Added demo
* st-radio: Added demo
* st-table: Added demo
* st-horizontal-tabs: Added demo
* st-select: Added demo
* st-textarea: Added demo
* st-footer: Added demo
* st-info-card: Added demo
* st-toggle-buttons: Added demo
* st-vertical-tabs: Added demo

**Others**

* egeo-theme is now part of this repository and old repo it's deprecated
* egeo-ui-base is integrated now on theme and old repo it's deprecated


## 3.0.2 (September 14, 2017)

**Fixed bugs:**

* st-button: Update internal text value when change input

## 3.0.1 (September 01, 2017)

**Fixed bugs:**

* st-tree: Fix Failed to insert St-Tree Module provider missing
* st-tree: Fix selected from elements
* st-tree: Fix dbblick to elements for expand

## 3.0.0 (August 18, 2017)

**Fixed bugs:**

* st-two-list-selection: Fix when list is empty, height not showing correctly
* st-item-list: Add item list to egeo module
* st-dropdown: Fix inputs immutable
* st-switch: Change input id to <name>-input

**Breaking changes:**

* st-combobox: Renamed to st-select
* st-search: Remove searchOnlyOnClick and hasClearButton parameters
* st-breadcrumbs: Rename output event changeOption to select
* st-pop: Remove option to position in left or right
* st-pop: Remove input gpuAcceleration
* st-dropdown-menu: Remove option to position in left or right

**New features:**

* st-toggle-buttons: Add an optional id to the interface
* st-breadcrumbs: Add component st-breadcrumbs item, add Ng-Content option
* st-input: Add input value and output change
* st-form: Create a dynamic form with inputs
* st-form: Add switches to dynamic form
* update stratio-theme to 0.14.0

**Refactor:**

* st-pop: Remove popperjs library and implement our solution

## 2.5.0 (July 13, 2017)

**Fixed bugs:**

* Fix styles on st-input
* Fix styles on st-vertical-tabs
* Fix styles on st-horizontal-tabs

**New features:**

* New component st-items-list
* New component st-tree
* New component st-alerts
* Add number inputs and min/max validations

## 2.4.4 (July 13, 2017)

**Fixed bugs:**

* Add missing tslib dependency

## 2.4.3 (July 11, 2017)

**Fixed bugs:**

* Fix when resolve not found any translateable element and pass empty array to translate

## 2.4.2 (July 05, 2017)

**Fixed bugs:**

* Fix Search with autocomplete emit twice

## 2.4.1 (June 30, 2017)

**Fixed bugs:**

* Fix popper imports

## 2.4.0 (June 29, 2017)

**Fixed bugs:**

* Fix of left button position in page title
* Fix a wrong overflow of dropdown-menu items in firefox

**New features:**

* Create st-object-to-array pipe to iterate over an object in a template
* Add to dropdown-menu option to be always floating
* Add to dropdown-menu to resize update when resize the main window.
* New component st-tip
* New component st-help
* Add option to autocomplete in search

**Deprecated:**

* st-search: hasClearButton, that will be removed in a future release
* st-search: searchOnlyOnClick, that will be removed in a future release

## 2.3.2 (June 21, 2017)

* Fix st-comobobox validations

## 2.3.1 (June 19, 2017)

* Fix st-two-list styles
* Fix AoT compilation

## 2.3.0 (June 13, 2017)

* Bugfix st-switch component emits event twice
* New component st-combobox
* Add new feature in st-page-title: Editable Title

## 2.2.2 (June 06, 2017)

* Bugfix st-two-list remove min height
* Bugfix st-two-list no wrap long lines

## 2.2.1 (June 06, 2017)

* Bugfix st-switch add name as input

## 2.2.0 (June 05, 2017)

* Bugfix st-two-list dropdown
* Add style to st-two-list when select row
* Refactor decorators now all start by St
* Improvement in st-switch template
* Add st-pop component
* Allow Able or disable for columns singly

## 2.1.1 (May 29, 2017)

* Bugfix #148 and #248
* Add St-pop Component

## 2.1.0 (May 19, 2017)

* Add st-checkbox component
* Add st-two-list

## 2.0.2 (May 05, 2017)

* fix st-textarea borders

## 2.0.1 (May 04, 2017)

* fix st-textarea styles

## 2.0.0 (May 04, 2017)

* Update angular version to angular 4.1.0
* Refactor of build method
* Create textarea component
* Create form label component
* Create switch component
* Bugfix #212 (St-table): Allow to introduce a model with id and label as header item

## 1.5.0 (April 25, 2017)

* Extract theme of info-card
* Extract theme of input
* Extract theme of tab-box
* Extract theme of toggle-buttons
* Extract theme of tooltip
* Extract theme of vertical-tabs
* Extract theme of search
* Reduce bundle size
* Add Breadcrumbs component
* Create table component

## 1.4.1 (April 17, 2017)

* fix AOT bug with StRadio Component

## 1.4.0 (April 17, 2017)

* Add st-radio and st-radio-group components
* Add test to EgeoResolve
* Bugfix #144 and #77
* Update spinner styles to remove margins
* Increase test coverage in all components
* EgDeprecated decorator

## 1.3.3 (April 05, 2017)

* export all elements of stModalInterface

## 1.3.2 (April 05, 2017)

* fix infinite loop in modal close

## 1.3.1 (April 03, 2017)

* export stModalResponse

## 1.3.0 (April 03, 2017)

* st-modal and StModalService
* Add max-lenght validation on inputs
* Force to install some dependencies
* st-tab-box as stateless component
* Bugfix pagination

## 1.2.0 (March 17, 2017)

* Remove st-table from website
* Add test coverage 67% to st-input
* Add new search options (Live search and only emit on click)
* Separate library and website
* Add test to st-spinner
* Add test to st-tooltip
* Prepare for publish release

## 1.1.2 (March 09, 2017)

* Adapt to Nexus3

## 1.1.1 (March 08, 2017)

* Add max-width to header component

## 1.1.0 (March 06, 2017)

* Add isFocused parameter on input component to set the focus on the input
* Add distribution as AoT
* Add Required and CheckRequired decorators.
* Add search filter pipe
* Add EgeoUtils with some static common functions

## 1.0.0 (February 23, 2017)

* Modularize all components
* Add Button Clear in Search Component
* Add Value Input in Search Component
* Add optional Pre-title to Page Title Component
* Update color definitions
* Add util service for manage translations of complex objects
* Update fonts in sass for use body istead open-sans and heading instead brandon-grotesque
* Fix some problems with fonts
* Info Box now have a variable height and with that adapt to content and container
* Info Box now have two new inputs, height and with to fix height and with in pixels
* Added Pagination component
* Remove external padding in vertical tab component
* **BREAKING CHANGE:** Remove ng2-translate dependency
* **BREAKING CHANGE:** Now egeo is imported like this ```import { EgeoModule } from 'egeo';```
* **BREAKING CHANGE:** Output Search Component change of (onSearch) to (search)
* **BREAKING CHANGE:** Vertical menu now is called Vertical Tabs
* **BREAKING CHANGE:** Vertical menu now not emit active when active is set from outside
* **BREAKING CHANGE:** Vertical menu output change from changedOption to changeOption
* **AND ALL FIX OF VERSION 0.6.1**

## 0.6.1 (February 08, 2017)

* Prevent horizontal-tab wrong shown when zoom the browser
* Add qaTag in info-cards
* Fix broken spinner component

## 0.6.0 (February 06, 2017)

* Update colors with new values, possibility of getting in RGB format and documentation with RGB info.
* Add alpha channel to the egeo-get-color API.
* Apply complete design of sidebar in the documentation website.
* Review and update libraries.
* Fix Button event is launched when disabled.
* Remove PostCSS
* New dropdown menu component
* New dropdown component
* Rename old horizontal tabs to toggle buttons
* New horizontal tab component
* New Input component
* Generic class for manage events
* Solve minor bugs
* Add coverage reports
* Refactor Footer component for support internal url, logos and now with tests
* New Header component
* Add button to page title

## 0.5.0 (December 12, 2016)

* Change repository name for Egeo
* Fix bad URL imports in the new UI-Base Sass files.
* Separate font faces and fonts in a separate CSS and process
* Remove old implementations of egeo.ui.base and rewrite imports to the new /ui-base
* Fix linting errors
* Add PostCSS support
* Update to Angular 2.1.0 and Typescript 2.0.3 with types in npm
* Add radio menu component
* New component Title Page
* Total refactor of repository
* New search component
* New button component

## 0.4.0 (November 02, 2016)

* New horizontal tab component
* New tab box component
* Spinner in modificable list while input is undefined

## 0.3.0 (September 23, 2016)

* Spinner component
* Modificable List component
* Footer component
* Input component bugs and improvements
* Info card component
* Update to Angular2 final release
* Regular expression utils
+ Vertical menu component
* Close tooltip with click, keydown or mouse wheel

## 0.2.0 (September 21, 2016)

* Several components
* Update to Angular2-rc.6

## 0.1.0 (September 1, 2016)

* First iteration of egeo angular 2 components using Angular2-rc.5
