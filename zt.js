export function z(z){if(z.tagName){return [z]};return document.querySelectorAll(z);}
export function each(e,it){e=z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}}
export function h(e){each(e,function(e){e.style.display='none'});}
