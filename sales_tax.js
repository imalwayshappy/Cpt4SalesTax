"use strict";

const $ = selector => document.querySelector(selector);

//we created the variables to handle the document elements
const subtotal_field =  document.getElementById("subtotal")
const subtotal = document.getElementById("subtotal")
const taxRate = document.getElementById("tax_rate")
const salesTax = document.getElementById("sales_tax")
const total = document.getElementById("total")

//we forced the cursor to go to the subtotal textbox
subtotal_field.focus()

//we create the event listeners for the buttons and the text box clicks
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntries);
});

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#clear").addEventListener("click", cleaner);
});

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#subtotal").addEventListener("click", clearSubtotal);
});

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#tax_rate").addEventListener("click", clearTaxRate);
});

//this function will clear the text in the subtotal textbox
function clearSubtotal()
{
    subtotal.value = ""
}

//this function will clear the text in the taxRate textbox
function clearTaxRate()
{
    taxRate.value = ""
}

//this function will clear the text in the textboxes and will return the cursot to the subtotal textbox
function cleaner()
{
    subtotal_field.focus()
    clearSubtotal()
    clearTaxRate()
    salesTax.value = ""
    total.value = ""
}

//this function will evaluate if the subtotal and the taxrate are in the correct ranges for each one
//then if those variables are out of range we show an error for each 
//else we calculate and display the salestax and the total
function processEntries()
{

    var st = parseFloat(subtotal.value)
    var tr = parseFloat(taxRate.value)
    var salest
    var totalv

    
    //we validate if sales total is between 0 and 10000
    if(st>0 && st<10000)
    {
        //we validate if sales total is between 0 and 12
        if(tr>0 && tr<12)
        {
            //we calculate the sales tax
            salest = st * tr /100
            //we calculate the total
            totalv = st + salest
            //we display the results with only 2 decimal numbers after the point
            salesTax.value = salest.toFixed(2).toString()
            total.value = totalv.toFixed(2).toString()
        }
        else //if tax rate is out of range we show this error
        {
            alert("Tax Rate must be > 0 and <12")
        }
    }
    else //if subtotal is out of range we show this error
    {
        alert("Subtotal must be > 0 and <10000")
    } 
    //at the end of validation or calculation we return the cursor to the subtotal textbox
    subtotal_field.focus()

}  