/**
 * UI Initiative Tinder Slider
 *
 * Tinder-like cards slider
 *
 * https://uiinitiative.com
 *
 * Copyright 2023 UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).EffectTinder=t()}(this,(function(){"use strict";return function({swiper:e,on:t}){let r,s,n,i;e.tinder={no(){e.touches.currentX=0,e.touches.startX=e.size/2;const t=e.slides[e.activeIndex];t.translateY=0,t.style.transformOrigin="center bottom",t.transformOrigin="bottom",e.slideNext(),e.animating=!1},yes(){e.touches.currentX=e.size,e.touches.startX=e.size/2;const t=e.slides[e.activeIndex];t.translateY=0,t.style.transformOrigin="center bottom",t.transformOrigin="bottom",e.slideNext(),e.animating=!1}};const o=(e,t)=>{e&&t(e)},a=(t,r)=>{e.slides.forEach(((s,n)=>{n<e.activeIndex||(s.style.transformOrigin=t,s.transformOrigin=r)}))},c=(t,r,s,i,a)=>{if(n||a)if(i)o(document.querySelector(".swiper-tinder-button-yes"),(e=>e.classList.add("swiper-tinder-button-hidden"))),o(document.querySelector(".swiper-tinder-button-no"),(e=>e.classList.add("swiper-tinder-button-hidden")));else{const n=Math.max(Math.min(10*r-.5,1),0);o(t.querySelector(".swiper-tinder-label-yes"),(e=>e.style.opacity=s>0?n:0)),o(t.querySelector(".swiper-tinder-label-no"),(e=>e.style.opacity=s<0?n:0)),o(document.querySelector(".swiper-tinder-button-yes"),(e=>e.classList.remove("swiper-tinder-button-hidden"))),o(document.querySelector(".swiper-tinder-button-no"),(e=>e.classList.remove("swiper-tinder-button-hidden"))),r>=e.params.longSwipesRatio&&!i?s>0?(o(document.querySelector(".swiper-tinder-button-yes"),(e=>e.classList.add("swiper-tinder-button-active"))),o(document.querySelector(".swiper-tinder-button-no"),(e=>e.classList.remove("swiper-tinder-button-active")))):(o(document.querySelector(".swiper-tinder-button-yes"),(e=>e.classList.remove("swiper-tinder-button-active"))),o(document.querySelector(".swiper-tinder-button-no"),(e=>e.classList.add("swiper-tinder-button-active")))):(o(document.querySelector(".swiper-tinder-button-yes"),(e=>e.classList.remove("swiper-tinder-button-active"))),o(document.querySelector(".swiper-tinder-button-no"),(e=>e.classList.remove("swiper-tinder-button-active"))))}};t("beforeInit",(()=>{if("tinder"!==e.params.effect)return;e.classNames.push(`${e.params.containerModifierClass}tinder`),e.classNames.push(`${e.params.containerModifierClass}3d`);const t={watchSlidesProgress:!0,virtualTranslate:!0,longSwipesRatio:.1,oneWayMovement:!0};Object.assign(e.params,t),Object.assign(e.originalParams,t)})),t("init",(()=>{e.el&&e.el.addEventListener&&e.el.addEventListener("click",(t=>{t.target.closest(".swiper-tinder-button-yes")&&e.tinder.yes(),t.target.closest(".swiper-tinder-button-no")&&e.tinder.no()}))})),t("touchStart",((t,i)=>{if("tinder"!==e.params.effect)return;n=!0;const{clientY:o}=i,{top:c,height:d}=e.el.getBoundingClientRect();s=!1;const l=i.target.closest(".swiper-slide, swiper-slide");l&&l.classList.contains("swiper-slide-active")&&(r=l,o-c>d/2?a("center top","top"):a("center bottom","bottom"))})),t("touchMove",(t=>{if("tinder"!==e.params.effect)return;const n=t.touches.currentY-t.touches.startY,i=t.touches.currentX-t.touches.startX;s=(Math.abs(i),e.size,!1),r&&(r.translateY=n)})),t("touchEnd",(()=>{"tinder"===e.params.effect&&(s=!1,requestAnimationFrame((()=>{n=!1})))})),t("setTransition",((t,r)=>{"tinder"===e.params.effect&&(t.slides.forEach((e=>{e.style.transitionDuration=`${r}ms`,e.querySelectorAll(".swiper-tinder-label").forEach((t=>{t.style.transitionDuration=`${r}ms`,e.progress<=0&&(t.style.opacity=0)}))})),requestAnimationFrame((()=>{o(document.querySelector(".swiper-tinder-button-yes"),(e=>e.classList.remove("swiper-tinder-button-active"))),o(document.querySelector(".swiper-tinder-button-no"),(e=>e.classList.remove("swiper-tinder-button-active")))})))})),t("slideChange",(()=>{if(e.activeIndex===e.slides.length-1&&!e.params.loop){const t=e.slides[e.slides.length-1],r=t.progress,s=Math.min(Math.max(r,-2),2),n=e.touches.currentX-e.touches.startX;c(t,s,n,!0,!0)}e.emit("tinderSwipe",e,i<0?"left":"right")})),t("setTranslate",(()=>{if("tinder"!==e.params.effect)return;if(s)return;const t=e.touches.currentX-e.touches.startX;i=t;const{slides:r}=e,o=e.activeIndex===r.length-1&&!e.params.loop;r.forEach(((s,i)=>{const a=s.progress,d=Math.min(Math.max(a,-2),2);let l=-s.swiperSlideOffset,u=0,m=100*d,p=0,f=1;d>0&&(m=0,p=45*d*(t<0?-1:1),l=e.size*(t<0?-1:1)*d+l,void 0!==s.translateY&&(u=s.translateY),c(s,d,t,o)),"top"===s.transformOrigin&&(p=-p),d>1&&(f=5*(1.2-d));const h=`\n        translate3d(${l}px, ${u}px, ${m}px)\n        rotateZ(${p}deg)\n      `;d>=1&&!s.tinderTransform&&(s.tinderTransform=h,s.tinderTransformSlideIndex=i),(s.tinderTransform&&s.tinderTransformSlideIndex!==i||!n)&&(s.tinderTransform=""),s.style.zIndex=-Math.abs(Math.round(a))+r.length,s.style.transform=s.tinderTransform||h,s.style.opacity=f}))}))}}));
//# sourceMappingURL=effect-tinder.min.js.map