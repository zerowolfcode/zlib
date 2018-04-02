/*
function z(z){if(z.tagName){return [z]};return document.querySelectorAll(z);}
function each(e,it){e=z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}}
function h(e){each(e,function(e){e.style.display='none'});}
*/
var z=function(z){if(z.tagName){return [z]};return document.querySelectorAll(z);},
each=function(e,it){e=z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}},
h=function(e){each(e,function(e){e.style.display='none'});};
export {z,each,h}
/*
export function z(z){if(z.tagName){return [z]};return document.querySelectorAll(z);}
export function each(e,it){e=z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}}
export function h(e){each(e,function(e){e.style.display='none'});}
*/
