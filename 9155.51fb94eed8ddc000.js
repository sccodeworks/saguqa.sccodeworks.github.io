"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[9155],{89155:(nt,d,i)=>{i.r(d),i.d(d,{LedgerCodesTransactionsComponent:()=>et});var l=i(7155),C=i(70879),t=i(94650),u=i(19132),h=i(65412),r=i(24006),p=i(36895),f=i(98739),D=i(97392),g=i(28255),A=i(4859),T=i(59549),Z=i(44144),c=i(73546),L=i(10266),E=i(90455);const x=["paginator"];function U(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"span",36),t.NdJ("click",function(s){return s.stopPropagation()}),t.TgZ(1,"mat-slide-toggle",37),t.NdJ("ngModelChange",function(s){const m=t.CHM(n).$implicit;return t.KtG(m.isActive=s)})("change",function(){const _=t.CHM(n).$implicit,m=t.oxw();return t.KtG(m.toggleColumn(_))}),t._uU(2),t.qZA(),t._UZ(3,"br"),t.qZA()}if(2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngModel",n.isActive),t.xp6(1),t.hij(" ",n.name," ")}}function M(e,o){1&e&&(t.TgZ(0,"button",38),t._uU(1," Search "),t.qZA())}function N(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Status"),t.qZA())}function v(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.ADSTAT)}}function y(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Invoice Number"),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.ADINV)}}function S(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Sequence Number"),t.qZA())}function O(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.ADSEQ," ")}}function b(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Building"),t.qZA())}function P(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.ADBLDG," ")}}function R(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1," Bill-To Customer "),t.qZA())}function Y(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.CSDSC," ")}}function I(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Invoice Date"),t.qZA())}function q(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.ADDATE," ")}}function Q(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1," Transaction Date "),t.qZA())}function w(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.ADTDAT," ")}}function H(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Amount"),t.qZA())}function K(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.ADMT," ")}}function W(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Transaction Type"),t.qZA())}function k(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.AHTRNC," ")}}function J(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1," Reference Number "),t.qZA())}function F(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.AHREF," ")}}function $(e,o){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Description"),t.qZA())}function j(e,o){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.AHDESC," ")}}function G(e,o){1&e&&t._UZ(0,"th",41)}function z(e,o){1&e&&(t.TgZ(0,"td",40)(1,"div",42)(2,"button",43)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t._UZ(5,"ul",44),t.qZA()())}function V(e,o){1&e&&t._UZ(0,"tr",45)}function X(e,o){1&e&&t._UZ(0,"tr",46)}const tt=function(){return[8,16,24]};let et=(()=>{class e{constructor(n,a,s,_){this.activeRouter=n,this.router=a,this.matDialog=s,this.fb=_,this.displayedColumns=["Status","InvoiceNumber","SeqNo","Bld","BillToCustomer","InvoiceDate","TransDate","Amount","Actions"],this.searchTextDisplay=!1,this.form=this.fb.group({SELEC:"",LGDSC:""}),this.dataSource=[],this.duplicateSource=[{ADSTAT:"EN",ADINV:"110",ADSEQ:"10023",ADBLDG:13,CSDSC:" 0181 Lanxess Corp ",ADDATE:"",ADTDAT:"",ADMT:"",AHTRNC:"",AHREF:"",AHDESC:""}],this.columnShowHideList=[],this.user=localStorage.getItem("userName")}ngOnInit(){this.initializeColumnProperties(),this.editedRows=[],this.dataSource=new l.by(this.duplicateSource),this.dataSource.paginator=this.paginator}toggleColumn(n){if(n.isActive)n.position>this.displayedColumns.length-1?this.displayedColumns.push(n.name):this.displayedColumns.splice(n.position,0,n.name);else{let a=this.displayedColumns.indexOf(n.name);a>-1&&this.displayedColumns.splice(a,1)}}initializeColumnProperties(){this.displayedColumns.forEach((n,a)=>{"Actions"!=n&&this.columnShowHideList.push({position:a,name:n,isActive:!0})}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"TrnType",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"ReferenceNo",isActive:!1}),this.columnShowHideList.push({position:this.columnShowHideList.length,name:"Description",isActive:!1})}searchRecDetails(){this.searchTextDisplay=1!=this.searchTextDisplay}closeDialog(){}onBack(){this.router.navigate(["/main-nav/receivables/read"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.gz),t.Y36(u.F0),t.Y36(h.uw),t.Y36(r.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ledger-codes-transactions"]],viewQuery:function(n,a){if(1&n&&t.Gf(x,5),2&n){let s;t.iGM(s=t.CRH())&&(a.paginator=s.first)}},standalone:!0,features:[t.jDz],decls:69,vars:9,consts:[[1,"over-Flow"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"button"],["mainMenuButton","matMenu"],[3,"click",4,"ngFor","ngForOf"],["mat-button","","matTooltip","Hide/Show Columns",1,"mat-focus-indicator","addButton","mat-button","mat-button-base","tally-toltip-btn",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width2"],["readonly","","matInput","","formControlName","SELEC"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","LGDSC"],["class","buttons addButton tally-search-btn","mat-raised-button","","type","submit","placeholder","Search",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Status"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","InvoiceNumber"],["matColumnDef","SeqNo"],["matColumnDef","Bld"],["matColumnDef","BillToCustomer"],["matColumnDef","InvoiceDate"],["matColumnDef","TransDate"],["matColumnDef","Amount"],["matColumnDef","TrnType"],["matColumnDef","ReferenceNo"],["matColumnDef","Description"],["matColumnDef","Actions"],["mat-header-cell","","class","pending_actions_sec",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],[3,"click"],[2,"color","blue",3,"ngModel","ngModelChange","change"],["mat-raised-button","","type","submit","placeholder","Search",1,"buttons","addButton","tally-search-btn"],["mat-header-cell","","mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"pending_actions_sec"],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-header-row",""],["mat-row",""]],template:function(n,a){if(1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title")(3,"button",1),t.NdJ("click",function(){return a.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6," Work With Receivable Details "),t.qZA(),t.TgZ(7,"div",2)(8,"mat-menu",null,3),t.YNc(10,U,4,2,"span",4),t.qZA(),t.TgZ(11,"button",5,6)(13,"mat-icon"),t._uU(14,"visibility_off"),t.qZA()()()(),t.TgZ(15,"mat-card-content",7)(16,"form",8)(17,"div",9)(18,"div",10)(19,"mat-form-field",11)(20,"mat-label"),t._uU(21,"Selections"),t.qZA(),t._UZ(22,"input",12),t.qZA(),t.TgZ(23,"mat-form-field",13)(24,"mat-label"),t._uU(25,"Ledger"),t.qZA(),t._UZ(26,"input",14),t.qZA()()(),t.YNc(27,M,2,0,"button",15),t.qZA()(),t.TgZ(28,"table",16),t.ynx(29,17),t.YNc(30,N,2,0,"th",18),t.YNc(31,v,2,1,"td",19),t.BQk(),t.ynx(32,20),t.YNc(33,y,2,0,"th",18),t.YNc(34,B,2,1,"td",19),t.BQk(),t.ynx(35,21),t.YNc(36,S,2,0,"th",18),t.YNc(37,O,2,1,"td",19),t.BQk(),t.ynx(38,22),t.YNc(39,b,2,0,"th",18),t.YNc(40,P,2,1,"td",19),t.BQk(),t.ynx(41,23),t.YNc(42,R,2,0,"th",18),t.YNc(43,Y,2,1,"td",19),t.BQk(),t.ynx(44,24),t.YNc(45,I,2,0,"th",18),t.YNc(46,q,2,1,"td",19),t.BQk(),t.ynx(47,25),t.YNc(48,Q,2,0,"th",18),t.YNc(49,w,2,1,"td",19),t.BQk(),t.ynx(50,26),t.YNc(51,H,2,0,"th",18),t.YNc(52,K,2,1,"td",19),t.BQk(),t.ynx(53,27),t.YNc(54,W,2,0,"th",18),t.YNc(55,k,2,1,"td",19),t.BQk(),t.ynx(56,28),t.YNc(57,J,2,0,"th",18),t.YNc(58,F,2,1,"td",19),t.BQk(),t.ynx(59,29),t.YNc(60,$,2,0,"th",18),t.YNc(61,j,2,1,"td",19),t.BQk(),t.ynx(62,30),t.YNc(63,G,1,0,"th",31),t.YNc(64,z,6,0,"td",19),t.BQk(),t.YNc(65,V,1,0,"tr",32),t.YNc(66,X,1,0,"tr",33),t.qZA(),t._UZ(67,"mat-paginator",34,35),t.qZA()),2&n){const s=t.MAs(9);t.xp6(10),t.Q6J("ngForOf",a.columnShowHideList),t.xp6(1),t.Q6J("matMenuTriggerFor",s),t.xp6(5),t.Q6J("formGroup",a.form),t.xp6(11),t.Q6J("ngIf",a.searchTextDisplay),t.xp6(1),t.Q6J("dataSource",a.dataSource),t.xp6(37),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(8,tt))}},dependencies:[C.m,p.sg,p.O5,r._Y,r.Fj,r.JJ,r.JL,r.On,r.sg,r.u,f.NW,D.Hw,g.VK,g.p6,A.lW,T.KE,T.hX,Z.Nt,c.a8,c.dk,c.dn,c.n5,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,L.gM,E.Rr]}),e})()}}]);