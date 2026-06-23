document.getElementById("offer").addEventListener("click", function(e)
{
    alert("Today is The 30% disccount in spical Buger")
})
function OderItem(item){
    alert(`your ${item} has been recived `)
}

document.querySelector(".form-continer").addEventListener("submit", function(e1) {
     
    e1.preventDefault()

    document.getElementById("sucees").innerHTML = "Your form submitted successfully"
    this.reset()
})
document.getElementById("offer").addEventListener("click", function () {
    alert("Today is the 30% discount on Special Burger");
});

// function OderItem(item) {
//     if (item) {
//         alert(`Your ${item} has been received`);
//     } else {
//         alert("Please select an item");
//     }
// }

// document.querySelector(".form-continer").addEventListener("submit", function (e1) {

//     e1.preventDefault();

//     let name = document.getElementById("name").value.trim();

//     if (name === "") {
//         document.getElementById("sucees").innerHTML =
//             "Please enter your name";
//     } else {
//         document.getElementById("sucees").innerHTML =
//             "Your form submitted successfully";
//         this.reset();
//     }
// });