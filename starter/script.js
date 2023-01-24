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

let currentDate = moment().format("dddd, MMMM Do YYYY");
// console.log(currentDate);
$("#currentDay").text(currentDate);
let currentTime = moment().format("H");
let textarea = $(this).siblings('.description').val();
let PlannerData = ""



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




function savePlannerData() {
    localStorage.setItem("timeblock", JSON.stringify(timeblock));

}




