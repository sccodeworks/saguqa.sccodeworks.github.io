"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[7692,1790,8754,5645,2313],{11790:(v,F,s)=>{s.d(F,{y:()=>d});var g=s(65412),a=s(94650),C=s(97392),h=s(4859);let Z=(()=>{class c{constructor(i,f){this.dialogRef=i,this.data=f}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return c.\u0275fac=function(i){return new(i||c)(a.Y36(g.so),a.Y36(g.WI))},c.\u0275cmp=a.Xpm({type:c,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(i,f){1&i&&(a.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),a.NdJ("click",function(){return f.closeDialog()}),a._uU(3,"close "),a.qZA(),a.TgZ(4,"span",3),a._uU(5),a.qZA()(),a.TgZ(6,"button",4),a._uU(7,"Cancel"),a.qZA(),a.TgZ(8,"button",5),a._uU(9,"Delete"),a.qZA()()),2&i&&(a.xp6(5),a.Oqu(f.data.message),a.xp6(1),a.Q6J("mat-dialog-close",!1),a.xp6(2),a.Q6J("mat-dialog-close",!0))},dependencies:[C.Hw,h.lW,g.ZT]}),c})(),d=(()=>{class c{constructor(i){this.dialog=i}openCustomAlert(i){return this.dialog.open(Z,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:i}})}}return c.\u0275fac=function(i){return new(i||c)(a.LFG(g.uw))},c.\u0275prov=a.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},27692:(v,F,s)=>{s.r(F),s.d(F,{ExtractReportFiltersComponent:()=>L});var g=s(98739),a=s(7155),C=s(79284),h=s(65412),Z=s(35226),d=s.n(Z),c=s(70879),t=s(94650),i=s(24006),f=s(19132),b=s(95848),E=s(97392),T=s(4859),x=s(59549),_=s(44144),m=s(73546);let R=(()=>{class o{constructor(e,r,n,u,p){this.anyvariable=e,this.fb=r,this.router=n,this.ExtractReportFilSvc=u,this.dialogRef=p,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getExtractReportFiltersSubscription&&this.getExtractReportFiltersSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({FLTRNAME:this.anyvariable.FilterName,DESC:this.anyvariable.Program,Description:this.anyvariable.Description})}copyExtractReportFilter(){var e=this.form.value;console.log(e),this.getExtractReportFiltersSubscription&&this.getExtractReportFiltersSubscription.unsubscribe(),this.getExtractReportFiltersSubscription=this.ExtractReportFilSvc.copyExtractReportFilter(e.FLTRNAME,e.DESC,e.Description,this.user).subscribe(r=>{if(console.log(r),JSON.parse(r.success))this.successMessage("updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/extractReportFilters/read"]);else{const n=JSON.parse(r[0].data[1].value).returnedData.message;this.failureMessage(n)}})}successMessage(e){d().fire(e,"","success")}failureMessage(e){d().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.WI),t.Y36(i.qu),t.Y36(f.F0),t.Y36(b.X),t.Y36(h.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-extract-report-filters-copy"]],standalone:!0,features:[t.jDz],decls:27,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","FLTRNAME","readonly",""],["matInput","","formControlName","DESC",2,"text-transform","uppercase"],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","Description"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Copy Extract Report Filters"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Filter Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Program"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Description"),t.qZA(),t.TgZ(23,"textarea",12),t._uU(24," Description"),t.qZA()()()(),t.TgZ(25,"button",13),t.NdJ("click",function(){return r.copyExtractReportFilter()}),t._uU(26,"Copy"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",r.form))},dependencies:[c.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,E.Hw,T.lW,x.KE,x.hX,_.Nt,m.a8,m.dk,m.dn,m.n5]}),o})(),y=(()=>{class o{constructor(e,r,n,u,p){this.anyvariable=e,this.fb=r,this.router=n,this.ExtractReportFilSvc=u,this.dialogRef=p,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getExtractReportFiltersSubscription&&this.getExtractReportFiltersSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({FLTRNAME:this.anyvariable.FilterName,DESC:this.anyvariable.Program,Description:this.anyvariable.Description})}updateExtractReportFilter(){var e=this.form.value;console.log(e),this.getExtractReportFiltersSubscription&&this.getExtractReportFiltersSubscription.unsubscribe(),this.getExtractReportFiltersSubscription=this.ExtractReportFilSvc.updateExtractReportFilter(e.FLTRNAME,e.DESC,e.Description,this.user).subscribe(r=>{if(console.log(r),JSON.parse(r.success))this.successMessage("updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/extractReportFilters/read"]);else{const n=JSON.parse(r[0].data[1].value).returnedData.message;this.failureMessage(n)}})}successMessage(e){d().fire(e,"","success")}failureMessage(e){d().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.WI),t.Y36(i.qu),t.Y36(f.F0),t.Y36(b.X),t.Y36(h.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-extract-report-filters-update"]],standalone:!0,features:[t.jDz],decls:27,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","FLTRNAME","readonly",""],["matInput","","readonly","","formControlName","DESC","readonly",""],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","Description"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Update Extract Report Filters"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return r.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Filter Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Program"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Description"),t.qZA(),t.TgZ(23,"textarea",12),t._uU(24," Description"),t.qZA()()()(),t.TgZ(25,"button",13),t.NdJ("click",function(){return r.updateExtractReportFilter()}),t._uU(26,"Update"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",r.form))},dependencies:[c.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,E.Hw,T.lW,x.KE,x.hX,_.Nt,m.a8,m.dk,m.dn,m.n5]}),o})();var A=s(11790),N=s(36895),D=s(10266);function S(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.searchExtractFilters())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function U(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.searchExtractFilters())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function w(o,l){if(1&o&&(t.TgZ(0,"form",22)(1,"div",23)(2,"div",24)(3,"mat-form-field",25)(4,"mat-label"),t._uU(5,"Filter Name"),t.qZA(),t._UZ(6,"input",26),t.qZA(),t.TgZ(7,"mat-form-field",25)(8,"mat-label"),t._uU(9,"Program Name"),t.qZA(),t._UZ(10,"input",27),t.qZA()()(),t.TgZ(11,"button",28),t._uU(12," Search "),t.qZA()()),2&o){const e=t.oxw();t.Q6J("formGroup",e.form)}}function J(o,l){1&o&&(t.TgZ(0,"th",29),t._uU(1,"Filter Name"),t.qZA())}function Y(o,l){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.Oqu(e.FilterName)}}function q(o,l){1&o&&(t.TgZ(0,"th",29),t._uU(1,"Program"),t.qZA())}function M(o,l){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.Oqu(e.Program)}}function k(o,l){1&o&&(t.TgZ(0,"th",29),t._uU(1,"Description"),t.qZA())}function I(o,l){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.Oqu(e.Description)}}function O(o,l){1&o&&t._UZ(0,"th",31)}function Q(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"td",30)(1,"div",32)(2,"button",33)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",34)(6,"li")(7,"button",35),t.NdJ("click",function(){const u=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.Update(u))}),t.TgZ(8,"mat-icon",36),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Update"),t.qZA()()(),t.TgZ(12,"li")(13,"button",35),t.NdJ("click",function(){const u=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.Copy(u))}),t.TgZ(14,"mat-icon",36),t._uU(15,"call_made"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Copy"),t.qZA()()(),t.TgZ(18,"li")(19,"button",35),t.NdJ("click",function(){const u=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.deleteExtractReportFilter(u.FilterName))}),t.TgZ(20,"mat-icon",37),t._uU(21,"delete"),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Delete"),t.qZA()()()()()()}}function H(o,l){1&o&&t._UZ(0,"tr",38)}function B(o,l){1&o&&t._UZ(0,"tr",39)}const G=function(){return[8,16,24]};let L=(()=>{class o{constructor(e,r,n,u,p){this.fb=e,this.matDialog=r,this.router=n,this.ExtractReportFilSvc=u,this.CustomAlertService=p,this.displayedColumns=["FilterName","Program","Description","Actions"],this.user=localStorage.getItem("userName"),this.duplicateSource=[],this.searchTextDisplay=!1}ngOnInit(){this.form=this.fb.group({FilterName:"",ProgramName:""}),this.getExtractReportFilter()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchExtractFilters(){this.searchTextDisplay=1!=this.searchTextDisplay}getExtractReportFilter(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.ExtractReportFilSvc.getExtractReportFilter().subscribe(e=>{console.log(this.getAll2Subscription),console.log(e);var r=e.data[1].value;console.log(r);var n=JSON.parse(r);console.log(n),console.log("DaTA"),this.duplicateSource=n.returnedData,console.log(this.duplicateSource),this.dataSource=new a.by(this.duplicateSource),console.log(this.dataSource),console.log("DaTA"),this.dataSource.paginator=this.paginator})}deleteExtractReportFilter(e){this.CustomAlertService.openCustomAlert("Are you sure want to delete this Filter: "+e+"?").afterClosed().subscribe(n=>{n&&(this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.ExtractReportFilSvc.deleteExtractReportFilter(this.user,e).subscribe(u=>{if(console.log(u),JSON.parse(u.success))this.successMessage(" deleted successfully"),this.router.navigate(["/main-nav/extractReportFilters/read"]);else{const p=JSON.parse(u[0].data[1].value).returnedData.message;this.failureMessage(p)}}))})}successMessage(e){d().fire(e,"","success"),this.router.navigate(["/main-nav/extractReportFilters/read"])}failureMessage(e){d().fire(e,"","error")}addExtractFilters(){this.matDialog.open(C.ExtractReportFiltersAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}Update(e){this.matDialog.open(y,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}Copy(e){this.matDialog.open(R,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(h.uw),t.Y36(f.F0),t.Y36(b.X),t.Y36(A.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-extract-report-filters"]],viewQuery:function(e,r){if(1&e&&t.Gf(g.NW,5),2&e){let n;t.iGM(n=t.CRH())&&(r.paginator=n.first)}},standalone:!0,features:[t.jDz],decls:29,vars:8,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search ExtractFilters",3,"click",4,"ngIf"],["mat-button","","matTooltip","Add New  Extract Filters",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","FilterName"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Program"],["matColumnDef","Description"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search ExtractFilters",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","FilterName",2,"text-transform","uppercase"],["matInput","","formControlName","ProgramName",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Extract Filters"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,S,3,0,"button",3),t.YNc(6,U,3,0,"button",4),t.TgZ(7,"button",5),t.NdJ("click",function(){return r.addExtractFilters()}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA()()()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,w,13,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,J,2,0,"th",10),t.YNc(15,Y,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,q,2,0,"th",10),t.YNc(18,M,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,k,2,0,"th",10),t.YNc(21,I,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,O,1,0,"th",15),t.YNc(24,Q,24,0,"td",11),t.BQk(),t.YNc(25,H,1,0,"tr",16),t.YNc(26,B,1,0,"tr",17),t.qZA(),t._UZ(27,"mat-paginator",18,19),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",r.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!r.searchTextDisplay),t.xp6(5),t.Q6J("ngIf",r.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",r.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,G)))},dependencies:[c.m,N.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g.NW,E.Hw,T.lW,x.KE,x.hX,_.Nt,m.a8,m.dk,m.dn,m.n5,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,D.gM]}),o})()}}]);