import{a as $,b as B,c as j}from"./chunk-XDWLAOVJ.js";import{m as V}from"./chunk-FND3MUUF.js";import{a as F}from"./chunk-OS6NPZQN.js";import{a as I}from"./chunk-BBROM2H7.js";import{a as f}from"./chunk-AN5DEFWR.js";import"./chunk-4PMXRNRY.js";import{Ea as i,G as y,Oa as w,Qb as D,Ya as u,_ as s,ab as m,bb as P,cb as M,db as o,eb as e,fa as g,fb as O,ga as p,gb as b,ib as _,jb as h,k as v,la as x,ob as k,pb as S,qb as E,sb as d,tb as C,ub as R,yb as T,zb as A}from"./chunk-FOUY5J7Y.js";var z=["tbody"];function H(c,n){if(c&1&&(o(0,"th"),d(1),e()),c&2){let t=n.$implicit;i(),C(t)}}function L(c,n){if(c&1){let t=b();o(0,"tr")(1,"td")(2,"div",6),d(3),e(),o(4,"div",7)(5,"remove-button",8),_("buttonClick",function(){let a=g(t).$implicit,l=h();return p(l.removeItem(a))}),e()()(),o(6,"td")(7,"toggle",9),_("statusChanged",function(a){let l=g(t).$implicit,q=h();return p(q.onStatusChanged(a,l))}),e()(),o(8,"td"),O(9,"input",10),e(),o(10,"td")(11,"span",11),d(12),e()(),o(13,"td",12)(14,"span"),d(15),e()(),o(16,"td",13)(17,"span"),d(18,"-"),e()(),o(19,"td",14)(20,"span"),d(21,"-"),e()()()}if(c&2){let t=n.$implicit,r=n.$index;i(3),R(" ",r+1," "),i(4),u("isActive",t.status),i(2),u("value",t.name)("placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435"),i(3),C(t.coefficient?t.coefficient:"-"),i(3),C(t.product_group)}}var Q=class c{heads=["","\u0410\u043A\u0442\u0438\u0432\u0435\u043D","\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435","\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442","\u0422\u043E\u0432\u0430\u0440\u043D\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430","\u041A\u043B\u0430\u0441\u0442\u0435\u0440","\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F"];products$=new v([]);dialog=s(V);dataService=s(F);destroyRef=s(x);tbody;ngOnInit(){this.dataService.searchProducts().pipe(f(this.destroyRef),y(100)).subscribe(n=>{this.getProducts(n.tid)})}getProducts(n){this.dataService.getTaskById(n).pipe(f(this.destroyRef)).subscribe(t=>{this.products$.next(this.formatProducts(t.data.products))})}formatProducts(n){return n.map(t=>({article:t.article,name:t.bytime[0].name,coefficient:t.bytime[0].mp.ozon.recom.coef,final_stock:t.bytime[0].mp.ozon.recom.final_stock,product_group:t.bytime[0].cats[0],status:t.status}))}onStatusChanged(n,t){}onProductGroupSelected(n,t){}addRow(){this.products$.next([...this.products$.value,{status:"inactive",article:"",product_group:"",coefficient:0,final_stock:0,name:""}]),setTimeout(()=>{let n=this.tbody.nativeElement.querySelectorAll("tr"),t=n[n.length-1];t.style.transition="background-color 500ms",t.style.backgroundColor="#e5ebff",setTimeout(()=>{t.style.backgroundColor="",setTimeout(()=>{t.style.transition="background-color 0.2s"},500)},500)},10)}removeItem(n){this.dialog.open(j,{data:{row:n},panelClass:"remove-modal",autoFocus:!1})}static \u0275fac=function(t){return new(t||c)};static \u0275cmp=w({type:c,selectors:[["app-admin"]],viewQuery:function(t,r){if(t&1&&k(z,5),t&2){let a;S(a=E())&&(r.tbody=a.first)}},decls:16,vars:4,consts:[["tbody",""],[1,"container"],[1,"head"],["disabled","",1,"add-row",3,"click"],[3,"disabled","buttonTitle"],[1,"table"],[1,"index"],[1,"remove-button"],[3,"buttonClick"],[3,"statusChanged","isActive"],["autocomplete","off","type","text","name","name","id","name",3,"value","placeholder"],[1,"coefficient"],[1,"product-group"],[1,"cluster"],[1,"strategy"]],template:function(t,r){if(t&1){let a=b();o(0,"div",1)(1,"div",2)(2,"div")(3,"button",3),_("click",function(){return g(a),p(r.addRow())}),d(4,"+ \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443"),e()(),O(5,"small-button",4),e(),o(6,"div",5)(7,"table")(8,"thead"),P(9,H,2,1,"th",null,m),e(),o(11,"tbody",null,0),P(13,L,22,6,"tr",null,m),T(15,"async"),e()()()()}t&2&&(i(5),u("disabled",!0)("buttonTitle","\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"),i(4),M(r.heads),i(4),M(A(15,2,r.products$)))},dependencies:[I,$,B,D],styles:[".container[_ngcontent-%COMP%]{min-height:calc(100vh - 108px)}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:has(.add-row){height:48px;width:100%;display:flex;align-items:center;margin-right:14px;border-top-left-radius:10px;border-top-right-radius:10px;background-color:#fff}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:has(.add-row)   .add-row[_ngcontent-%COMP%]{margin-left:10px;background:none;color:#0156ff;border:1px solid white;padding:6px 10px;display:flex;align-items:center;border-radius:6px;min-width:150px}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:has(.add-row)   .add-row[_ngcontent-%COMP%]:hover{cursor:pointer;border:1px solid rgba(1,86,255,.56)}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:has(.add-row)   .add-row[_ngcontent-%COMP%]:active{background-color:#eff1f799}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:has(.add-row)   .add-row[_ngcontent-%COMP%]:disabled{color:#a3abc3}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:has(.add-row)   .add-row[_ngcontent-%COMP%]:disabled:hover{cursor:not-allowed;border:1px solid #A3ABC3}.container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   small-button[_ngcontent-%COMP%]{width:200px}.container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{height:calc(100vh - 155px);border-bottom-left-radius:10px;border-bottom-right-radius:10px;background-color:#fff;overflow:auto}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;text-align:left;border-collapse:collapse}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#d9dce5;height:40px}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px;color:#686f83;text-align:center}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:54px;border-bottom:1px solid #E8E8E8;transition:background-color .2s}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .index[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .cluster[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .strategy[_ngcontent-%COMP%]{width:10%}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .product-group[_ngcontent-%COMP%]{width:20%}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#eff1f7;cursor:pointer}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .remove-button[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .index[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;padding:6px 10px;border-radius:6px;text-align:center;width:100%}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#a3abc3}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   input#name[_ngcontent-%COMP%]{text-align:left}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]{color:#a3abc3}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;border-right:1px solid #E8E8E8;text-align:center}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding:10px;text-align:center;min-width:54px}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:has(toggle){width:60px}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:has(.index){width:60px}.container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:has(.coefficient){width:60px}"]})};export{Q as AdminComponent};