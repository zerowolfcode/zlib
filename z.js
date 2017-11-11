function z(id){
 if(window===this){return new z(id)}
 this.e=document.querySelectorAll(id);
 return this;
};
z.prototype={
 h:function(){
  for(var i=0;i<this.e.length;i++){
   this.e[i].style.display='none';
  }
  return this;
 },
 s:function(){
  for(var i=0;i<this.e.length;i++){
   this.e[i].style.display='';
  }
  return this;
 },
 c:function(e){return document.createElement(e)},
 a:function(e){this.e[0].appendChild(e)},
 html:function(html){
  if(!html){html=this.e[0].innerHTML};
  return this.e[0].innerHTML=html;
 },
 v:function(v){
  if(!v){v=this.e[0].value};
  return this.e[0].value=v;
 }
}
