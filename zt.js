export var d=document,
z=(e,n)=>{
  if(e.tagName)e=[e];
  if(typeof e=='string')e=d.querySelectorAll(e);
  return e=n==''?e[n]:e;
},
each=(e,it)=>{e=z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}},
h=e=>each(e,e=>e.style.display='none'),
s=e=>each(e,e=>e.style.display=''),
html=(e,html)=>html===undefined?z(e,0).innerHTML:z(e,0).innerHTML=html,
txt=(e,t)=>t===undefined?z(e,0).textContent:z(e,0).textContent=t,
v:(e,v)=>v===undefined?z(e,0).value:z(e,0).value=v,
c=e=>d.createElement(e),
a=(p,e)=>{z(p,0).appendChild(e);return p},
