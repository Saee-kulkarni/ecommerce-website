function cart() {
  // assign each value by id 
 var item = [ Number(document.getElementById('19.99').value),
              Number(document.getElementById('10.99').value),
              Number(document.getElementById('22.99').value),
              Number(document.getElementById('34.99').value),
              Number(document.getElementById('9.99').value)];
  // Multiply each input and add it to the value
   var total = [ document.getElementById('19.99').value * 19.99,
                 document.getElementById('10.99').value * 10.99,
                 document.getElementById('22.99').value * 22.99,
                 document.getElementById('34.99').value * 34.99,
                 document.getElementById('9.99').value * 9.99];
  // declare 
  var countItem = 0;
  var totalDue = 0;
  // loop through each item and add to the list item 
  for (var i = 0; i < item.length; i++){
      countItem += item[i];
  }
    // get total by call each item from the list
    for (var j = 0; j < total.length; j++){
      totalDue += total[j];
    }
   
  
 document.getElementById('itemTotal').innerHTML = "Item Total: " + countItem;
   document.getElementById('totalDue').innerHTML = "Item Total: $" + totalDue.toFixed(2);
  
}
