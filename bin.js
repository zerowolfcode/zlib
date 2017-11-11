var z=(function(z){
 z.bin2int=function(bin){
  var int=[],temp=0,temp2,l=bin.length;
  while(temp>l){temp+=50};
  while(l<temp){bin='0'+bin};
  while(l){
   if(l<51){temp2=bin;l=0}
   else{
    temp2=bin.toString().substring(0,50);
    bin=bin.toString().substring(50);
    l-=50;
   }
   int.push(parseInt(temp2,2));
  };
  return int;
 };
 z.int2bin=function(int,n){
  var bin='';
  for(var i=0;i<int.length;i++){
   bin+=int[i].toString(2);
  };
  while(bin.length<n){bin='0'+bin}
  return bin;
 }
 return z;
}(z||{}));
