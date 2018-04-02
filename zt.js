function z(z){if(z.tagName){return [z]};return document.querySelectorAll(z);}
function each(e,it){e=z.z(e);for(var i=0;i<e.length;i++){it(e[i],i,e);}},
function h(e){z.each(e,function(e){e.style.display='none'});},
module.exports = {
  z:z,
  each:each,
  h:h,
};
