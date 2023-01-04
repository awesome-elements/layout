import{r as e,h as a,H as t,g as o}from"./p-c84b8af3.js";var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e,a,t){return e(t={path:a,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}var r=s((function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.obtainCSSVariable=a.updateCSSVariable=void 0,a.updateCSSVariable=function(e,a,t){t.style.setProperty(e,null==a?"":a)},a.obtainCSSVariable=function(e,a,t=!0){let o=a.style;return t&&(o=getComputedStyle(a)),o.getPropertyValue(e)}})),n=s((function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.unobserveResize=a.observeResize=void 0;const t=new Map,o=new ResizeObserver((e=>{e.forEach((e=>{var a;null===(a=t.get(e.target))||void 0===a||a.forEach((a=>a(e)))}))}));a.observeResize=function(e,a,i){t.size<=0&&o.disconnect(),t.set(e,a),o.observe(e,i)},a.unobserveResize=function(e){o.unobserve(e),t.delete(e)}})),l=s((function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.unobserveMutation=a.observeMutation=void 0;const t=new Map;function o(e){const a=t.get(e);a&&(a.disconnect(),t.delete(e))}a.observeMutation=function(e,a,i){o(e);const s=new MutationObserver((e=>{e.forEach((e=>{a.forEach((a=>a.call(this,e)))}))}));t.set(e,s),s.observe(e,i)},a.unobserveMutation=function(e){o(e)}})),w=s((function(e,a){var t=i&&i.__createBinding||(Object.create?function(e,a,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,o){void 0===o&&(o=t),e[o]=a[t]}),o=i&&i.__exportStar||function(e,a){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(a,o)||t(a,e,o)};Object.defineProperty(a,"__esModule",{value:!0}),o(r,a),o(n,a),o(l,a)}));const h=class{constructor(a){e(this,a),this.FLEX_ITEM_TAG_NAME="awesome-flex-item",this.notifySizeChangeToItemElements=e=>{const a=e.contentRect.width;this.hostElement.querySelectorAll(this.FLEX_ITEM_TAG_NAME).forEach((e=>e.containerSizeChanged(a)))},this.baseFraction=12}baseFractionChanged(e){w.updateCSSVariable("--awesome-flex-base-fraction",e.toString(),this.hostElement)}connectedCallback(){w.observeResize(this.hostElement,[this.notifySizeChangeToItemElements])}disconnectedCallback(){w.unobserveResize(this.hostElement)}componentWillLoad(){this.baseFractionChanged(this.baseFraction)}render(){return a(t,null,a("slot",null))}get hostElement(){return o(this)}static get watchers(){return{baseFraction:["baseFractionChanged"]}}};h.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs-local:var(--awesome-view-breakpoint-xs, 0);--awesome-view-breakpoint-sm-local:var(--awesome-view-breakpoint-sm, 540);--awesome-view-breakpoint-md-local:var(--awesome-view-breakpoint-md, 720);--awesome-view-breakpoint-lg-local:var(--awesome-view-breakpoint-lg, 960);--awesome-view-breakpoint-xl-local:var(--awesome-view-breakpoint-xl, 1140);--awesome-view-breakpoint-xxl-local:var(--awesome-view-breakpoint-xxl, 1320)}:host{--awesome-flex-fraction:'';display:flex;flex-wrap:wrap;width:100%;height:auto}";const c=class{constructor(a){e(this,a),this.containerSize=0,this.xs=void 0,this.sm=void 0,this.md=void 0,this.lg=void 0,this.xl=void 0,this.xxl=void 0}set fraction(e){w.updateCSSVariable("--awesome-flex-fraction",null==e?void 0:e.toString(),this.hostElement),this.updateFlexCSSVariable(e)}get actualXs(){return this.xs}get actualSm(){var e;return null!==(e=this.sm)&&void 0!==e?e:this.actualXs}get actualMd(){var e;return null!==(e=this.md)&&void 0!==e?e:this.actualSm}get actualLg(){var e;return null!==(e=this.lg)&&void 0!==e?e:this.actualMd}get actualXl(){var e;return null!==(e=this.xl)&&void 0!==e?e:this.actualLg}get actualXxl(){var e;return null!==(e=this.xxl)&&void 0!==e?e:this.actualXl}async containerSizeChanged(e){this.containerSize=e,this.updateFraction()}connectedCallback(){this.fraction=this.actualXs}componentWillUpdate(){this.updateFraction()}render(){return a(t,null,a("slot",null))}updateFraction(){switch(!0){case this.containerSize>=this.getViewBreakpoint("xxl"):this.fraction=this.actualXxl;break;case this.containerSize>=this.getViewBreakpoint("xl"):this.fraction=this.actualXl;break;case this.containerSize>=this.getViewBreakpoint("lg"):this.fraction=this.actualLg;break;case this.containerSize>=this.getViewBreakpoint("md"):this.fraction=this.actualMd;break;case this.containerSize>=this.getViewBreakpoint("sm"):this.fraction=this.actualSm;break;default:this.fraction=this.actualXs}}getViewBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${e}-local`)}updateFlexCSSVariable(e){var a,t;switch(w.updateCSSVariable("--awesome-flex-item-max-width","calc(var(--awesome-flex-fraction) / var(--awesome-flex-base-fraction) * 100%)",this.hostElement),!0){case""!==e&&!Number.isNaN(+e):w.updateCSSVariable("--awesome-flex-item-flex","0 0 var(--awesome-flex-item-max-width)",this.hostElement);break;case"auto"===e:w.updateCSSVariable("--awesome-flex-item-flex","0 0 auto",this.hostElement);break;case(null===(a=null==e?void 0:e.toString().match(/[0-9]+fr/))||void 0===a?void 0:a.length)>0:default:const o=+(null===(t=null==e?void 0:e.toString().match(/[0-9]+/))||void 0===t?void 0:t[0])||1;w.updateCSSVariable("--awesome-flex-item-flex",`${o} ${1/o} 0`,this.hostElement)}}get hostElement(){return o(this)}};c.style=":host,*{box-sizing:border-box}:host{display:flex;flex:var(--awesome-flex-item-flex)}";const m=class{constructor(a){e(this,a),this.rows=void 0,this.columns=void 0,this.rowGap=void 0,this.columnGap=void 0}rowsChanged(e){w.updateCSSVariable("--awesome-grid-template-rows",e,this.hostElement)}columnsChanged(e){w.updateCSSVariable("--awesome-grid-template-columns",e,this.hostElement)}rowGapChanged(e){w.updateCSSVariable("--awesome-grid-row-gap",e,this.hostElement)}columnGapChanged(e){w.updateCSSVariable("--awesome-grid-column-gap",e,this.hostElement)}componentDidLoad(){this.rowsChanged(this.rows),this.columnsChanged(this.columns),this.rowGapChanged(this.rowGap),this.columnGapChanged(this.columnGap)}render(){return a(t,null,a("div",{id:"main-container"},a("slot",null)))}get hostElement(){return o(this)}static get watchers(){return{rows:["rowsChanged"],columns:["columnsChanged"],rowGap:["rowGapChanged"],columnGap:["columnGapChanged"]}}};m.style=":host,*{box-sizing:border-box}:host{--awesome-grid-template-rows:'';--awesome-grid-template-columns:'';--awesome-grid-row-gap:'';--awesome-grid-column-gap:'';display:block;height:100%;width:100%}#main-container{display:grid;height:100%;width:100%;grid-template-rows:var(--awesome-grid-template-rows);grid-template-columns:var(--awesome-grid-template-columns);row-gap:var(--awesome-grid-row-gap);column-gap:var(--awesome-grid-column-gap)}";const d=class{constructor(a){e(this,a),this.column=void 0,this.columnSpan=void 0,this.row=void 0,this.rowSpan=void 0}columnChanged(e){w.updateCSSVariable("--awesome-grid-column",null==e?void 0:e.toString(),this.hostElement)}columnSpanChanged(e){w.updateCSSVariable("--awesome-grid-column-span",null==e?void 0:e.toString(),this.hostElement)}rowChanged(e){w.updateCSSVariable("--awesome-grid-row",null==e?void 0:e.toString(),this.hostElement)}rowSpanChanged(e){w.updateCSSVariable("--awesome-grid-row-span",null==e?void 0:e.toString(),this.hostElement)}componentDidLoad(){this.rowChanged(this.row),this.rowSpanChanged(this.rowSpan),this.columnChanged(this.column),this.columnSpanChanged(this.columnSpan)}render(){return a(t,null,a("slot",null))}get hostElement(){return o(this)}static get watchers(){return{column:["columnChanged"],columnSpan:["columnSpanChanged"],row:["rowChanged"],rowSpan:["rowSpanChanged"]}}};d.style=":host,*{box-sizing:border-box}:host{--awesome-grid-row:'';--awesome-grid-row-span:'';--awesome-grid-column:'';--awesome-grid-column-span:'';display:block;height:100%;width:100%;grid-row-start:var(--awesome-grid-row, auto);grid-row-end:span var(--awesome-grid-row-span, 1);grid-column-start:var(--awesome-grid-column, auto);grid-column-end:span var(--awesome-grid-column-span, 1)}";const p=class{constructor(a){e(this,a),this.heightFactor=1,this.widthFactor=1}heightFactorChanged(e){w.updateCSSVariable("--awesome-height-factor",e.toString(),this.hostElement)}widthFactorChanged(e){w.updateCSSVariable("--awesome-width-factor",e.toString(),this.hostElement)}connectedCallback(){this.heightFactorChanged(this.heightFactor),this.widthFactorChanged(this.widthFactor)}render(){return a(t,null,a("div",{id:"outer-container"},a("div",{id:"inner-container"},a("slot",null))))}get hostElement(){return o(this)}static get watchers(){return{heightFactor:["heightFactorChanged"],widthFactor:["widthFactorChanged"]}}};p.style=":host,*{box-sizing:border-box}:host{--awesome-ratio-box-ratio:calc(var(--awesome-height-factor) / var(--awesome-width-factor));display:block;width:100%}#outer-container{position:relative;width:100%;padding-top:calc(var(--awesome-ratio-box-ratio) * 100%)}#inner-container{position:absolute;top:0;left:0;bottom:0;right:0}::slotted(*){box-sizing:border-box}";const u=["xs","sm","md","lg","xl","xxl"],v=class{constructor(a){e(this,a),this.handleMutation=e=>{(void 0===e||"childList"===e.type||"attributes"===e.type&&e.target.parentElement===this.hostElement&&"slot"===e.attributeName)&&(this.availableBreakpoints=Array.from(this.hostElement.querySelectorAll("*")).map((e=>e.getAttribute("slot"))).filter(Boolean))},this.handleResizing=e=>{const a=e.contentRect.width;switch(!0){case a>=this.getViewBreakpoint("xxl"):this.breakpoint="xxl";break;case a>=this.getViewBreakpoint("xl"):this.breakpoint="xl";break;case a>=this.getViewBreakpoint("lg"):this.breakpoint="lg";break;case a>=this.getViewBreakpoint("md"):this.breakpoint="md";break;case a>=this.getViewBreakpoint("sm"):this.breakpoint="sm";break;default:this.breakpoint="xs"}},this.breakpoint=void 0,this.availableBreakpoints=void 0}get actualBreakpoint(){var e;return null===(e=this.availableBreakpoints)||void 0===e?void 0:e.filter((e=>u.indexOf(e)<=u.indexOf(this.breakpoint))).sort(((e,a)=>u.indexOf(a)-u.indexOf(e)))[0]}connectedCallback(){w.observeResize(this.hostElement,[this.handleResizing]),w.observeMutation(this.hostElement,[this.handleMutation],{childList:!0,attributes:!0,subtree:!0}),this.handleMutation()}disconnectedCallback(){w.unobserveResize(this.hostElement),w.unobserveMutation(this.hostElement)}render(){return a(t,null,a("div",{id:"main-container",innerHTML:`<slot name="${this.actualBreakpoint}"></slot>`}))}getViewBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${e}-local`)}get hostElement(){return o(this)}};v.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs-local:var(--awesome-view-breakpoint-xs, 0);--awesome-view-breakpoint-sm-local:var(--awesome-view-breakpoint-sm, 540);--awesome-view-breakpoint-md-local:var(--awesome-view-breakpoint-md, 720);--awesome-view-breakpoint-lg-local:var(--awesome-view-breakpoint-lg, 960);--awesome-view-breakpoint-xl-local:var(--awesome-view-breakpoint-xl, 1140);--awesome-view-breakpoint-xxl-local:var(--awesome-view-breakpoint-xxl, 1320)}:host{display:block;width:100%}#main-container{height:100%;width:100%}";const b=class{constructor(a){e(this,a),this.updateContentMaxWidthForViewBreakpoint=e=>{const a=e.contentRect.width;switch(!0){case a>=this.getOuterBreakpoint("xxl"):w.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xxl-local)",this.hostElement);break;case a>=this.getOuterBreakpoint("xl"):w.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xl-local)",this.hostElement);break;case a>=this.getOuterBreakpoint("lg"):w.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-lg-local)",this.hostElement);break;case a>=this.getOuterBreakpoint("md"):w.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-md-local)",this.hostElement);break;case a>=this.getOuterBreakpoint("sm"):w.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-sm-local)",this.hostElement);break;default:w.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xs-local)",this.hostElement)}}}connectedCallback(){w.observeResize(this.hostElement,[this.updateContentMaxWidthForViewBreakpoint])}disconnectedCallback(){w.unobserveResize(this.hostElement)}render(){return a(t,null,a("div",{part:"inner"},a("slot",null)))}getOuterBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-wrap-outer-breakpoint-${e}-in-px-local`)}get hostElement(){return o(this)}};b.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs-local:var(--awesome-view-breakpoint-xs, 0);--awesome-view-breakpoint-sm-local:var(--awesome-view-breakpoint-sm, 540);--awesome-view-breakpoint-md-local:var(--awesome-view-breakpoint-md, 720);--awesome-view-breakpoint-lg-local:var(--awesome-view-breakpoint-lg, 960);--awesome-view-breakpoint-xl-local:var(--awesome-view-breakpoint-xl, 1140);--awesome-view-breakpoint-xxl-local:var(--awesome-view-breakpoint-xxl, 1320)}:host{--awesome-wrap-outer-breakpoint-xs-in-px-local:var(--awesome-wrap-outer-breakpoint-xs-in-px, 0);--awesome-wrap-outer-breakpoint-sm-in-px-local:var(--awesome-wrap-outer-breakpoint-sm-in-px, 576);--awesome-wrap-outer-breakpoint-md-in-px-local:var(--awesome-wrap-outer-breakpoint-md-in-px, 768);--awesome-wrap-outer-breakpoint-lg-in-px-local:var(--awesome-wrap-outer-breakpoint-lg-in-px, 992);--awesome-wrap-outer-breakpoint-xl-in-px-local:var(--awesome-wrap-outer-breakpoint-xl-in-px, 1200);--awesome-wrap-outer-breakpoint-xxl-in-px-local:var(--awesome-wrap-outer-breakpoint-xxl-in-px, 1400);--awesome-wrap-inner-breakpoint-xs-local:var(--awesome-wrap-inner-breakpoint-xs, 100%);--awesome-wrap-inner-breakpoint-sm-local:var(--awesome-wrap-inner-breakpoint-sm, calc(var(--awesome-view-breakpoint-sm-local) * 1px));--awesome-wrap-inner-breakpoint-md-local:var(--awesome-wrap-inner-breakpoint-md, calc(var(--awesome-view-breakpoint-md-local) * 1px));--awesome-wrap-inner-breakpoint-lg-local:var(--awesome-wrap-inner-breakpoint-lg, calc(var(--awesome-view-breakpoint-lg-local) * 1px));--awesome-wrap-inner-breakpoint-xl-local:var(--awesome-wrap-inner-breakpoint-xl, calc(var(--awesome-view-breakpoint-xl-local) * 1px));--awesome-wrap-inner-breakpoint-xxl-local:var(--awesome-wrap-inner-breakpoint-xxl, calc(var(--awesome-view-breakpoint-xxl-local) * 1px));display:block}[part='inner']{max-width:var(--content-max-width);margin:auto}";export{h as awesome_flex,c as awesome_flex_item,m as awesome_grid,d as awesome_grid_item,p as awesome_ratio_box,v as awesome_view_break,b as awesome_wrap}