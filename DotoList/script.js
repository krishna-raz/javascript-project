// const input = document.querySelector("input");
// const add = document.querySelector(".add");
// const taskshow = document.querySelector(".taskshow");

// let myarray = [];

// Function to update tasks display
// const updateTasks = () => {
//     taskshow.innerHTML = ""; // Pehle purani list ko clear karo

//     myarray.forEach((element, i) => {
//         taskshow.innerHTML += `
//             <li>
//                 <span class="task">${i + 1}. ${element}</span>
//                 <button class="Delete" data-index="${i}">Delete</button>
//             </li>`;
//     });

//     // Tasks ko localStorage mein save karo
//     localStorage.setItem("myarray", JSON.stringify(myarray));
// };

// Function to load tasks from localStorage
// const loadTasks = () => {
//     if (localStorage.getItem("myarray") !== null) {
//         myarray = JSON.parse(localStorage.getItem("myarray"));
//         updateTasks();
//     }
// };

// Add new task
// const addData = () => {
//     if (input.value.trim() === "") {
//         alert("Please task daalo!");
//     } else {
//         myarray.push(input.value.trim());
//         input.value = ""; // Input field ko clear karo
//         updateTasks();
//     }
// };

// // Delete task based on index
// const deleteTask = (index) => {
//     myarray.splice(index, 1); // Jo task click kiya hai, usko delete karo
//     updateTasks();
// };

// Event listeners

// Add button click event
// add.addEventListener("click", addData);

// Task delete button click event - Event delegation ka use kiya
// taskshow.addEventListener("click", (event) => {
//     if (event.target.classList.contains("Delete")) {
//         const taskIndex = event.target.getAttribute("data-index");
//         deleteTask(taskIndex);
//     }
// });

// Page load par tasks ko load karo
// loadTasks();


//note :
// localStorage
// setItem : set the value , getItem : get the value, removeItem : remove the value, clear : clear the value, key : get the key




const input = document.querySelector("input");
const add = document.querySelector(".add");
const taskshow = document.querySelector(".taskshow");

let myarray = [];



const updateTasks = () => {

    taskshow.innerHTML = "";
    myarray.forEach((element, i) => {
        taskshow.innerHTML += `<li>
            <span class="task">${i + 1}. ${element}</span>
            <button class="Delete" data-index="${i}">Delete</button>
        </li>`;

    });

    localStorage.setItem("mydata", JSON.stringify(myarray))
    //    localStorage.setItem("mydata1",myarray)


}
//iska kam local data ko fach krna hota hai 
const loadTasks = () => {
    if (localStorage.getItem("mydata") !== null) {
        myarray = JSON.parse(localStorage.getItem("mydata"));
        updateTasks();
    }
};

// localdata();


const addData = () => {
    if (input.value == "") {
        alert("Plese Enter Data");
    }
    else {

        myarray.push(input.value);
        updateTasks();

    }
    input.value="";
}
add.addEventListener("click", addData);

//dinamicaly Delete Button come on page so
// 1. trage the Delete button 
// 2. used index button and remove data using removeitemn // Delete task based on index
const deleteTask = (index) => {
    // myarray.splice(index, 1); // Delete the clicked task
    localStorage.removeItem("mydata",index);

    // alert(index);
    // console.log(index);
    // updateTasks();
};

// indexDelete()
taskshow.addEventListener("click", (event) => {
    if (event.target.classList.contains("Delete")) {
        const taskIndex = parseInt(event.target.getAttribute("data-index"), 10);
        deleteTask(taskIndex);
    }
});


loadTasks();

