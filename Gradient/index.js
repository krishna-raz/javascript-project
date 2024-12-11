const checkVovel=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count++;
            console.log(str[i]);
        }
    }
    return count;
}
// console.log(checkVovel("hello"));
const AllAlfabate = () => {
   let ans = "az";
   const a= ans.charCodeAt(0);
   const z= ans.charCodeAt(1);
   const string = [];

   for(let i=a;i<=z;i++){
    // console.log(String.fromCharCode(i));
string.push(String.fromCharCode(i));
   }
   return string;
}


console.log(AllAlfabate());







.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.buttons{
    display: flex;
    
}
.buttons button{
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 5px;
}
.code{
    width: 600px;
    height: 300px;
    border: 1px solid black;
    padding: 10px;
    overflow-y: scroll;
}