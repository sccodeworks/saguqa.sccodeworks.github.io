"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[3277],{23277:(F,_,r)=>{r.r(_),r.d(_,{InquiryWorkWithSerialNumbersComponent:()=>J});var c=r(98739),i=r(7155),p=r(70879),t=r(94650),m=r(24006),T=r(65412),f=r(19132),S=r(36895),h=r(97392),d=r(4859),s=r(59549),C=r(44144),l=r(73546),D=r(10266);function N(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(a);const u=t.oxw();return t.KtG(u.searchInquiry())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function Z(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(a);const u=t.oxw();return t.KtG(u.searchInquiry())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function W(e,n){if(1&e&&(t.TgZ(0,"form",26)(1,"div",27)(2,"div",28)(3,"mat-form-field",29)(4,"mat-label"),t._uU(5,"Serial"),t.qZA(),t._UZ(6,"input",30),t.qZA(),t.TgZ(7,"mat-form-field",29)(8,"mat-label"),t._uU(9,"Status"),t.qZA(),t._UZ(10,"input",31),t.qZA(),t.TgZ(11,"mat-form-field",29)(12,"mat-label"),t._uU(13,"Item"),t.qZA(),t._UZ(14,"input",32),t.qZA(),t.TgZ(15,"mat-form-field",29)(16,"mat-label"),t._uU(17,"Current Quantity"),t.qZA(),t._UZ(18,"input",33),t.qZA(),t.TgZ(19,"mat-form-field",29)(20,"mat-label"),t._uU(21,"Lots"),t.qZA(),t._UZ(22,"input",34),t.qZA(),t.TgZ(23,"mat-form-field",29)(24,"mat-label"),t._uU(25,"Original Quantity"),t.qZA(),t._UZ(26,"input",35),t.qZA(),t.TgZ(27,"mat-form-field",29)(28,"mat-label"),t._uU(29,"Weight"),t.qZA(),t._UZ(30,"input",36),t.qZA()()(),t.TgZ(31,"button",37),t._uU(32," Search "),t.qZA()()),2&e){const a=t.oxw();t.Q6J("formGroup",a.form)}}function y(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Type"),t.qZA())}function A(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.SADOCT)}}function b(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Document Number"),t.qZA())}function g(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.SADOCN)}}function q(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Sequence Number"),t.qZA())}function I(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.SASSEQ)}}function E(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Status"),t.qZA())}function U(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.SASTAT)}}function O(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Date"),t.qZA())}function k(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.SADATE)}}function x(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Time"),t.qZA())}function M(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.SATIME)}}function B(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Reference Number"),t.qZA())}function L(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.REFN)}}function Y(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Tran Status"),t.qZA())}function Q(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.STAT)}}function R(e,n){1&e&&(t.TgZ(0,"th",38),t._uU(1,"Location"),t.qZA())}function P(e,n){if(1&e&&(t.TgZ(0,"td",39),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.SALOCN)}}function v(e,n){1&e&&t._UZ(0,"tr",40)}function K(e,n){1&e&&t._UZ(0,"tr",41)}const w=function(){return[6,12,18]};let J=(()=>{class e{constructor(a,o,u){this.fb=a,this.matDialog=o,this.router=u,this.displayedColumns=["Type","DocumentNumber","SequenceNumber","Status","Date","Time","ReferenceNumber","TranStatus","Location"],this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1,this.duplicateSource=[{SADOCT:"",SADOCN:"",SASSEQ:"",SASTAT:"",SADATE:"",SATIME:"",REFN:"",STAT:"",SALOCN:"",SRSRL:"CASELPZZ",LOCAT:"100  DOCK",ITDSC:"",TITEM:"",SRSTAT:"AC",SDSRL:"",SDSTOR:2,SDSSFX:"",SDITEM:"",SDLOT1:"",SDLOT2:"",SDLOT3:"",SDQTY:1,SDUNWT:1,SDSTAT:"",SDEQTY:1,SDEAWT:1,SerialNumber:"",DocumentType:"",DocumentNumber:1,LineNumber:1,SerialStatus:"SH",Storer:2,Location:"",Status:""}]}ngOnInit(){this.form=this.fb.group({Serial:"",Status:"",ITDSC:"",CurrentQuantity:"",Lots:"",SDQTY:"",SDUNWT:""}),this.dataSource=new i.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchInquiry(){this.searchTextDisplay=1!=this.searchTextDisplay}onBack(){this.router.navigate(["/main-nav/serialnumbers/read"])}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(m.qu),t.Y36(T.uw),t.Y36(f.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inquiry-work-with-serial-numbers"]],viewQuery:function(a,o){if(1&a&&t.Gf(c.NW,5),2&a){let u;t.iGM(u=t.CRH())&&(o.paginator=u.first)}},standalone:!0,features:[t.jDz],decls:44,vars:8,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","search Inquiry",3,"click",4,"ngIf"],[1,"tally-serach-form"],["class","form over-Flow",3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Type"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","DocumentNumber"],["matColumnDef","SequenceNumber"],["matColumnDef","Status"],["matColumnDef","Date"],["matColumnDef","Time"],["matColumnDef","ReferenceNumber"],["matColumnDef","TranStatus"],["matColumnDef","Location"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","search Inquiry",1,"addButton",3,"click"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","Serial","readonly",""],["matInput","","formControlName","Status","readonly",""],["matInput","","formControlName","ITDSC","readonly",""],["matInput","","formControlName","CurrentQuantity","readonly",""],["matInput","","formControlName","Lots","readonly",""],["matInput","","formControlName","SDQTY","readonly",""],["matInput","","formControlName","SDUNWT","readonly",""],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,o){1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return o.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Serial Activity Inquiry"),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,N,3,0,"button",4),t.YNc(9,Z,3,0,"button",5),t.qZA()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,W,33,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,y,2,0,"th",10),t.YNc(15,A,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,b,2,0,"th",10),t.YNc(18,g,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,q,2,0,"th",10),t.YNc(21,I,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,E,2,0,"th",10),t.YNc(24,U,2,1,"td",11),t.BQk(),t.ynx(25,15),t.YNc(26,O,2,0,"th",10),t.YNc(27,k,2,1,"td",11),t.BQk(),t.ynx(28,16),t.YNc(29,x,2,0,"th",10),t.YNc(30,M,2,1,"td",11),t.BQk(),t.ynx(31,17),t.YNc(32,B,2,0,"th",10),t.YNc(33,L,2,1,"td",11),t.BQk(),t.ynx(34,18),t.YNc(35,Y,2,0,"th",10),t.YNc(36,Q,2,1,"td",11),t.BQk(),t.ynx(37,19),t.YNc(38,R,2,0,"th",10),t.YNc(39,P,2,1,"td",11),t.BQk(),t.YNc(40,v,1,0,"tr",20),t.YNc(41,K,1,0,"tr",21),t.qZA(),t._UZ(42,"mat-paginator",22,23),t.qZA()),2&a&&(t.xp6(8),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!o.searchTextDisplay),t.xp6(2),t.Q6J("ngIf",o.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",o.dataSource),t.xp6(28),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,w)))},dependencies:[p.m,S.O5,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,c.NW,h.Hw,d.lW,s.KE,s.hX,C.Nt,l.a8,l.dk,l.dn,l.n5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,D.gM]}),e})()}}]);