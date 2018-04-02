var z=function(z){if(z.tagName){return [z]};return document.querySelectorAll(z);},
each=function(e,it){e=z.z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}},
h=function(e){z.each(e,function(e){e.style.display='none'});},
s=function(e){z.each(e,function(e){e.style.display=''});},
html=function(e,html){
  e=z.z(e)[0];
  if(!html){return e.innerHTML}
  return e.innerHTML=html;
};
export {z,each,h,s,html};
/*
 z.txt=function(e,t){
  e=z.z(e)[0];
  if(!t){return e.textContent}
  return e.textContent=t;
 };
 z.v=function(e,v){
  e=z.z(e)[0];
  if(!v){return e.value}
  return e.value=v;
 };
 z.c=function(e){return document.createElement(e)};
 z.a=function(p,e){z.z(p)[0].appendChild(e);return p};
 z.child=function(e,c){
  e=z.z(e)[0];
  if(Array.isArray(c)){
   e=e.children[c[0]];
   var i=1;
   while(i<c.length){e=e.children[c[i++]];};
  }else{e=e.children[c]}
  return e;
 };
 return z;
 */
