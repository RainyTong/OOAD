

function onClickAddFlight() {
	let flightNo = document.querySelector('form input[name="flight-no"]').value;
	let origin = document.querySelector('form input[name="from"]').value;
	let destination = document.querySelector('form input[name="to"]').value;
	if(validateInput(flightNo, origin, destination)){
		
		if( validateDateAndTime() && validateOrder() && noRepeat() ){

			addRow();
		
		}
		
	}
	
}

function noRepeat(){
	
let bodyObj = document.getElementById("tbody"); 

let flightNo = document.forms[0]["flight-no"].value;


for(var i=0;i<bodyObj.rows.length;i++)
	{
			if(bodyObj.rows[i].cells[0].innerHTML == flightNo){
				alert("Has Repetation of Flight No.!");
				return false;
			}
	}
return true;
}


function validateInput(flightNo, origin, destination) {
	
	let flightNoRegex = new RegExp(/^[A-Z0-9]{2}\d{3,4}$/);
	let airportcodeRegex = new RegExp(/^[A-Z]{3}$/);
	if(!flightNoRegex.test(flightNo)) {
		alert("Invalid Flight No.");
		return false;
	}
	if(!airportcodeRegex.test(origin)){
		alert("Invalid origin airport code.");
		return false;
	}
	if(!airportcodeRegex.test(destination)){
		alert("Invalid destination airport code.");
		return false;
	}
	if (origin == destination){
		alert("Origin and destination shouldn't be the same.");
		return false;
	}
	return true;
	
}

function validateDateAndTime(){
	if(document.getElementById("year")[0].selected){
	alert("Please enter the exact year :)");
	return false;
}
	if(document.getElementById("month")[0].selected){
	alert("Please enter the exact month :)");
	return false;
}
	if(document.getElementById("day")[0].selected){
	alert("Please enter the exact day :)");
	return false;
}
	if(document.getElementById("dhour")[0].selected){
	alert("Please enter the exact dparture hour :)");
	return false;
}
	if(document.getElementById("dminute")[0].selected){
	alert("Please enter the exact dparture minute :)");
	return false;
}
	if(document.getElementById("ahour")[0].selected){
	alert("Please enter the exact arrival hour :)");
	return false;
}
	if(document.getElementById("aminute")[0].selected){
	alert("Please enter the exact arrival minute :)");
	return false;
}
	
	
	return true;
}

function validateOrder(){
	
	let idx_dhour = document.getElementById("dhour").selectedIndex;
	let idx_dminute = document.getElementById("dminute").selectedIndex;
	let idx_ahour = document.getElementById("ahour").selectedIndex;
	let idx_aminute = document.getElementById("aminute").selectedIndex;
	
	if( (idx_ahour > idx_dhour) || ((idx_ahour == idx_dhour) && idx_aminute > idx_dminute) || ((idx_ahour <= idx_dhour) && idx_aminute >= 61 )   ){
		return true
	}else{
		alert("Arrival time should be later than departure time :)");
		return false;
	}
	
	
}

function initial(){
	
	let year = document.getElementById("year");
	year.innerHTML = "";
	for(let i = 0; i<year.childNodes.length; i++){
		year.removeChild(area.options[0]);
		year.remove(0);
		year.options[0] = null;
	}
	year.options.add(new Option("--", null)); 
	for (let i = 2000; i <= 2020; i++) {
		year.options.add(new Option(i, i)); 
	}
}

function setMonth(){
	let month = document.getElementById("month");
	month.innerHTML = "";
	for(let i = 0; i<month.childNodes.length; i++){
		month.removeChild(area.options[0]);
		month.remove(0);
		month.options[0] = null;
	}
	month.options.add(new Option("--", null)); 
	for (let i = 1; i <= 12; i++) {
		month.options.add(new Option(i, i)); 
	}
}

function setDay(){
	let year = document.getElementById("year").value;
	let month = document.getElementById("month").value;
	let day = document.getElementById("day");
	let data = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	
	day.innerHTML = "";
	
	for(let i = 0; i<day.childNodes.length; i++){
		day.removeChild(area.options[0]);
		day.remove(0);
		day.options[0] = null;
	}
	day.options.add(new Option("--", null)); 
	for(let i = 1; i <= data[month - 1]; i++) {
		day.options.add(new Option(i,i));
	}
	if(((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ) && month == 2 )
	{
		day.options.add(new Option(29,29));
	}
}

function setDHour(){
	
	let dhour = document.getElementById("dhour");
	dhour.innerHTML = "";
	let hour = new Array("00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23");
	for(let i = 0; i<dhour.childNodes.length; i++){
		dhour.removeChild(area.options[0]);
		dhour.remove(0);
		dhour.options[0] = null;
	}
	dhour.options.add(new Option("--",null));
	for(let i = 0; i<24; i++){
		dhour.options.add(new Option(hour[i],hour[i]));
	}
	
}

function setDMinute(){
	let dminute = document.getElementById("dminute");
	dminute.innerHTML = "";
	let minute = new Array("00","01","02","03","04","05","06","07","08","09");
	for(let i = 0; i<dminute.childNodes.length; i++){
		dminute.removeChild(area.options[0]);
		dminute.remove(0);
		dminute.options[0] = null;
	}
	dminute.options.add(new Option("--",null));
	for(let i = 0; i<10; i++){
		dminute.options.add(new Option(minute[i],minute[i]));
	}
	for(let i = 10; i<60;i++){
		dminute.options.add(new Option(i,i));

	}
	
}


function setAHour(){
	
	let ahour = document.getElementById("ahour");
	ahour.innerHTML = "";
	let hour = new Array("00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23");
	for(let i = 0; i<ahour.childNodes.length; i++){
		ahour.removeChild(area.options[0]);
		ahour.remove(0);
		ahour.options[0] = null;
	}
	ahour.options.add(new Option("--",null));
	for(let i = 0; i<24; i++){
		ahour.options.add(new Option(hour[i],hour[i]));
	}
	
}

function setAMinute(){
	let aminute = document.getElementById("aminute");
	aminute.innerHTML = "";
	let minute = new Array("00","01","02","03","04","05","06","07","08","09");
	for(let i = 0; i<aminute.childNodes.length; i++){
		aminute.removeChild(area.options[0]);
		aminute.remove(0);
		aminute.options[0] = null;
	}
	aminute.options.add(new Option("--",null));
	for(let i = 0; i<10; i++){
		aminute.options.add(new Option(minute[i],minute[i]));
	}
	for(let i = 10; i<60;i++){
		aminute.options.add(new Option(i,i));

	}
	for(let i = 0; i<10; i++){
		aminute.options.add(new Option(minute[i]+"+1",minute[i]+"+1"));
	}
	for(let i = 10; i<60;i++){
		aminute.options.add(new Option(i+"+1",i+"+1"));

	}
	
}

function addRow() {
	
let bodyObj = document.getElementById("tbody"); 

if (bodyObj === null) {
	alert("Body of Table not Exist!");
	return; }

let year = document.getElementById("year").value;
let month = document.getElementById("month").value;
let day = document.getElementById("day").value;
let dhour = document.getElementById("dhour").value;
let dminute = document.getElementById("dminute").value;
let ahour = document.getElementById("ahour").value;
let aminute = document.getElementById("aminute").value;


let flight_status;
let radios = document.getElementsByName('status');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			// 弹出选中值
			flight_status = radios[i].value;
			// 选中后退出循环
			break;
		}
	}

let rowCount = bodyObj.rows.length;
let cellCount = bodyObj.rows[0].cells.length;
bodyObj.style.display = ""; // display the tbody

let newRow = bodyObj.insertRow(rowCount++); 
newRow.insertCell(0).innerHTML = document.forms[0]["flight-no"].value;
newRow.insertCell(1).innerHTML = document.forms[0]["airline-company"].value;
newRow.insertCell(2).innerHTML = document.forms[0].from.value; 
newRow.insertCell(3).innerHTML = document.forms[0].to.value; 
newRow.insertCell(4).innerHTML = year + "/" + month + "/" + day; 
newRow.insertCell(5).innerHTML = dhour + ":" + dminute; 
newRow.insertCell(6).innerHTML = ahour + ":" + aminute;
newRow.insertCell(7).innerHTML = flight_status;
newRow.insertCell(8).innerHTML = bodyObj.rows[0].cells[cellCount - 1].innerHTML; // copy the "delete" button bodyObj.rows[0].style.display = "none"; 
// hide first row





}


function removeRow(inputobj) {
if (inputobj == null) return;
let parentTD = inputobj.parentNode; 
let parentTR = parentTD.parentNode; 
let parentTBODY = parentTR.parentNode; parentTBODY.removeChild(parentTR);
}
