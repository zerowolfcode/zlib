var z=(function(z){
 z.z=function(z){
  if(z.tagName){return [z]};
  return document.querySelectorAll(z);
 };
 return z;
}(z||{}));
var z=(function(z){
 z.h=function(e){e=z.z(e);for(var i=0;i<e.length;i++){e[i].style.display='none'}};
 z.s=function(e){e=z.z(e);for(var i=0;i<e.length;i++){e[i].style.display=''}};
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
