<div align="center">
<img src="https://github.com/Stratio/egeo-web/blob/master/src/assets/images/egeo_logo_c.png">
</div>

# Egeo UI-Base

Egeo UI Base is a framework of Sass utilities to be used in an Egeo-based project. It is part of the [Egeo project](https://github.com/Stratio/egeo). However, it has no problems to be used in any other project. The framework includes a series of APIs to obtain the colors, typography parameters, a grid based in the [flexboxgrid](http://flexboxgrid.com/) fully rewritten in Sass and much more every application should have.

This library is designed thought in Stratio's needs but any developer could fork it or use it for its own needs or, better, suggest new features to be implemented in the future.

In this repository, you'll find services and utilities to build an UI in a consistent way, using methods and properties instead of direct values, improving drastically the cost of refactorings, evolutions and changes in the future. But this is only one part of the project. You can discover more in:

* [egeo](https://github.com/Stratio/egeo): the library of components used to build Stratio's applications.
* [egeo-theme](https://github.com/Stratio/egeo-theme): The egeo components are thematizable. This is the official theme used in the Stratio's applications.
* [egeo-starter](https://github.com/Stratio/egeo-starter): A Boilerplate project prepared for work with Egeo 1.x, Angular 2.x, TypeScript, Webpack, Karma, Jasmine and Sass.
* [egeo-web](https://github.com/Stratio/egeo-web): The official website of Egeo where documentation will be available soon.

## Table of contents

* [About this repo](#about-this-repo)
* [Architecture Overview](#architecture-overview)
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
   * [Dependencies](#dependencies)
   * [Installing](#installing)
   * [Work with the code](#work-with-the-code)
   * [How to test](#how-to-test)
   * [How to lint](#how-to-lint)
* [Contributing](#contributing)
* [License](#license)

## About this Repo

This repo includes the services and utilities built in Sass. These utilities could be imported like one library in your own Sass project or divided in groups or even one-by-one.

* Documentation website (soon)

## Architecture overview

Egeo is designed using the ITCSS model from Harry Roberts. It implies the use of some restrictions and conventions to ensure isolation, scalability and the use of software development patterns.

<div>
<img src="http://csswizardry.com/wp-content/uploads/2014/10/specificity-graph-01.png" width="400">
</div>

The Inverted Triangle model works under the idea of progressive specificity rise. Take a look at the most common specificity graph we can found in a web project:

<div>
<img src="http://csswizardry.com/wp-content/uploads/2014/10/specificity-graph-02.png" width="400">
</div>

Instead, using the ITCSS architecture and respecting its principles, we can reach the ideal graph you can see below:

<div>
<img src="https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10154630/itcss-key-metrics.svg" width="400">
</div>

This is the way how ITCSS organize its libraries, classes, and files (sure you already know why it is called Inverted Triangle CSS).

Now, we will define the folders (and types of items) should be placed in each section of triangle up-to-down:
- Settings – used with preprocessors and contain font, colors definitions, etc.
- Utils – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- Generic – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS. It can include vendors.
- Elements – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
- Objects – class-based selectors which define undecorated design patterns, for example, media object known from OOCSS.
- Components – specific UI components. This is where majority of our work takes place and our UI components are often composed of Objects and Components
- Trumps – utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class

Nowadays, in Egeo, we are only using the first five levels. This is due to the components are defined using Angular2 Components so they are absolutely outside UI Base.

## File Structure

```
egeo-ui-base/
 ├──settings/                      * configuration settings of the library
 |   ├──_animation.scss            * settings for animations
 |   ├──_colors.scss               * settings to work with colors
 |   ├──_grid.scss                 * settings of the grid
 |   ├──_index.scss                * group of the whole settings to import purposes
 │   ├──_layers.scss               * settings to work with layers in a consistent way
 │   ├──_log.scss                  * settings of the log utility
 |   └──_typography.scss           * settings to work with typographies
 │
 ├──utils/                         * utilities
 |   ├──_colors.scss               * utils to work with colors
 |   ├──_extends.scss              * placeholders to extend classes
 |   ├──_grid.scss                 * the flexbox-based grid
 │   ├──_index.scss                * group of the whole utils to import purposes
 |   ├──_layers.scss               * utils to work with layers
 |   ├──_log.scss                  * a log utility to use in Sass projects
 |   ├──_typography.scss           * utils to work with typography
 |   └──_maps.scss                 * utils to work with Sass maps
 │
 ├──vendors/                       * 3rd parties provided
 |   └──_sanitize.scss             * the [Sanitize](github.com/jonathantneal/sanitize.css) library by Jonathan Neal
 │
 ├──.sass-lint.yml                 * our sass linting configuration
 ├──jenkinsfile                    * configuration of our jenkins process
 ├──pom.xml                        * configuration to work with our CI system
 ├──package.json                   * what npm uses to manage it's dependencies
 └──yarn.lock                      * need in order to get consistent installs across machines using yarn

```

## Getting Started

### Dependencies

What you need to run this app:
* [`node`](https://nodejs.org/es/) and `npm`
* Ensure you're running the latest versions Node `v6.x.x` and NPM `4.x.x`+

### Installing

You can install egeo-ui-base from npm:

```
npm i @stratio/egeo-ui-base
```

### Work with the code

You can use Npm or Yarn to work with egeo-ui-base. If you want to use Yarn, it has to be installed first as a global dependency in your local machine.

```
sudo npm i -g yarn
```

Once Yarn is installed or Npm is ready, you can install Egeo using:

```
yarn
```

or

```
npm install
```

Egeo-ui-base is a Sass library to be used imported in other projects so there is no build or run methods to see it in action.

### How to Test

There is a command to compile the library and test if some compilation error is launched.

```
yarn test
```

or

```
npm run test
```

### How to Lint

There is a command to launch the linting process.

```
yarn sass-lint
```

or

```
npm run sass-lint
```

## Contributing

There are many ways to contribute to the egeo-ui-base project. [Check our contribution section in the Wiki to learn more](https://github.com/Stratio/egeo-ui-base/wiki/How-to-contribute).

## License

Egeo-ui-base is distributed under the Apache 2 license. You may obtain a copy of the license here at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
