// function abc(){
//     console.log(abc.xyz);
// }
// abc();
// abc.xyz = 10;
// abc.xyz = 20;
// abc();

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// number[100]=500;
// console.log(number);
// console.log(typeof typeof 100);
// const arry=[..."krishna"]
// // console.log(arry);

// console.log(typeof parseInt("M7F"))
// console.log(parseInt("7FM"))
// console.log(parseInt("M7F"))

//flind the longest words

// console.log(longestWord("The quick brown fox book over the lazy dog"));

// function longestWord(str){
//     const words=str.split(" ");
//     let wordsmaxlenth=0;
//     let wordsname=" ";
//     for(let word of words){
//         if(wordsmaxlenth<word.length){
//             wordsmaxlenth=word.length;
//             wordsname=word;

//         }

        
//     }
//     return wordsname;
// return words.reduce((privesval,currval)=> privesval.length>currval.length?privesval:currval)


    
// }


// const generatHash=(str)=>{
//   let word= str.trim(" ");
//   console.log(word)
// }
// console.log(generatHash("my name krishna is  raj"))

const countChar=(word, char)=>{
  var count= 0;
  word=word.toLowerCase();
  char=char.toLowerCase();
  for(let words of word){
    if(char==words){
      count++;
    }
  }
  return count;
}
// console.log(countChar("krisIhniiiiiiiiiai" ,"i"));

const shortasand=(str)=>{
  return str.sort((a,b)=>a-b);
}
// console.log(shortasand([1,2,5,8,10,3,0]));

const factorial=(str)=>{
  if (str === 0 || str === 1) {
    return 1;
  }
 return  factorial(str-1) *str
}
console.log(factorial(5));