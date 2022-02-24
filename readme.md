![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Awesome-Elmenets Layout

An awesome way to simplify web layout.

[Demo](https://awesome-elements.github.io/layout/)

[![Edit layout](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/layout-7uhuv?fontsize=14&hidenavigation=1&theme=dark)

## Installation

### From NPM
```sh
npm i @awesome-elements/layout
```

### From UNPKG
```html
<script type="module" src="https://unpkg.com/@awesome-elements/layout"></script>
```

## Usage
- [Flex](./src/components/awesome-flex/readme.md)
- [Grid](./src/components/awesome-grid/readme.md)
- [Ratio Box](./src/components/awesome-ratio-box/readme.md)
- [View Break](./src/components/awesome-view-break/readme.md)
- [Wrap](./src/components/awesome-wrap/readme.md)

## Importing

### Using `<script>` tag
You can either grab the code [using UNPKG](#from-unpkg) or [using NPM](#from-npm).  
If you grab it from the UNPKG, then you just need to directly put the below code into your HTML file.
```html
<script type="module" src="https://unpkg.com/@awesome-elements/layout"></script>
```
If you grab it from NPM, then you might need adjust the `src` attribute. The code should be located at _node_modules/@awesome-elements/layout/dist/awesome-elements/awesome-elmenets.esm.js_.  
Note that `type="module"` is an ES6 syntax and only works in modern browsers. It is required to use `type="module"` and we do not provide the ES5 version.

### Using loader
If you need to import inside JavaScript code, using the loader is the suggested way. Basically, you want to call `defineCustomElements()` from the loader. Optionally, you can call `applyPolyfills() ` first. For different project types, please check below sections for more details.

### Vanilla JS
First, [install using NPM](#from-npm).  
Then put below code in your JS file.
```js
import { defineCustomElements } from "node_modules/@awesome-elements/layout/loader";
defineCustomElements();
```
And make sure you import this JS file using `type="module"` like below.
```html
<script type="module" src="path/to/the/js/file"></script>
```
Note that `type="module"` is an ES6 syntax and only works in modern browsers.  
You can check [here](https://stenciljs.com/docs/javascript) for more details for Vanilla JS importing.

### Angular
First, [install using NPM](#from-npm).  
Then include ```CUSTOM_ELEMENTS_SCHEMA``` in any module that uses the components. For example, in ```AppModule```
```ts
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  // add this
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```
After that, in ```main.ts```
```ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// add this
import { applyPolyfills, defineCustomElements } from '@awesome-elements/layout/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// add this, the applyPolyfills() is optional
applyPolyfills().then(() => {
  defineCustomElements()
});
```

### React
__We suggest to use our React wrapper package [@awesome-elements/layout-react](https://www.npmjs.com/package/@awesome-elements/layout-react).__  
However, if you still want to use the web component directly, you can follow the below instruction:  
First [install using NPM](#use-npm).  
Then in ```index.js```
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// add this
import { applyPolyfills, defineCustomElements } from '@awesome-elements/layout/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// add this, the applyPolyfills() is optional
applyPolyfills().then(() => {
  defineCustomElements();
});
```

### Vue
First [install using NPM](#use-npm).
Then in ```main.js```
```js
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '@awesome-elements/layout/loader';

Vue.config.productionTip = false;

// add this
Vue.config.ignoredElements = [/awesome-\w*/];

// add this, the applyPolyfills() is optional
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App)
}).$mount('#app');
```
Note: This is an example for Vue 2.