function z(id){
 var about = {
  Version: 0.1,
  Author: 'ZWC',
  Updated: '20171108'
 };
 if(id){
  if(window === this){
   return new z(id);
  }
  this.e=document.querySelectorAll(id);
  return this;
 }else{
 return about;
 }
};
z.prototype = {
 h: function(){
  for(var i=0;i<this.e.length;i++){
   this.e[i].style.display = 'none';
  }
  return this;
 },
 s: function(){
  this.e.style.display = 'inherit';
  return this;
 }
}
