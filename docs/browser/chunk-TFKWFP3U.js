import{$ as a,A as h,J as b,Oa as T,P as s,Pa as F,Q as M,U as m,Z as v,_ as o,aa as p,fa as I,ga as P,ha as l,ia as c,ma as y,na as O,ta as C,v as x,w as f,xa as L,z as u}from"./chunk-TIWNVO6E.js";var S=class{constructor(){this.nombre="",this.imagen="#",this.estado=0}};var d={herramientas:[{nombre:"Angular",imagen:"./assets/image/technologies/angular.webp",estado:2},{nombre:"Laravel",imagen:"./assets/image/technologies/Laravel.png",estado:2},{nombre:"Vue Js",imagen:"./assets/image/technologies/vue.png",estado:2},{nombre:"PHP",imagen:"./assets/image/technologies/php.png",estado:2},{nombre:"JQuery",imagen:"./assets/image/technologies/JQuery.webp",estado:2},{nombre:"SQL Server",imagen:"./assets/image/technologies/SQLServer.webp",estado:2},{nombre:"MySQL",imagen:"./assets/image/technologies/mysql.png",estado:2},{nombre:"PostGreSql",imagen:"./assets/image/technologies/postgre.png",estado:2},{nombre:"Node JS",imagen:"./assets/image/technologies/nodejs.webp",estado:2},{nombre:"GoLand",imagen:"./assets/image/technologies/go.png",estado:2},{nombre:"Bulma CSS",imagen:"./assets/image/technologies/bulmacss.webp",estado:2},{nombre:"Tailwind CSS",imagen:"./assets/image/technologies/tailwind.png",estado:2},{nombre:"Visual Studio",imagen:"./assets/image/technologies/Visual-Studio.webp",estado:1},{nombre:"Visual Studio Code",imagen:"./assets/image/technologies/Visual-Studio-Code.webp",estado:2},{nombre:"Postman",imagen:"./assets/image/technologies/Postman.webp",estado:2},{nombre:"Firebase",imagen:"./assets/image/technologies/firebase.webp",estado:2},{nombre:"Github",imagen:"./assets/image/technologies/GitHub.webp",estado:2}]};var H=(()=>{let e=class e{constructor(){this.listaHerramientas=[],this.cargarHerramientas()}cargarHerramientas(){for(let n in d.herramientas){let i=new S;i.nombre=d.herramientas[n].nombre,i.imagen=d.herramientas[n].imagen,i.estado=d.herramientas[n].estado,this.listaHerramientas.push(i)}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function J(t,e){if(t&1&&(o(0,"div",3)(1,"figure",4),p(2,"img",5),a(),o(3,"h4",6),l(4),a()()),t&2){let r=e.$implicit;s(2),m("src",r.image,b)("alt",r.text),s(2),c(r.text)}}var E=(()=>{let e=class e{constructor(){this.carouselList=[]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-infinite-carousel"]],inputs:{carouselList:"carouselList"},decls:3,vars:1,consts:[[1,"slider"],[1,"slide-track"],["class","slide has-text-centered",4,"ngFor","ngForOf"],[1,"slide","has-text-centered"],[1,"icon","is-large"],[3,"src","alt"],[1,""]],template:function(i,g){i&1&&(o(0,"div",0)(1,"div",1),v(2,J,5,3,"div",2),a()()),i&2&&(s(2),m("ngForOf",g.carouselList))},dependencies:[C],styles:["@keyframes _ngcontent-%COMP%_scroll{0%{transform:translate(0)}to{transform:translate(-109.375rem)}}.slider[_ngcontent-%COMP%]{overflow:hidden;position:relative}.slider[_ngcontent-%COMP%]:before, .slider[_ngcontent-%COMP%]:after{position:absolute;width:12.5rem;z-index:2}.slider[_ngcontent-%COMP%]:after{right:0;top:0;transform:rotate(180deg)}.slider[_ngcontent-%COMP%]:before{left:0;top:0}.slider[_ngcontent-%COMP%]   .slide-track[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_scroll 40s linear infinite;display:flex;width:78.75rem}.slider[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]{height:6.25rem;width:15.625rem}"]});let t=e;return t})();function Q(t,e){if(t&1&&(o(0,"div",10)(1,"figure",11),p(2,"img",12),a(),o(3,"h4"),l(4),a()()),t&2){let r=e.$implicit;s(2),I("src",r.imagen,b),P("alt","Jhoan Zerpa - Ha utilizado ",r.nombre,""),s(2),c(r.nombre)}}var q=(()=>{let e=class e{constructor(n){this.serviceTool=n,this.listaHerramientas=[],this.carouselList=[],this.tipoListaDefault=-1,this.tipoLista=-1}ngOnInit(){this.listaHerramientas=this.serviceTool.listaHerramientas.filter(n=>n.estado==this.tipoListaDefault||n.estado==this.tipoLista),this.carouselList=this.listaHerramientas.map(n=>({image:n.imagen,text:n.nombre}))}};e.\u0275fac=function(i){return new(i||e)(M(H))},e.\u0275cmp=u({type:e,selectors:[["app-tools-languages"]],inputs:{tipoListaDefault:"tipoListaDefault",tipoLista:"tipoLista"},decls:14,vars:8,consts:[[1,"is-medium","mt-6"],[1,"container"],[1,"title-wrapper","has-text-centered"],[1,"title","is-2","has-text-white"],[1,"subtitle","is-muted"],[1,"content-wrapper","mt-6","is-hidden-touch"],[1,"row","columns","is-centered","is-multiline","has-text-centered"],["class","column is-3",4,"ngFor","ngForOf"],[1,"mt-6","is-hidden-desktop"],[3,"carouselList"],[1,"column","is-3"],[1,"icon","is-large"],[3,"src","alt"]],template:function(i,g){i&1&&(o(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),l(4),y(5,"translate"),a(),o(6,"h3",4),l(7),y(8,"translate"),a()(),o(9,"div",5)(10,"div",6),v(11,Q,5,3,"div",7),a()(),o(12,"div",8),p(13,"app-infinite-carousel",9),a()()()),i&2&&(s(4),c(O(5,4,"TITULO_TOOLS")),s(3),c(O(8,6,"SUBTITULO_TOOLS")),s(4),m("ngForOf",g.listaHerramientas),s(2),m("carouselList",g.carouselList))},dependencies:[C,E,T]});let t=e;return t})();var j=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[L]});let t=e;return t})();var ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=h({type:e}),e.\u0275inj=f({imports:[L,F,j]});let t=e;return t})();export{q as a,ie as b};
