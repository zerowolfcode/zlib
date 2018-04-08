var z={
d:document,
z:(e,n)=>{
  if(e.tagName)e=[e];
  if(typeof e=='string')e=z.d.querySelectorAll(e);
  return e=n==''?e[n]:e;
},
each:(e,it)=>{e=z.z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}},
h:e=>z.each(e,e=>e.style.display='none'),
s:e=>z.each(e,e=>e.style.display=''),
html:(e,html)=>html===undefined?z.z(e,0).innerHTML:z.z(e,0).innerHTML=html,
txt:(e,t)=>t===undefined?z.z(e,0).textContent:z.z(e,0).textContent=t,
v:(e,v)=>v===undefined?z.z(e,0).value:z.z(e,0).value=v,
c:e=>z.d.createElement(e),
a:(p,e)=>{z.z(p,0).appendChild(e);return p},
clk:(e,f)=>z.z(e,0).onclick=f
};
