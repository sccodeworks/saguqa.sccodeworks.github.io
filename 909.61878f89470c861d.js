"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[909],{909:(H,_,n)=>{n.r(_),n.d(_,{WwRequisitionGroupsDetailsComponent:()=>K});var m=n(98739),u=n(7155),p=n(70879),t=n(94650),l=n(24006),d=n(65412),f=n(19132),T=n(36895),D=n(97392),R=n(4859),c=n(59549),g=n(44144),r=n(73546),h=n(10266);function q(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.searchRequisitionGroupDetails())}),t.TgZ(1,"mat-icon"),t._uU(2,"clear"),t.qZA()()}}function C(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.searchRequisitionGroupDetails())}),t.TgZ(1,"mat-icon"),t._uU(2,"search"),t.qZA()()}}function Z(e,o){if(1&e&&(t.TgZ(0,"form",27)(1,"div",28)(2,"div",29)(3,"mat-form-field",30)(4,"mat-label"),t._uU(5,"Group Number"),t.qZA(),t._UZ(6,"input",31),t.qZA(),t.TgZ(7,"mat-form-field",30)(8,"mat-label"),t._uU(9,"Assigned"),t.qZA(),t._UZ(10,"input",32),t.qZA(),t.TgZ(11,"mat-form-field",30)(12,"mat-label"),t._uU(13,"To"),t.qZA(),t._UZ(14,"input",33),t.qZA()()(),t.TgZ(15,"button",34),t._uU(16," Search "),t.qZA()()),2&e){const i=t.oxw();t.Q6J("formGroup",i.form)}}function A(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Requisition Number"),t.qZA())}function w(e,o){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.RDREQ)}}function E(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Sequence"),t.qZA())}function G(e,o){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.RDSEQ)}}function W(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Item"),t.qZA())}function U(e,o){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.RQITEM)}}function x(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Quantity"),t.qZA())}function y(e,o){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.RQQTY)}}function O(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Stock Room"),t.qZA())}function b(e,o){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.RQROOM)}}function N(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1,"To Location"),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.RQLOCN)}}function Q(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Type"),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.RQRTYP)}}function P(e,o){1&e&&(t.TgZ(0,"th",35),t._uU(1,"Status"),t.qZA())}function I(e,o){if(1&e&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Oqu(i.RQSTAT)}}function v(e,o){1&e&&t._UZ(0,"th",37)}function S(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"td",36)(1,"div",38)(2,"button",39)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"ul",40)(6,"li")(7,"button",41),t.NdJ("click",function(){const J=t.CHM(i).$implicit,F=t.oxw();return t.KtG(F.stockinquirydetails(J))}),t.TgZ(8,"mat-icon",42),t._uU(9,"call_made"),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Stock Inquiry"),t.qZA()()()()()()}}function Y(e,o){1&e&&t._UZ(0,"tr",43)}function k(e,o){1&e&&t._UZ(0,"tr",44)}const L=function(){return[6,12,18]};let K=(()=>{class e{constructor(i,a,s){this.fb=i,this.matDialog=a,this.router=s,this.displayedColumns=["RequisitionNumber","Sequence","Item","Quantity","StockRoom","ToLocation","Type","Status","Actions"],this.user=localStorage.getItem("userName"),this.searchTextDisplay=!1,this.duplicateSource=[{RDREQ:"",RDSEQ:"",RQITEM:"",RQQTY:"",RQROOM:"",RQLOCN:"",RQRTYP:"",RQSTAT:"",RBGRP:149,RBUSER:"",RBADAT:"",Time:"",RBLOCN:"",P:"",RBSTAT:"EN",GroupNumber:148,UserID:"",AssignedTimestamp:"",StagingLocation:""}]}ngOnInit(){this.form=this.fb.group({RDGRP:149,Assigned:"1940-01-01-00.00.01.000000",To:""}),this.dataSource=new u.by(this.duplicateSource),this.dataSource.paginator=this.paginator}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}searchRequisitionGroupDetails(){this.searchTextDisplay=1!=this.searchTextDisplay}stockinquirydetails(i){this.router.navigateByUrl("/main-nav/item/stockinquiry")}onBack(){this.router.navigate(["/main-nav/requisitiongroups/read"])}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(l.qu),t.Y36(d.uw),t.Y36(f.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ww-requisition-groups-details"]],viewQuery:function(i,a){if(1&i&&t.Gf(m.NW,5),2&i){let s;t.iGM(s=t.CRH())&&(a.paginator=s.first)}},standalone:!0,features:[t.jDz],decls:44,vars:8,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"buttons"],["mat-button","","class","addButton",3,"click",4,"ngIf"],["mat-button","","class","addButton","matTooltip","search RequisitionGroupDetails",3,"click",4,"ngIf"],[1,"tally-serach-form"],["class","form over-Flow",3,"formGroup",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","RequisitionNumber"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Sequence"],["matColumnDef","Item"],["matColumnDef","Quantity"],["matColumnDef","StockRoom"],["matColumnDef","ToLocation"],["matColumnDef","Type"],["matColumnDef","Status"],["matColumnDef","Actions"],["mat-header-cell","","class","tally_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-button","",1,"addButton",3,"click"],["mat-button","","matTooltip","search RequisitionGroupDetails",1,"addButton",3,"click"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["matInput","","formControlName","RDGRP","readonly",""],["matInput","","formControlName","Assigned","readonly",""],["matInput","","formControlName","To","readonly",""],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"tally_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],["mat-header-row",""],["mat-row",""]],template:function(i,a){1&i&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return a.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Work With Requisition Group Details"),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,q,3,0,"button",4),t.YNc(9,C,3,0,"button",5),t.qZA()(),t.TgZ(10,"mat-card-content",6),t.YNc(11,Z,17,1,"form",7),t.qZA(),t.TgZ(12,"table",8),t.ynx(13,9),t.YNc(14,A,2,0,"th",10),t.YNc(15,w,2,1,"td",11),t.BQk(),t.ynx(16,12),t.YNc(17,E,2,0,"th",10),t.YNc(18,G,2,1,"td",11),t.BQk(),t.ynx(19,13),t.YNc(20,W,2,0,"th",10),t.YNc(21,U,2,1,"td",11),t.BQk(),t.ynx(22,14),t.YNc(23,x,2,0,"th",10),t.YNc(24,y,2,1,"td",11),t.BQk(),t.ynx(25,15),t.YNc(26,O,2,0,"th",10),t.YNc(27,b,2,1,"td",11),t.BQk(),t.ynx(28,16),t.YNc(29,N,2,0,"th",10),t.YNc(30,B,2,1,"td",11),t.BQk(),t.ynx(31,17),t.YNc(32,Q,2,0,"th",10),t.YNc(33,M,2,1,"td",11),t.BQk(),t.ynx(34,18),t.YNc(35,P,2,0,"th",10),t.YNc(36,I,2,1,"td",11),t.BQk(),t.ynx(37,19),t.YNc(38,v,1,0,"th",20),t.YNc(39,S,12,0,"td",11),t.BQk(),t.YNc(40,Y,1,0,"tr",21),t.YNc(41,k,1,0,"tr",22),t.qZA(),t._UZ(42,"mat-paginator",23,24),t.qZA()),2&i&&(t.xp6(8),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("ngIf",!a.searchTextDisplay),t.xp6(2),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(28),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(7,L)))},dependencies:[p.m,T.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,m.NW,D.Hw,R.lW,c.KE,c.hX,g.Nt,r.a8,r.dk,r.dn,r.n5,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,h.gM]}),e})()}}]);