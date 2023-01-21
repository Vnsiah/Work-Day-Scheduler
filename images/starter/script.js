// We want an array of timeblocks
// each timeblock will be an object
// with the shape of 
// {
//      hour: 9,
//      description: "event data"
// }

// Loop over the array of timeblocks
// and create html using jQuery
// for(let i = 0; i < timeblocks.length; i++) {
    // use jQuery to create a block of html that looks like the following:
    //
 
//
//  }

let timeblocks = [{hour:12,description:"I have a meeting"}, {hour:13,description:""},{hour:14,description:""},{hour:15,description:""},{hour:16,description:""},{hour:17,description:""}];

var currentDate = moment().format("dddd, MMMM Do YYYY");
// console.log(currentDate);
$("#currentDay").text(currentDate);
var currentTime = moment().format("H");



for (let i = 0; i < timeblocks.length; i++) {
const timeblock = timeblocks[i];

$(`<div class="row time-block future">
<div class="col-2 hour">${timeblock.hour+"PM"}</div>
<textarea class="col-9 description">${timeblock.description}</textarea>
<button class="btn saveBtn col-1">
    <i class="fa fa-save"></i>
</button>
</div>`).appendTo(".container")


}



// 'schooltime'
// $("textarea")
// $("textarea").text(localStorage.getItem("9am"))

// moment().format("h")

// $("textarea").addclass("future")


// localStorage
// storage {9a: 'schooltime', length: 1}
// localStorage.setItem("9am", )






   