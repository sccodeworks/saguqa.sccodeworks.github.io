"use strict";(self.webpackChunksc_codeworks_app=self.webpackChunksc_codeworks_app||[]).push([[2997],{92997:(G,h,l)=>{l.r(h),l.d(h,{RecordSupplyComponent:()=>X});var _=l(35226),c=l.n(_),g=l(98739),s=l(7155),Z=l(70879),d=l(65412),t=l(94650),i=l(24006),y=l(15627),T=l(19132),v=l(36895),b=l(97392),S=l(4859),p=l(59549),C=l(44144),u=l(73546);function A(a,o){1&a&&(t.TgZ(0,"div")(1,"mat-form-field",8)(2,"mat-label"),t._uU(3,"Tracking Number:"),t.qZA(),t._UZ(4,"input",22),t.qZA(),t.TgZ(5,"mat-form-field",8)(6,"mat-label"),t._uU(7,"Location:"),t.qZA(),t._UZ(8,"input",23),t.qZA()())}function R(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.TallyUpdate())}),t.TgZ(1,"span"),t._uU(2,"Update"),t.qZA()()}}function U(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.TallyCreate())}),t.TgZ(1,"span"),t._uU(2,"Add"),t.qZA()()}}let N=(()=>{class a{constructor(e,n,r,m,f){this.fb=e,this.dialogRef=n,this.iheaderSvc=r,this.anyvariable=m,this.router=f,this.user=localStorage.getItem("userName"),this.update=!1,this.enable=!1}ngOnInit(){console.log(this.anyvariable),this.form=this.fb.group({docNumber:"I\xa0\xa0"+this.anyvariable[0].IHTALY,Coverage:"S",Storer:this.anyvariable[0].IHSTOR,Consignee:this.anyvariable[0].IHCONS,Carrier:this.anyvariable[0].IHCARR,Pool:this.anyvariable[1].RSPOOL,Type:this.anyvariable[1].RSTYPE,In:this.anyvariable[1].RSRQTY,Out:this.anyvariable[1].RSUQTY,Reject:this.anyvariable[1].RSXQTY,TrackingNumber:"",Location:"",Net:this.anyvariable[1].RSQTY}),this.enable=0!=this.anyvariable[1].RSRQTY||0!=this.anyvariable[1].RSUQTY||0!=this.anyvariable[1].RSXQTY}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}TallyUpdate(){var e=this.form.value;this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.iheaderSvc.UpdateTallyPosting(this.anyvariable[0].IHTALY,this.anyvariable[1].RSTRAN,this.anyvariable[1].RSTYPE,e.In,e.Out,e.Reject,e.TrackingNumber,e.Location).subscribe(n=>{this.result=n;const r=this.result[0].data[this.result[0].data.length-1].value;"Pass Tracking no and Location"===r?this.update=!0:(this.successMessage(r),this.closeDialog(),this.router.navigateByUrl("/main-nav/tallys/recordsupply",{state:this.anyvariable[0]}))})}TallyCreate(){var e=this.form.value;this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.iheaderSvc.CreateTallyPosting(this.anyvariable[0].IHTALY,this.anyvariable[1].RSTRAN,this.anyvariable[1].RSTYPE,e.In,e.Out,e.Reject,e.TrackingNumber,e.Location).subscribe(n=>{this.result=n;const r=this.result[0].data[this.result[0].data.length-1].value;"Pass Tracking no and Location"===r?this.update=!0:(this.successMessage(r),this.closeDialog(),this.router.navigateByUrl("/main-nav/tallys/recordsupply",{state:this.anyvariable[0]}))})}successMessage(e){c().fire(e,"","success")}failureMessage(e){c().fire(e,"","error")}closeDialog(){this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(i.qu),t.Y36(d.so),t.Y36(y.X),t.Y36(d.WI),t.Y36(T.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-update-record-supply"]],standalone:!0,features:[t.jDz],decls:59,vars:4,consts:[[1,"over-Flow"],[1,"main-header-title"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","primary"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","docNumber"],["readonly","","matInput","","formControlName","Coverage"],["readonly","","matInput","","formControlName","Storer"],["readonly","","matInput","","formControlName","Consignee"],["readonly","","matInput","","formControlName","Carrier"],["readonly","","matInput","","formControlName","Pool"],["readonly","","matInput","","formControlName","Type"],["required","","matInput","","formControlName","In"],["required","","matInput","","formControlName","Out"],["required","","matInput","","formControlName","Reject"],["readonly","","matInput","","formControlName","Net"],[4,"ngIf"],["class","buttons addButton","mat-raised-button","",3,"click",4,"ngIf"],["required","","matInput","","formControlName","TrackingNumber"],["required","","matInput","","formControlName","Location"],["mat-raised-button","",1,"buttons","addButton",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Record Supply Usage"),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return n.closeDialog()}),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"mat-card-content",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label"),t._uU(14,"Document:"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"mat-form-field",8)(17,"mat-label"),t._uU(18,"Coverage:"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Storer:"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"mat-form-field",8)(25,"mat-label"),t._uU(26,"Consignee:"),t.qZA(),t._UZ(27,"input",12),t.qZA(),t.TgZ(28,"mat-form-field",8)(29,"mat-label"),t._uU(30,"Carrier:"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"mat-form-field",8)(33,"mat-label"),t._uU(34,"Pool:"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"mat-form-field",8)(37,"mat-label"),t._uU(38,"Type:"),t.qZA(),t._UZ(39,"input",15),t.qZA(),t.TgZ(40,"mat-form-field",8)(41,"mat-label"),t._uU(42,"In:"),t.qZA(),t._UZ(43,"input",16),t.qZA(),t.TgZ(44,"mat-form-field",8)(45,"mat-label"),t._uU(46,"Out:"),t.qZA(),t._UZ(47,"input",17),t.qZA(),t.TgZ(48,"mat-form-field",8)(49,"mat-label"),t._uU(50,"Reject:"),t.qZA(),t._UZ(51,"input",18),t.qZA(),t.TgZ(52,"mat-form-field",8)(53,"mat-label"),t._uU(54,"Net:"),t.qZA(),t._UZ(55,"input",19),t.qZA(),t.YNc(56,A,9,0,"div",20),t.qZA()(),t.YNc(57,R,3,0,"button",21),t.YNc(58,U,3,0,"button",21),t.qZA()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.form),t.xp6(47),t.Q6J("ngIf",n.update),t.xp6(1),t.Q6J("ngIf",n.enable),t.xp6(1),t.Q6J("ngIf",!n.enable))},dependencies:[Z.m,v.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,b.Hw,S.lW,p.KE,p.hX,C.Nt,u.a8,u.dk,u.dn,u.n5]}),a})();function q(a,o){1&a&&(t.TgZ(0,"th",28),t._uU(1,"Pool"),t.qZA())}function Y(a,o){if(1&a&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",e.RSPOOL," ")}}function I(a,o){1&a&&(t.TgZ(0,"th",28),t._uU(1,"Type"),t.qZA())}function x(a,o){if(1&a&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",e.RSTYPE," ")}}function O(a,o){1&a&&(t.TgZ(0,"th",28),t._uU(1,"In"),t.qZA())}function D(a,o){if(1&a&&(t.TgZ(0,"td",29),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",e.RSRQTY," ")}}function Q(a,o){1&a&&(t.TgZ(0,"th",28),t._uU(1,"Out"),t.qZA())}function w(a,o){if(1&a&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",e.RSUQTY," ")}}function k(a,o){1&a&&(t.TgZ(0,"th",28),t._uU(1,"Reject"),t.qZA())}function H(a,o){if(1&a&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",e.RSXQTY," ")}}function J(a,o){1&a&&(t.TgZ(0,"th",28),t._uU(1,"Net"),t.qZA())}function B(a,o){if(1&a&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",e.RSQTY," ")}}function j(a,o){1&a&&(t.TgZ(0,"th",28),t._uU(1," Actions"),t.qZA())}function L(a,o){1&a&&(t.TgZ(0,"td",30)(1,"div",31)(2,"button",32)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t._UZ(5,"ul",33),t.qZA()())}function F(a,o){1&a&&t._UZ(0,"tr",34)}function P(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"tr",35),t.NdJ("click",function(){const m=t.CHM(e).$implicit,f=t.oxw();return t.KtG(f.rowClick(m))}),t.qZA()}}const M=function(){return[8,16,24]};let X=(()=>{class a{constructor(e,n,r,m){this.fb=e,this.iheaderSvc=n,this.matDialog=r,this.router=m,this.displayedColumns=["Pool","Type","In","Out","Reject","Net","Actions"],this.dataSource=[],this.duplicateSource=[],this.update=!1,this.type=[],this.user=localStorage.getItem("userName")}ngOnInit(){this.element=history.state,console.log(this.element),this.form=this.fb.group({docNumber:"O\xa0\xa0"+this.element.OHBILL,Coverage:"S",Storer:this.element.OHSTOR,Consignee:this.element.OHCONS,Carrier:this.element.OHCAR}),this.getAll2Subscription&&this.getAll2Subscription.unsubscribe(),this.getAll2Subscription=this.iheaderSvc.getSupplyUsage(this.user,"O",this.element.OHBILL,this.element.OHSTOR,this.element.OHSSFX,this.element.OHCONS,this.element.OHCAR).subscribe(e=>{var r=JSON.parse(e[0].data[1].value);this.duplicateSource=r.returnedData,this.dataSource=new s.by(this.duplicateSource),this.dataSource.paginator=this.paginator})}ngOnDestroy(){this.getAll2Subscription&&this.getAll2Subscription.unsubscribe()}onBack(){this.router.navigate(["/main-nav/orders/read"])}rowClick(e){this.selectedRow=e}RecordUsageSupplyUpdate(){this.matDialog.open(N,{width:"5000px",maxHeight:"90vh",data:[this.element,this.selectedRow],autoFocus:!1})}successMessage(e){c().fire(e,"","success")}failureMessage(e){c().fire(e,"","error")}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(i.qu),t.Y36(y.X),t.Y36(d.uw),t.Y36(T.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-record-supply"]],viewQuery:function(e,n){if(1&e&&t.Gf(g.NW,5),2&e){let r;t.iGM(r=t.CRH())&&(n.paginator=r.first)}},standalone:!0,features:[t.jDz],decls:57,vars:6,consts:[[1,"over-Flow"],[1,"title"],["mat-button","",1,"backButton","go-back-btn",3,"click"],[1,"tally-serach-form"],[1,"form","over-Flow",3,"formGroup"],[1,"row"],[1,"col"],["appearance","outline",1,"full-width"],["readonly","","matInput","","formControlName","docNumber"],["readonly","","matInput","","formControlName","Coverage"],["readonly","","matInput","","formControlName","Storer"],["readonly","","matInput","","formControlName","Consignee"],["readonly","","matInput","","formControlName","Carrier"],["mat-table","",1,"mat-elevation-z8","tally-table",3,"dataSource"],["matColumnDef","Pool"],["mat-header-cell","","mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","uppercase-text",4,"matCellDef"],["matColumnDef","Type"],["mat-cell","",4,"matCellDef"],["matColumnDef","In"],["matColumnDef","Out"],["matColumnDef","Reject"],["matColumnDef","Net"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"tally-table-pagination",3,"pageSizeOptions"],["paginator",""],["mat-header-cell","","mat-header-cell",""],["mat-cell","",1,"uppercase-text"],["mat-cell",""],[1,"dropdown","more_options_btn"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1)(3,"button",2),t.NdJ("click",function(){return n.onBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"navigate_before "),t.qZA()(),t._uU(6,"Record Supply Usage "),t.qZA()(),t.TgZ(7,"mat-card-content",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"Document:"),t.qZA(),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"mat-form-field",7)(16,"mat-label"),t._uU(17,"Coverage:"),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"mat-form-field",7)(20,"mat-label"),t._uU(21,"Storer:"),t.qZA(),t._UZ(22,"input",10),t.qZA(),t.TgZ(23,"mat-form-field",7)(24,"mat-label"),t._uU(25,"Consignee:"),t.qZA(),t._UZ(26,"input",11),t.qZA(),t.TgZ(27,"mat-form-field",7)(28,"mat-label"),t._uU(29,"Carrier:"),t.qZA(),t._UZ(30,"input",12),t.qZA()()()()(),t.TgZ(31,"table",13),t.ynx(32,14),t.YNc(33,q,2,0,"th",15),t.YNc(34,Y,2,1,"td",16),t.BQk(),t.ynx(35,17),t.YNc(36,I,2,0,"th",15),t.YNc(37,x,2,1,"td",18),t.BQk(),t.ynx(38,19),t.YNc(39,O,2,0,"th",15),t.YNc(40,D,2,1,"td",16),t.BQk(),t.ynx(41,20),t.YNc(42,Q,2,0,"th",15),t.YNc(43,w,2,1,"td",18),t.BQk(),t.ynx(44,21),t.YNc(45,k,2,0,"th",15),t.YNc(46,H,2,1,"td",18),t.BQk(),t.ynx(47,22),t.YNc(48,J,2,0,"th",15),t.YNc(49,B,2,1,"td",18),t.BQk(),t.ynx(50,23),t.YNc(51,j,2,0,"th",15),t.YNc(52,L,6,0,"td",18),t.BQk(),t.YNc(53,F,1,0,"tr",24),t.YNc(54,P,1,0,"tr",25),t.qZA(),t._UZ(55,"mat-paginator",26,27),t.qZA()),2&e&&(t.xp6(8),t.Q6J("formGroup",n.form),t.xp6(23),t.Q6J("dataSource",n.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,M)))},dependencies:[Z.m,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g.NW,b.Hw,S.lW,p.KE,p.hX,C.Nt,u.a8,u.dk,u.dn,u.n5,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk]}),a})()}}]);