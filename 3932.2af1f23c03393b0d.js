"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3932,1790,8754,5645,2313],{11790:(y,C,n)=>{n.d(C,{y:()=>f});var d=n(65412),r=n(94650),S=n(97392),h=n(4859);let _=(()=>{class c{constructor(l,g){this.dialogRef=l,this.data=g}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return c.\u0275fac=function(l){return new(l||c)(r.Y36(d.so),r.Y36(d.WI))},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(l,g){1&l&&(r.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),r.NdJ("click",function(){return g.closeDialog()}),r._uU(3,"close "),r.qZA(),r.TgZ(4,"span",3),r._uU(5),r.qZA()(),r.TgZ(6,"button",4),r._uU(7,"Cancel"),r.qZA(),r.TgZ(8,"button",5),r._uU(9,"Delete"),r.qZA()()),2&l&&(r.xp6(5),r.Oqu(g.data.message),r.xp6(1),r.Q6J("mat-dialog-close",!1),r.xp6(2),r.Q6J("mat-dialog-close",!0))},dependencies:[S.Hw,h.lW,d.ZT]}),c})(),f=(()=>{class c{constructor(l){this.dialog=l}openCustomAlert(l){return this.dialog.open(_,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:l}})}}return c.\u0275fac=function(l){return new(l||c)(r.LFG(d.uw))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},93932:(y,C,n)=>{n.r(C),n.d(C,{ExtractReportSortClausesComponent:()=>W});var d=n(98739),r=n(7155),S=n(92110),h=n(65412),_=n(35226),f=n.n(_),c=n(70879),t=n(94650),l=n(24006),g=n(30631),T=n(19132),R=n(97392),Z=n(4859),x=n(59549),b=n(44144),m=n(73546);let A=(()=>{class o{constructor(e,a,s,u,p){this.anyvariable=e,this.fb=a,this.ExtractReportsortSvc=s,this.router=u,this.dialogRef=p,this.user=localStorage.getItem("userName")}ngOnDestroy(){this.getExtractReportSortClausesUpdateSubscription&&this.getExtractReportSortClausesUpdateSubscription.unsubscribe()}ngOnInit(){this.form=this.fb.group({SORTNAME:this.anyvariable.ExtractName,SORTFILE:this.anyvariable.FileName,ORDER:this.anyvariable.OrderBy,GRP:this.anyvariable.GroupBy})}updateExtractReportSort(){var e=this.form.value;console.log(e),this.getExtractReportSortClausesUpdateSubscription&&this.getExtractReportSortClausesUpdateSubscription.unsubscribe(),this.getExtractReportSortClausesUpdateSubscription=this.ExtractReportsortSvc.updateExtractReportSort(e.SORTNAME,e.SORTFILE,e.ORDER,e.GRP,this.user).subscribe(a=>{if(console.log(a),JSON.parse(a.success))this.successMessage("updated successfully"),this.closeDialog(),this.router.navigate(["/main-nav/extractreportsort/read"]);else{const s=JSON.parse(a[0].data[1].value).returnedData.message;this.failureMessage(s)}})}successMessage(e){f().fire(e,"","success")}failureMessage(e){f().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.WI),t.Y36(l.qu),t.Y36(g.$),t.Y36(T.F0),t.Y36(h.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-extract-report-sort-clauses-update"]],standalone:!0,features:[t.jDz],decls:32,vars:1,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","readonly","","formControlName","SORTNAME","readonly",""],["matInput","","formControlName","SORTFILE","readonly",""],["appearance","outline",1,"full-width","w-100"],["matInput","","formControlName","ORDER"],["matInput","","formControlName","GRP"],["type","submit","mat-raised-button","",1,"buttons","addButton","new-tally-form-btn",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Update Extract Sorts"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return a.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Extract Name"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Extract File"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Order By"),t.qZA(),t.TgZ(23,"textarea",12),t._uU(24,"Order By "),t.qZA()(),t.TgZ(25,"mat-form-field",11)(26,"mat-label"),t._uU(27,"Group By"),t.qZA(),t.TgZ(28,"textarea",13),t._uU(29,"Group By"),t.qZA()()()(),t.TgZ(30,"button",14),t.NdJ("click",function(){return a.updateExtractReportSort()}),t._uU(31," Update "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.form))},dependencies:[c.m,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,R.Hw,Z.lW,x.KE,x.hX,b.Nt,m.a8,m.dk,m.dn,m.n5]}),o})();var N=n(11790),E=n(36895),v=n(28255),U=n(10266),w=n(90455);function D(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchExtractReportSort())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function O(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"span",26),t.NdJ("click",function(s){return s.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",27),t.NdJ("ngModelChange",function(s){const p=t.CHM(e).$implicit;return t.KtG(p.isActive=s)})("change",function(){const u=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.toggleColumn(u))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(1),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function F(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.searchExtractReportSort())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function J(o,i){if(1&o&&(t.TgZ(0,"form",29)(1,"div",30)(2,"div",31)(3,"mat-form-field",32)(4,"mat-label"),t._uU(5,"Extract Name"),t.qZA(),t._UZ(6,"input",33),t.qZA()()(),t.TgZ(7,"button",34),t._uU(8," Search "),t.qZA()()),2&o){const e=t.oxw();t.Q6J("formGroup",e.form)}}function B(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Extract Name"),t.qZA())}function M(o,i){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.ExtractName)}}function Y(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"File Name"),t.qZA())}function G(o,i){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.FileName)}}function q(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Order By"),t.qZA())}function H(o,i){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.OrderBy)}}function I(o,i){1&o&&(t.TgZ(0,"th",35),t._uU(1,"Group By"),t.qZA())}function Q(o,i){if(1&o&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.GroupBy)}}function k(o,i){1&o&&t._UZ(0,"th",37)}function L(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td",36)(1,"div",38)(2,"button",39)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",40)(6,"li")(7,"button",41),t.NdJ("click",function(){const u=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.UpdateExtractReportSortForm(u))}),t.TgZ(8,"mat-icon",42),t._uU(9,"edit"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Update"),t.qZA()()(),t.TgZ(12,"li")(13,"button",41),t.NdJ("click",function(){const u=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.deleteExtractReportSort(u.ExtractName))}),t.TgZ(14,"mat-icon",43),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function $(o,i){1&o&&t._UZ(0,"tr",44)}function z(o,i){1&o&&t._UZ(0,"tr",45)}const K=function(){return[8,16,24]};let W=(()=>{class o{constructor(e,a,s,u,p){this.fb=e,this.matDialog=a,this.ExtractReportsortSvc=s,this.router=u,this.CustomAlertService=p,this.displayedColumns=["ExtractName","FileName","OrderBy","Actions"],this.user=localStorage.getItem("userName"),this.duplicateSource=[],this.editedRows=[],this.searchTextDisplay=!1,this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.element=history.state,this.form=this.fb.group({ExtractName:this.element.ReportName}),this.getExtractReportSort()}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchExtractReportSort(){this.searchTextDisplay=1!=this.searchTextDisplay}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let a=this.displayedColumns.indexOf(e.name);a>-1&&this.displayedColumns.splice(a,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((e,a)=>{"Actions"!=e&&"GroupBy"!=e&&this.columnShowHideList.push({position:a,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"GroupBy",isActive:!1}),console.log(this.columnShowHideList)}getExtractReportSort(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.ExtractReportsortSvc.getExtractReportSort().subscribe(e=>{console.log(this.getAll2Subscription),console.log(e);var a=e.data[1].value;console.log(a);var s=JSON.parse(a);console.log(s),console.log("DaTA"),this.duplicateSource=s.returnedData,console.log(this.duplicateSource),this.dataSource=new r.by(this.duplicateSource),console.log(this.dataSource),console.log("DaTA"),this.dataSource.paginator=this.paginator})}deleteExtractReportSort(e){this.CustomAlertService.openCustomAlert("Are you sure want to delete this Extract Name: "+e+"?").afterClosed().subscribe(s=>{s&&(this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.ExtractReportsortSvc.deleteExtractReportSort(this.user,e).subscribe(u=>{if(console.log(u),JSON.parse(u.success))this.successMessage(" deleted successfully"),this.router.navigate(["/main-nav/extractreportsort/read"]);else{const p=JSON.parse(u[0].data[1].value).returnedData.message;this.failureMessage(p)}}))})}successMessage(e){f().fire(e,"","success"),this.router.navigate(["/main-nav/extractreportsort/read"])}failureMessage(e){f().fire(e,"","error")}addExtractReportSort(){this.matDialog.open(S.ExtractReportSortClausesAddComponent,{width:"1000px",maxHeight:"80vh",autoFocus:!1})}UpdateExtractReportSortForm(e){this.matDialog.open(A,{width:"1000px",maxHeight:"80vh",data:e,autoFocus:!1})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(h.uw),t.Y36(g.$),t.Y36(T.F0),t.Y36(N.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-extract-report-sort-clauses"]],viewQuery:function(e,a){if(1&e&&t.Gf(d.NW,5),2&e){let s;t.iGM(s=t.CRH())&&(a.paginator=s.first)}},standalone:!0,features:[t.jDz],decls:39,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","class","addButton","matTooltip","Search ExtractReportSort",3,"click",4,"ngIf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],["mat-button","","matTooltip","Add New ExtractReportSort",1,"addButton",3,"click"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","ExtractName"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","FileName"],["matColumnDef","OrderBy"],["matColumnDef","GroupBy"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-button","","matTooltip","Search ExtractReportSort",1,"addButton",3,"click"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","ExtractName",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,a){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3," Work With Extract Sorts"),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,D,3,0,"button",3),t.TgZ(6,"mat-menu",null,4),t.YNc(8,O,4,2,"span",5),t.qZA(),t.YNc(9,F,3,0,"button",6),t.TgZ(10,"button",7,8)(12,"mat-icon"),t._uU(13,"visibility_off"),t.qZA()(),t.TgZ(14,"button",9),t.NdJ("click",function(){return a.addExtractReportSort()}),t.TgZ(15,"mat-icon"),t._uU(16,"add"),t.qZA()()()(),t.TgZ(17,"mat-card-content",10),t.YNc(18,J,9,1,"form",11),t.qZA(),t.TgZ(19,"table",12),t.ynx(20,13),t.YNc(21,B,2,0,"th",14),t.YNc(22,M,2,1,"td",15),t.BQk(),t.ynx(23,16),t.YNc(24,Y,2,0,"th",14),t.YNc(25,G,2,1,"td",15),t.BQk(),t.ynx(26,17),t.YNc(27,q,2,0,"th",14),t.YNc(28,H,2,1,"td",15),t.BQk(),t.ynx(29,18),t.YNc(30,I,2,0,"th",14),t.YNc(31,Q,2,1,"td",15),t.BQk(),t.ynx(32,19),t.YNc(33,k,1,0,"th",20),t.YNc(34,L,18,0,"td",15),t.BQk(),t.YNc(35,$,1,0,"tr",21),t.YNc(36,z,1,0,"tr",22),t.qZA(),t._UZ(37,"mat-paginator",23,24),t.qZA()),2&e){const s=t.MAs(7);t.xp6(5),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(3),t.Q6J("ngForOf",a.columnShowHideList),t.xp6(1),t.Q6J("ngIf",!a.searchTextDisplay),t.xp6(1),t.Q6J("matMenuTriggerFor",s),t.xp6(8),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,K))}},dependencies:[c.m,E.sg,E.O5,l._Y,l.Fj,l.JJ,l.JL,l.On,l.sg,l.u,d.NW,R.Hw,v.VK,v.p6,Z.lW,x.KE,x.hX,b.Nt,m.a8,m.dk,m.dn,m.n5,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,U.gM,w.Rr]}),o})()}}]);