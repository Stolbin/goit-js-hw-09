const t={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,e=setInterval((()=>t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(e)}));let e=null;t.btnStop.disabled=!0;
//# sourceMappingURL=01-color-switcher.3e1787b3.js.map
