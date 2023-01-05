// let string = "";
// let buttons = document.querySelectorAll('.button');
//  Array.from(buttons).forEach((button)=>{
//   // console.log("button", button)
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })

// var string = "";
// var row = document.getElementsByClassName('row');
var buttion = document.querySelectorAll('button');

for(var i = 0; i < buttion.length; i++){
  buttion[i].addEventListener('click', function(){
    
    // document.querySelector('input').value += this.innerHTML;
    if(this.innerHTML == '='){
    num = eval(document.querySelector('input').value)
   document.querySelector('input').value =num;
  }
  else if(this.innerHTML == 'C'){
    document.querySelector('input').value = "";
  }
  else 
  {
    document.querySelector('input').value += this.innerHTML;
  }
    
//  document.querySelector('input').value = document.querySelector('input').value + this.innerHTML


  })
}


