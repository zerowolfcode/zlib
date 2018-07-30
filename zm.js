export var z=(z)=>{if(z.tagName){return [z]}return document.querySelectorAll(z)},
each=(e,it)=>{e=z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}},
h=(e)=>{each(e,function(e){e.style.display='none'})},
s=(e)=>{each(e,function(e){e.style.display=''})},
html=(e,html)=>{
  e=z(e)[0];
  if(!html){return e.innerHTML}
  return e.innerHTML=html;
 },
txt=(e,t)=>{
  e=z(e)[0];
  if(!t){return e.textContent}
  return e.textContent=t;
},
v=(e,v)=>{
  e=z(e)[0];
  if(!v){return e.value}
  return e.value=v;
},
c=(e)=>document.createElement(e),
a=(p,e)=>{z(p)[0].appendChild(e);return p};
