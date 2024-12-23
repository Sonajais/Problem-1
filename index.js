let name="Amolya Sharma";
let count=0;
for (let i=0; i<name.length,i++)(
  let(char=name[i].toLowerCase();
  if(char.match(/[a-z]){
                if(count[char]){
                count[char]++;
  }
else{
  count[char]=1;
}
}
}
for(let char in count){
  console.log('$(char):$(count[char]}');
}
                
