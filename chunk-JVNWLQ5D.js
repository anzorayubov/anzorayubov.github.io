import{Mb as p,Na as u,Xa as a,cb as i,db as c,hb as s,ma as e,rb as r,vb as l}from"./chunk-EDZJABTV.js";var C=t=>({editing:t}),d=class t{hidden=!0;onCancel=new e;onSave=new e;cancel(){this.onCancel.emit(),this.hidden=!0}save(){this.onSave.emit()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=u({type:t,selectors:[["action-form-buttons"]],inputs:{hidden:"hidden"},outputs:{onCancel:"onCancel",onSave:"onSave"},decls:5,vars:3,consts:[[1,"buttons",3,"ngClass"],[1,"save",3,"click"],[1,"cancel",3,"click"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"button",1),s("click",function(){return o.save()}),r(2,"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),c(),i(3,"button",2),s("click",function(){return o.cancel()}),r(4,"\u041E\u0442\u043C\u0435\u043D\u0430"),c()()),n&2&&a("ngClass",l(1,C,!o.hidden))},dependencies:[p],styles:[".buttons[_ngcontent-%COMP%]{display:flex;gap:14px;position:absolute;top:36px;right:14px;background-color:#fff;opacity:0;pointer-events:none}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid transparent;background-color:transparent;padding:6px;border-radius:6px;cursor:pointer}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{transition:border .2s;background-color:#f5f5f5}.buttons[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{color:#0156ff}.buttons[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]:hover{transition:border .2s;border:1px solid #0156FF}.buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]:hover{transition:border .2s;border:1px solid lightgray}.buttons.editing[_ngcontent-%COMP%]{transition:opacity .3s;opacity:1;pointer-events:all}"]})};export{d as a};
