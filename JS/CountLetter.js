function cnt(str)
{
    var letter ="aeiou";
    console.log(letter.split(""));
    var vc = 0;
    for(var i in [...str]){
        if(letter.indexOf(str[i]!==-1)){
          vc +=1;  
        }
    }
    return vc;
}
str="Betty brought some butter";
console.log(cnt(str));