var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const u={form:document.querySelector(".form"),delayInput:document.querySelector('[name="delay"]'),stepInput:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]')};function i({position:e,delay:t}){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}u.form.addEventListener("submit",(function(e){e.preventDefault();let t=Number(u.delayInput.value),n=Number(u.stepInput.value),o=Number(u.amountInput.value);for(let e=1;e<=o;e+=1)i({position:e,delay:t}).then((e=>r.Notify.success(e))).catch((e=>r.Notify.failure(e))),t+=n;setTimeout((()=>{u.form.reset()}),t)}));
//# sourceMappingURL=03-promises.eb20dcae.js.map
