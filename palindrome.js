let holder=[];
let word ="here ereh";
let rword="";
console.log(word.length)
let size = word.length
for (i=0;i<size;i++){
    holder.push(word[i]);
}
console.log(holder);

for (i=0;i<size;i++){
    rword += holder.pop()
}
console.log(rword)
console.log(rword)

if (rword===word){
    console.log("the word is a palindrome")
}
else{
    console.log("the word is not a palindrome.")
}