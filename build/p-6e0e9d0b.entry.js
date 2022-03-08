import{r as e,h as t,H as i,g as a}from"./p-0c71c317.js";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e,t,i){return e(i={path:t,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}var r=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.obtainCSSVariable=t.updateCSSVariable=void 0,t.updateCSSVariable=function(e,t,i){i.style.setProperty(e,null==t?"":t)},t.obtainCSSVariable=function(e,t,i=!0){let a=t.style;return i&&(a=getComputedStyle(t)),a.getPropertyValue(e)}})),n=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.unobserveResize=t.observeResize=void 0;const i=new Map,a=new ResizeObserver((e=>{e.forEach((e=>{var t;null===(t=i.get(e.target))||void 0===t||t.forEach((t=>t(e)))}))}));t.observeResize=function(e,t,o){i.size<=0&&a.disconnect(),i.set(e,t),a.observe(e,o)},t.unobserveResize=function(e){a.unobserve(e),i.delete(e)}})),l=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.unobserveMutation=t.observeMutation=void 0;const i=new Map;function a(e){const t=i.get(e);t&&(t.disconnect(),i.delete(e))}t.observeMutation=function(e,t,o){a(e);const s=new MutationObserver((e=>{e.forEach((e=>{t.forEach((t=>t.call(this,e)))}))}));i.set(e,s),s.observe(e,o)},t.unobserveMutation=function(e){a(e)}})),h=s((function(e,t){var i=o&&o.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),a=o&&o.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||i(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),a(r,t),a(n,t),a(l,t)}));let c=class{constructor(t){e(this,t),this.FLEX_ITEM_TAG_NAME="awesome-flex-item",this.baseFraction=12,this.notifySizeChangeToItemElements=e=>{const t=e.contentRect.width;this.hostElement.querySelectorAll(this.FLEX_ITEM_TAG_NAME).forEach((e=>e.containerSizeChanged(t)))}}baseFractionChanged(e){h.updateCSSVariable("--awesome-flex-base-fraction",e.toString(),this.hostElement)}connectedCallback(){h.observeResize(this.hostElement,[this.notifySizeChangeToItemElements])}disconnectedCallback(){h.unobserveResize(this.hostElement)}componentWillLoad(){this.baseFractionChanged(this.baseFraction)}render(){return t(i,null,t("slot",null))}get hostElement(){return a(this)}static get watchers(){return{baseFraction:["baseFractionChanged"]}}};c.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs:0;--awesome-view-breakpoint-sm:540;--awesome-view-breakpoint-md:720;--awesome-view-breakpoint-lg:960;--awesome-view-breakpoint-xl:1140;--awesome-view-breakpoint-xxl:1320}:host{--awesome-flex-fraction:'';display:flex;flex-wrap:wrap;width:100%;height:auto}";let w=class{constructor(t){e(this,t),this.containerSize=0}set fraction(e){h.updateCSSVariable("--awesome-flex-fraction",null==e?void 0:e.toString(),this.hostElement),this.updateFlexCSSVariable(e)}get actualXs(){return this.xs}get actualSm(){var e;return null!==(e=this.sm)&&void 0!==e?e:this.actualXs}get actualMd(){var e;return null!==(e=this.md)&&void 0!==e?e:this.actualSm}get actualLg(){var e;return null!==(e=this.lg)&&void 0!==e?e:this.actualMd}get actualXl(){var e;return null!==(e=this.xl)&&void 0!==e?e:this.actualLg}get actualXxl(){var e;return null!==(e=this.xxl)&&void 0!==e?e:this.actualXl}async containerSizeChanged(e){this.containerSize=e,this.updateFraction()}connectedCallback(){this.fraction=this.actualXs}componentWillUpdate(){this.updateFraction()}render(){return t(i,null,t("slot",null))}updateFraction(){switch(!0){case this.containerSize>=this.getViewBreakpoint("xxl"):this.fraction=this.actualXxl;break;case this.containerSize>=this.getViewBreakpoint("xl"):this.fraction=this.actualXl;break;case this.containerSize>=this.getViewBreakpoint("lg"):this.fraction=this.actualLg;break;case this.containerSize>=this.getViewBreakpoint("md"):this.fraction=this.actualMd;break;case this.containerSize>=this.getViewBreakpoint("sm"):this.fraction=this.actualSm;break;default:this.fraction=this.actualXs}}getViewBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${e}`)}updateFlexCSSVariable(e){var t,i;switch(h.updateCSSVariable("--awesome-flex-item-max-width","calc(var(--awesome-flex-fraction) / var(--awesome-flex-base-fraction) * 100%)",this.hostElement),!0){case""!==e&&!Number.isNaN(+e):h.updateCSSVariable("--awesome-flex-item-flex","0 0 var(--awesome-flex-item-max-width)",this.hostElement);break;case"auto"===e:h.updateCSSVariable("--awesome-flex-item-flex","0 0 auto",this.hostElement);break;case(null===(t=null==e?void 0:e.toString().match(/[0-9]+fr/))||void 0===t?void 0:t.length)>0:default:const a=+(null===(i=null==e?void 0:e.toString().match(/[0-9]+/))||void 0===i?void 0:i[0])||1;h.updateCSSVariable("--awesome-flex-item-flex",`${a} ${1/a} 0`,this.hostElement)}}get hostElement(){return a(this)}};w.style=":host,*{box-sizing:border-box}:host{display:flex;flex:var(--awesome-flex-item-flex)}";let m=class{constructor(t){e(this,t)}rowsChanged(e){h.updateCSSVariable("--awesome-grid-template-rows",e,this.hostElement)}columnsChanged(e){h.updateCSSVariable("--awesome-grid-template-columns",e,this.hostElement)}rowGapChanged(e){h.updateCSSVariable("--awesome-grid-row-gap",e,this.hostElement)}columnGapChanged(e){h.updateCSSVariable("--awesome-grid-column-gap",e,this.hostElement)}componentDidLoad(){this.rowsChanged(this.rows),this.columnsChanged(this.columns),this.rowGapChanged(this.rowGap),this.columnGapChanged(this.columnGap)}render(){return t(i,null,t("div",{id:"main-container"},t("slot",null)))}get hostElement(){return a(this)}static get watchers(){return{rows:["rowsChanged"],columns:["columnsChanged"],rowGap:["rowGapChanged"],columnGap:["columnGapChanged"]}}};m.style=":host,*{box-sizing:border-box}:host{--awesome-grid-template-rows:'';--awesome-grid-template-columns:'';--awesome-grid-row-gap:'';--awesome-grid-column-gap:'';display:block;height:100%;width:100%}#main-container{display:grid;height:100%;width:100%;grid-template-rows:var(--awesome-grid-template-rows);grid-template-columns:var(--awesome-grid-template-columns);row-gap:var(--awesome-grid-row-gap);column-gap:var(--awesome-grid-column-gap)}";let d=class{constructor(t){e(this,t)}columnChanged(e){h.updateCSSVariable("--awesome-grid-column",null==e?void 0:e.toString(),this.hostElement)}columnSpanChanged(e){h.updateCSSVariable("--awesome-grid-column-span",null==e?void 0:e.toString(),this.hostElement)}rowChanged(e){h.updateCSSVariable("--awesome-grid-row",null==e?void 0:e.toString(),this.hostElement)}rowSpanChanged(e){h.updateCSSVariable("--awesome-grid-row-span",null==e?void 0:e.toString(),this.hostElement)}componentDidLoad(){this.rowChanged(this.row),this.rowSpanChanged(this.rowSpan),this.columnChanged(this.column),this.columnSpanChanged(this.columnSpan)}render(){return t(i,null,t("slot",null))}get hostElement(){return a(this)}static get watchers(){return{column:["columnChanged"],columnSpan:["columnSpanChanged"],row:["rowChanged"],rowSpan:["rowSpanChanged"]}}};d.style=":host,*{box-sizing:border-box}:host{--awesome-grid-row:'';--awesome-grid-row-span:'';--awesome-grid-column:'';--awesome-grid-column-span:'';display:block;height:100%;width:100%;grid-row-start:var(--awesome-grid-row, auto);grid-row-end:span var(--awesome-grid-row-span, 1);grid-column-start:var(--awesome-grid-column, auto);grid-column-end:span var(--awesome-grid-column-span, 1)}";let u=class{constructor(t){e(this,t),this.heightFactor=1,this.widthFactor=1}heightFactorChanged(e){h.updateCSSVariable("--awesome-height-factor",e.toString(),this.hostElement)}widthFactorChanged(e){h.updateCSSVariable("--awesome-width-factor",e.toString(),this.hostElement)}connectedCallback(){this.heightFactorChanged(this.heightFactor),this.widthFactorChanged(this.widthFactor)}render(){return t(i,null,t("div",{id:"outer-container"},t("div",{id:"inner-container"},t("slot",null))))}get hostElement(){return a(this)}static get watchers(){return{heightFactor:["heightFactorChanged"],widthFactor:["widthFactorChanged"]}}};u.style=":host,*{box-sizing:border-box}:host{--awesome-ratio-box-ratio:calc(var(--awesome-height-factor) / var(--awesome-width-factor));display:block;width:100%}#outer-container{position:relative;width:100%;padding-top:calc(var(--awesome-ratio-box-ratio) * 100%)}#inner-container{position:absolute;top:0;left:0;bottom:0;right:0}::slotted(*){box-sizing:border-box}";const p=["xs","sm","md","lg","xl","xxl"];let g=class{constructor(t){e(this,t),this.handleMutation=e=>{(void 0===e||"childList"===e.type||"attributes"===e.type&&e.target.parentElement===this.hostElement&&"slot"===e.attributeName)&&(this.availableBreakpoints=Array.from(this.hostElement.querySelectorAll("*")).map((e=>e.getAttribute("slot"))).filter(Boolean))},this.handleResizing=e=>{const t=e.contentRect.width;switch(!0){case t>=this.getViewBreakpoint("xxl"):this.breakpoint="xxl";break;case t>=this.getViewBreakpoint("xl"):this.breakpoint="xl";break;case t>=this.getViewBreakpoint("lg"):this.breakpoint="lg";break;case t>=this.getViewBreakpoint("md"):this.breakpoint="md";break;case t>=this.getViewBreakpoint("sm"):this.breakpoint="sm";break;default:this.breakpoint="xs"}}}get actualBreakpoint(){var e;return null===(e=this.availableBreakpoints)||void 0===e?void 0:e.filter((e=>p.indexOf(e)<=p.indexOf(this.breakpoint))).sort(((e,t)=>p.indexOf(t)-p.indexOf(e)))[0]}connectedCallback(){h.observeResize(this.hostElement,[this.handleResizing]),h.observeMutation(this.hostElement,[this.handleMutation],{childList:!0,attributes:!0,subtree:!0}),this.handleMutation()}disconnectedCallback(){h.unobserveResize(this.hostElement),h.unobserveMutation(this.hostElement)}render(){return t(i,null,t("div",{id:"main-container",innerHTML:`<slot name="${this.actualBreakpoint}"></slot>`}))}getViewBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-view-breakpoint-${e}`)}get hostElement(){return a(this)}};g.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs:0;--awesome-view-breakpoint-sm:540;--awesome-view-breakpoint-md:720;--awesome-view-breakpoint-lg:960;--awesome-view-breakpoint-xl:1140;--awesome-view-breakpoint-xxl:1320}:host{display:block;width:100%}#main-container{height:100%;width:100%}";let b=class{constructor(t){e(this,t),this.updateContentMaxWidthForViewBreakpoint=e=>{const t=e.contentRect.width;switch(!0){case t>=this.getOuterBreakpoint("xxl"):h.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xxl)",this.hostElement);break;case t>=this.getOuterBreakpoint("xl"):h.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xl)",this.hostElement);break;case t>=this.getOuterBreakpoint("lg"):h.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-lg)",this.hostElement);break;case t>=this.getOuterBreakpoint("md"):h.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-md)",this.hostElement);break;case t>=this.getOuterBreakpoint("sm"):h.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-sm)",this.hostElement);break;default:h.updateCSSVariable("--content-max-width","var(--awesome-wrap-inner-breakpoint-xs)",this.hostElement)}}}connectedCallback(){h.observeResize(this.hostElement,[this.updateContentMaxWidthForViewBreakpoint])}disconnectedCallback(){h.unobserveResize(this.hostElement)}render(){return t(i,null,t("div",{part:"inner"},t("slot",null)))}getOuterBreakpoint(e){return+getComputedStyle(this.hostElement).getPropertyValue(`--awesome-wrap-outer-breakpoint-${e}-in-px`)}get hostElement(){return a(this)}};b.style=":host,*{box-sizing:border-box}:host{--awesome-view-breakpoint-xs:0;--awesome-view-breakpoint-sm:540;--awesome-view-breakpoint-md:720;--awesome-view-breakpoint-lg:960;--awesome-view-breakpoint-xl:1140;--awesome-view-breakpoint-xxl:1320}:host{--awesome-wrap-outer-breakpoint-xs-in-px:0;--awesome-wrap-outer-breakpoint-sm-in-px:576;--awesome-wrap-outer-breakpoint-md-in-px:768;--awesome-wrap-outer-breakpoint-lg-in-px:992;--awesome-wrap-outer-breakpoint-xl-in-px:1200;--awesome-wrap-outer-breakpoint-xxl-in-px:1400;--awesome-wrap-inner-breakpoint-xs:100%;--awesome-wrap-inner-breakpoint-sm:calc(var(--awesome-view-breakpoint-sm) * 1px);--awesome-wrap-inner-breakpoint-md:calc(var(--awesome-view-breakpoint-md) * 1px);--awesome-wrap-inner-breakpoint-lg:calc(var(--awesome-view-breakpoint-lg) * 1px);--awesome-wrap-inner-breakpoint-xl:calc(var(--awesome-view-breakpoint-xl) * 1px);--awesome-wrap-inner-breakpoint-xxl:calc(var(--awesome-view-breakpoint-xxl) * 1px);display:block}[part='inner']{max-width:var(--content-max-width);margin:auto}";export{c as awesome_flex,w as awesome_flex_item,m as awesome_grid,d as awesome_grid_item,u as awesome_ratio_box,g as awesome_view_break,b as awesome_wrap}