"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[443,1790,8754,5645,2313],{11790:(w,g,l)=>{l.d(g,{y:()=>_});var p=l(65412),i=l(94650),v=l(97392),t=l(4859);let r=(()=>{class u{constructor(m,h){this.dialogRef=m,this.data=h}ngOnInit(){}closeDialog(){this.dialogRef.close(!1)}}return u.\u0275fac=function(m){return new(m||u)(i.Y36(p.so),i.Y36(p.WI))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-alert-dialog"]],decls:10,vars:3,consts:[[1,"confirm-dialog-container"],[1,"content-container"],["id","close-icon",3,"click"],[1,"content-span","full-width"],["mat-flat-button","","id","no-button",3,"mat-dialog-close"],["mat-flat-button","","id","yes-button",3,"mat-dialog-close"]],template:function(m,h){1&m&&(i.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),i.NdJ("click",function(){return h.closeDialog()}),i._uU(3,"close "),i.qZA(),i.TgZ(4,"span",3),i._uU(5),i.qZA()(),i.TgZ(6,"button",4),i._uU(7,"Cancel"),i.qZA(),i.TgZ(8,"button",5),i._uU(9,"Delete"),i.qZA()()),2&m&&(i.xp6(5),i.Oqu(h.data.message),i.xp6(1),i.Q6J("mat-dialog-close",!1),i.xp6(2),i.Q6J("mat-dialog-close",!0))},dependencies:[v.Hw,t.lW,p.ZT]}),u})(),_=(()=>{class u{constructor(m){this.dialog=m}openCustomAlert(m){return this.dialog.open(r,{width:"450px",panelClass:"confirm-dialog-container",disableClose:!0,data:{message:m}})}}return u.\u0275fac=function(m){return new(m||u)(i.LFG(p.uw))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},40443:(w,g,l)=>{l.r(g),l.d(g,{WwInboundEventsComponent:()=>rt});var p=l(98739),i=l(7155),v=l(70879),t=l(94650),r=l(24006),_=l(80529),u=l(62843),f=l(92340);let m=(()=>{class n{constructor(e){this.httpClient=e,this.url=f.N.API_BASE_URL2,this.httpHeader={headers:new _.WM({"Content-Type":"application/json"})}}getInboundEvents(){return this.httpClient.get(this.url+"/InboundEvents/read")}getAll(e){return this.httpClient.get(this.url+`/InboundEvents/readAll?user=${e}`)}deleteInboundEvents(e,s){return console.log(s),this.httpClient.delete(this.url+`/InboundEvents/delete?user=${e}&EVCODE=${s}`)}httpError(e){let s="";return s=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`,console.log(s),(0,u._)(()=>new Error(s))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=l(65412),b=l(19132),A=l(11790),T=l(36895),I=l(97392),Z=l(28255),x=l(4859),E=l(59549),N=l(44144),C=l(73546),y=l(10266),U=l(90455);function S(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchInboundEvents())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function W(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchInboundEvents())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function D(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"span",34),t.NdJ("click",function(a){return a.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",35),t.NdJ("ngModelChange",function(a){const c=t.CHM(e).$implicit;return t.KtG(c.isActive=a)})("change",function(){const d=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.toggleColumn(d))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngModel",e.isActive),t.xp6(1),t.hij(" ",e.name," ")}}function O(n,o){if(1&n&&(t.TgZ(0,"form",36)(1,"div",37)(2,"div",38)(3,"mat-form-field",39)(4,"mat-label"),t._uU(5,"Bill"),t.qZA(),t._UZ(6,"input",40),t.qZA(),t.TgZ(7,"mat-form-field",39)(8,"mat-label"),t._uU(9,"Reference Number"),t.qZA(),t._UZ(10,"input",41),t.qZA(),t.TgZ(11,"mat-form-field",39)(12,"mat-label"),t._uU(13,"PO No"),t.qZA(),t._UZ(14,"input",42),t.qZA(),t.TgZ(15,"mat-form-field",39)(16,"mat-label"),t._uU(17,"PRO Number"),t.qZA(),t._UZ(18,"input",43),t.qZA()()(),t.TgZ(19,"button",44),t._uU(20," Search "),t.qZA()()),2&n){const e=t.oxw();t.Q6J("formGroup",e.form)}}function Y(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Bill"),t.qZA())}function q(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.OHBILL)}}function H(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Storer"),t.qZA())}function R(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.OHSSFX)}}function B(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Reference Number"),t.qZA())}function Q(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.OHSREF)}}function L(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Event Code "),t.qZA())}function M(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.EVCODE)}}function F(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Reason Code"),t.qZA())}function J(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.EVSRCD)}}function $(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Time"),t.qZA())}function P(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.EVDATE)}}function k(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Date"),t.qZA())}function G(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.EVTIME)}}function z(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"PO Number"),t.qZA())}function V(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.OHPO)}}function K(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Carrier"),t.qZA())}function X(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.Carrier)}}function j(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"PRO Number"),t.qZA())}function tt(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.PRONumber)}}function nt(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Dta Elm"),t.qZA())}function et(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.DtaElm)}}function ot(n,o){1&n&&(t.TgZ(0,"th",45),t._uU(1,"Group"),t.qZA())}function it(n,o){if(1&n&&(t.TgZ(0,"td",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.Group)}}function st(n,o){1&n&&t._UZ(0,"th",47)}function lt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td",46)(1,"div",48)(2,"button",49)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",50)(6,"li")(7,"button",51),t.NdJ("click",function(){const d=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.Reviewerrors(d))}),t.TgZ(8,"mat-icon",52),t._uU(9,"call_made"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Review Errors"),t.qZA()()(),t.TgZ(12,"li")(13,"button",51),t.NdJ("click",function(){const d=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.deleteInboundEvent(d))}),t.TgZ(14,"mat-icon",53),t._uU(15,"delete"),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"Delete"),t.qZA()()()()()()}}function at(n,o){1&n&&t._UZ(0,"tr",54)}function ut(n,o){1&n&&t._UZ(0,"tr",55)}const mt=function(){return[8,16,24]};let rt=(()=>{class n{constructor(e,s,a,d,c,ct){this.fb=e,this.InboundEvents=s,this.matDialog=a,this.router=d,this.CustomAlertService=c,this.route=ct,this.displayedColumns=["Bill","Storer","ReferenceNumber","EventCode","ReasonCode","Date","Time","Actions"],this.user=localStorage.getItem("userName"),this.editedRows=[],this.searchTextDisplay=!1,this.duplicateSource=[{OHBILL:50015,OHSSFX:11,OHSREF:"",EVCODE:"D1",EVSRCD:"",EVDATE:"2/25/20",EVTIME:"10:08",OHPO:"",Carrier:"",PRONumber:"",DtaElm:650,Group:""}],this.columnShowHideList=[]}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.form=this.fb.group({BILL:"",SREF:"",PO:"",PRO:""}),this.dataSource=new i.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchInboundEvents(){this.searchTextDisplay=1!=this.searchTextDisplay}toggleColumn(e){if(e.isActive)this.displayedColumns.splice(e.position>this.displayedColumns.length-1?this.displayedColumns.length-1:e.position,0,e.name);else{let s=this.displayedColumns.indexOf(e.name);s>-1&&this.displayedColumns.splice(s,1)}console.log(this.displayedColumns)}initializeColumnProperties(){this.displayedColumns.forEach((e,s)=>{"Actions"!=e&&"PONumber"!=e&&this.columnShowHideList.push({position:s,name:e,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"PONumber",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Carrier",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"PRONumber",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"DtaElm",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Group",isActive:!1}),console.log(this.columnShowHideList)}Reviewerrors(e){this.router.navigateByUrl("/main-nav/validation-errors/read")}deleteInboundEvent(e){this.CustomAlertService.openCustomAlert("Are you sure you want to delete this Inbound Events ? ")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(m),t.Y36(h.uw),t.Y36(b.F0),t.Y36(A.y),t.Y36(b.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ww-inbound-events"]],viewQuery:function(e,s){if(1&e&&t.Gf(p.NW,5),2&e){let a;t.iGM(a=t.CRH())&&(s.paginator=a.first)}},standalone:!0,features:[t.jDz],decls:60,vars:10,consts:[[1,"over-Flow"],[1,"title"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","Search Inbound Events",3,"click",4,"ngIf"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Bill"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Storer"],["matColumnDef","ReferenceNumber"],["matColumnDef","EventCode"],["matColumnDef","ReasonCode"],["matColumnDef","Time"],["matColumnDef","Date"],["matColumnDef","PONumber"],["matColumnDef","Carrier"],["matColumnDef","PRONumber"],["matColumnDef","DtaElm"],["matColumnDef","Group"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","Search Inbound Events",1,"addButton",3,"click"],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],[3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","BILL"],["matInput","","formControlName","SREF",2,"text-transform","uppercase"],["matInput","","formControlName","PO",2,"text-transform","uppercase"],["matInput","","formControlName","PRO",2,"text-transform","uppercase"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,s){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Work With Incoming 214s "),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,S,3,0,"button",3),t.YNc(6,W,3,0,"button",4),t.TgZ(7,"mat-menu",null,5),t.YNc(9,D,4,2,"span",6),t.qZA(),t.TgZ(10,"button",7,8)(12,"mat-icon"),t._uU(13,"visibility_off"),t.qZA()()()(),t.TgZ(14,"mat-card-content",9),t.YNc(15,O,21,1,"form",10),t.qZA(),t.TgZ(16,"table",11),t.ynx(17,12),t.YNc(18,Y,2,0,"th",13),t.YNc(19,q,2,1,"td",14),t.BQk(),t.ynx(20,15),t.YNc(21,H,2,0,"th",13),t.YNc(22,R,2,1,"td",14),t.BQk(),t.ynx(23,16),t.YNc(24,B,2,0,"th",13),t.YNc(25,Q,2,1,"td",14),t.BQk(),t.ynx(26,17),t.YNc(27,L,2,0,"th",13),t.YNc(28,M,2,1,"td",14),t.BQk(),t.ynx(29,18),t.YNc(30,F,2,0,"th",13),t.YNc(31,J,2,1,"td",14),t.BQk(),t.ynx(32,19),t.YNc(33,$,2,0,"th",13),t.YNc(34,P,2,1,"td",14),t.BQk(),t.ynx(35,20),t.YNc(36,k,2,0,"th",13),t.YNc(37,G,2,1,"td",14),t.BQk(),t.ynx(38,21),t.YNc(39,z,2,0,"th",13),t.YNc(40,V,2,1,"td",14),t.BQk(),t.ynx(41,22),t.YNc(42,K,2,0,"th",13),t.YNc(43,X,2,1,"td",14),t.BQk(),t.ynx(44,23),t.YNc(45,j,2,0,"th",13),t.YNc(46,tt,2,1,"td",14),t.BQk(),t.ynx(47,24),t.YNc(48,nt,2,0,"th",13),t.YNc(49,et,2,1,"td",14),t.BQk(),t.ynx(50,25),t.YNc(51,ot,2,0,"th",13),t.YNc(52,it,2,1,"td",14),t.BQk(),t.ynx(53,26),t.YNc(54,st,1,0,"th",27),t.YNc(55,lt,18,0,"td",14),t.BQk(),t.YNc(56,at,1,0,"tr",28),t.YNc(57,ut,1,0,"tr",29),t.qZA(),t._UZ(58,"mat-paginator",30,31),t.qZA()),2&e){const a=t.MAs(8);t.xp6(5),t.Q6J("ngIf",s.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!s.searchTextDisplay),t.xp6(3),t.Q6J("ngForOf",s.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",a),t.xp6(5),t.Q6J("ngIf",s.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",s.dataSource),t.xp6(40),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(9,mt))}},dependencies:[v.m,T.sg,T.O5,r._Y,r.Fj,r.JJ,r.JL,r.On,r.sg,r.u,p.NW,I.Hw,Z.VK,Z.p6,x.lW,E.KE,E.hX,N.Nt,C.a8,C.dk,C.dn,C.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,y.gM,U.Rr]}),n})()}}]);