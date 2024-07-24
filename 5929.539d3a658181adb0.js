"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[5929],{75929:(z,v,l)=>{l.r(v),l.d(v,{MaterialHandlingCodesComponent:()=>G});var Z=l(98739),d=l(7155),y=l(35226),p=l.n(y),f=l(70879),t=l(94650),g=l(19132),s=l(24006),S=l(80529),T=l(75625),A=l(70262),D=l(62843),w=l(92340);let C=(()=>{class n{constructor(e){this.httpClient=e,this.url=w.N.API_BASE_URL1,this.httpHeader={headers:new S.WM({"Content-Type":"application/json"})}}getMaterialHandling(){return this.httpClient.get(this.url+"/MaterialHandling/read")}getAll(e){return this.httpClient.get(this.url+`/MaterialHandling/readAll?user=${e}`)}createMaterialHandling(e,a,i){return this.httpClient.post(this.url+"/MaterialHandling/create",{MHLCDE:e,MHDESC:a,user:i}).pipe((0,T.X)(1),(0,A.K)(this.httpError))}updateMaterialHandling(e,a,i){return this.httpClient.put(this.url+"/MaterialHandling/update",{MHLCDE:e,MHDESC:a,user:i}).pipe((0,T.X)(1),(0,A.K)(this.httpError))}httpError(e){let a="";return a=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(a),(0,D._)(()=>new Error(a))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(S.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=l(65412),H=l(97392),M=l(4859),u=l(59549),b=l(44144),r=l(73546);let _=(()=>{class n{constructor(e,a,i,c){this.router=e,this.fb=a,this.MaterialHandlingSvc=i,this.dialogRef=c,this.user=localStorage.getItem("userName")}ngOnInit(){this.form=this.fb.group({MHLCDE:"",MHDESC:""})}ngOnDestroy(){this.MaterialHandlingSubscription&&this.MaterialHandlingSubscription.unsubscribe()}createMaterialHandling(){var e=this.form.value;console.log(e),this.MaterialHandlingSubscription&&this.MaterialHandlingSubscription.unsubscribe(),this.MaterialHandlingSubscription=this.MaterialHandlingSvc.createMaterialHandling(e.MHLCDE,e.MHDESC,this.user).subscribe(a=>{if(console.log(a),JSON.parse(a.success))this.successMessage("created successfully"),this.closeDialog(),this.router.navigate(["/main-nav/materialHandling/read"]);else{const i=JSON.parse(a[0].data[1].value).returnedData.message;console.log(i),this.failureMessage(i)}})}successMessage(e){p().fire(e,"","success")}failureMessage(e){p().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.F0),t.Y36(s.qu),t.Y36(C),t.Y36(h.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-material-handling-code"]],standalone:!0,features:[t.jDz],decls:22,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","MHLCDE"],["matInput","","formControlName","MHDESC"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Material Handling Codes "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Code"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Description "),t.qZA(),t._UZ(19,"input",10),t.qZA()()(),t.TgZ(20,"button",11),t.NdJ("click",function(){return a.createMaterialHandling()}),t._uU(21," Add "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[f.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,H.Hw,M.lW,u.KE,u.hX,b.Nt,r.a8,r.dk,r.dn,r.n5]}),n})(),E=(()=>{class n{constructor(e,a,i,c,m){this.anyvariable=e,this.router=a,this.fb=i,this.MaterialHandlingSvc=c,this.dialogRef=m,this.user=localStorage.getItem("userName")}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({MHLCDE:this.anyvariable.MHLCDE,MHDESC:this.anyvariable.MHDESC})}ngOnDestroy(){this.MaterialHandlingSubscription&&this.MaterialHandlingSubscription.unsubscribe()}updateMaterialHandling(){var e=this.form.value;console.log(e),this.MaterialHandlingSubscription&&this.MaterialHandlingSubscription.unsubscribe(),this.MaterialHandlingSubscription=this.MaterialHandlingSvc.updateMaterialHandling(e.MHLCDE,e.MHDESC,this.user).subscribe(a=>{if(console.log(a),JSON.parse(a.success))this.successMessage("updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/materialHandling/read"]);else{const i=JSON.parse(a[0].data[1].value).returnedData.message;this.failureMessage(i)}})}successMessage(e){p().fire(e,"","success")}failureMessage(e){p().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.WI),t.Y36(g.F0),t.Y36(s.qu),t.Y36(C),t.Y36(h.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-material-handling-code"]],standalone:!0,features:[t.jDz],decls:22,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","MHLCDE"],["matInput","","formControlName","MHDESC"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Maintain Material Handling Codes "),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Code"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Description "),t.qZA(),t._UZ(19,"input",10),t.qZA()()(),t.TgZ(20,"button",11),t.NdJ("click",function(){return a.updateMaterialHandling()}),t._uU(21," Update "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[f.m,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,H.Hw,M.lW,u.KE,u.hX,b.Nt,r.a8,r.dk,r.dn,r.n5]}),n})();var N=l(36895),x=l(10266);function U(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.searchMaterialHandling())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function J(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.searchMaterialHandling())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function Y(n,o){if(1&n&&(t.TgZ(0,"form",21)(1,"div",22)(2,"div",23)(3,"mat-form-field",24)(4,"mat-label"),t._uU(5,"Material Handling Code"),t.qZA(),t._UZ(6,"input",25),t.qZA()()(),t.TgZ(7,"button",26),t._uU(8," Search "),t.qZA()()),2&n){const e=t.oxw();t.Q6J("formGroup",e.form)}}function F(n,o){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Code"),t.qZA())}function L(n,o){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.MHLCDE)}}function k(n,o){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Description"),t.qZA())}function I(n,o){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.MHDESC)}}function O(n,o){1&n&&t._UZ(0,"th",29)}function B(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",28)(1,"div",30)(2,"button",31)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",32)(6,"li")(7,"button",33),t.NdJ("click",function(){const c=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.editMaterialHandling(c))}),t.TgZ(8,"mat-icon",34),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Edit"),t.qZA()()()()()()}}function Q(n,o){1&n&&t._UZ(0,"tr",35)}function R(n,o){1&n&&t._UZ(0,"tr",36)}const q=function(){return[8,16,24]};let G=(()=>{class n{constructor(e,a,i,c,m){this.router=e,this.fb=a,this.route=i,this.MaterialHandlingSvc=c,this.matDialog=m,this.displayedColumns=["Code","Description","Actions"],this.searchTextDisplay=!1,this.duplicateSource=[],this.editedRows=[],this.columnShowHideList=[]}searchMaterialHandling(){this.searchTextDisplay=1!=this.searchTextDisplay}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({SRCH:""}),this.getMaterialHandling()}getMaterialHandling(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.MaterialHandlingSvc.getMaterialHandling().subscribe(e=>{console.log(this.getAll2Subscription),console.log(e);var a=e.data[1].value;console.log(a);var i=JSON.parse(a);console.log(i),console.log("DaTA"),this.duplicateSource=i.returnedData,console.log(this.duplicateSource),this.dataSource=new d.by(this.duplicateSource),console.log(this.dataSource),console.log("DaTA"),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}toggleColumn(e){if(e.isActive)e.position>this.displayedColumns.length-1?this.displayedColumns.push(e.name):this.displayedColumns.splice(e.position,0,e.name);else{let a=this.displayedColumns.indexOf(e.name);a>-1&&this.displayedColumns.splice(a,1)}}initializeColumnProperties(){this.displayedColumns.forEach((e,a)=>{"Actions"!=e&&this.columnShowHideList.push({position:a,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Function1",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"ChangeUser",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"LastChanged",isActive:!1})}addMaterialHandling(){this.matDialog.open(_,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}editMaterialHandling(e){this.matDialog.open(E,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.F0),t.Y36(s.qu),t.Y36(g.gz),t.Y36(C),t.Y36(h.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-material-handling-codes"]],viewQuery:function(e,a){if(1&e&&t.Gf(Z.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(a.paginator=i.first)}},standalone:!0,features:[t.jDz],decls:26,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Script",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New Handling Code",1,"addButton",3,"click"],[1,"tally-serach-form"],["class","form over-Flow",3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Code"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Description"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Script",1,"addButton",3,"click"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","SRCH"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With Material Handling Codes "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,U,3,0,"button",3),t.YNc(6,J,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return a.addMaterialHandling()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()()()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,Y,9,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,F,2,0,"th",10),t.YNc(15,L,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,k,2,0,"th",10),t.YNc(18,I,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,O,1,0,"th",14),t.YNc(21,B,12,0,"td",11),t.BQk(),t.YNc(22,Q,1,0,"tr",15),t.YNc(23,R,1,0,"tr",16),t.qZA(),t._UZ(24,"mat-paginator",17,18),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!a.searchTextDisplay),t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,q)))},dependencies:[f.m,N.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,Z.NW,H.Hw,M.lW,u.KE,u.hX,b.Nt,r.a8,r.dk,r.dn,r.n5,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,x.gM]}),n})()}}]);