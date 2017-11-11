var z=(function(z){
 z.z=function(z){
  if(z.tagName){return [z]};
  return document.querySelectorAll(z);
 };
 return z;
}(z||{}));
var z=(function(z){
 var i=0;
 z.html=function(e,html){
  e=z.z(e)[0];
  if(!html){html=e.innerHTML}
  return e.innerHTML=html;
 };
 z.v=function(e,v){
  e=z.z(e)[0];
  if(!v){v=e.value}
  return e.value=v;
 };
 z.c=function(e){return document.createElement(e)};
 z.a=function(p,e){z.z(p)[0].appendChild(e)};
 return z;
}(z||{}));
