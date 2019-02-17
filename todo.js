var todo = ['walk the dog'];
var userAction = prompt('what would you like to do?');

while (userAction !== "quit") {
  if (userAction === "list") {
    console.log(todo);
  } else if (userAction === "new") {
    var newAdd = prompt('what to add to list?')
    todo.push(newAdd);
    console.log(todo);
  } 
  //ask again
  var userAction = prompt('what would you like to do?');
}
console.log('you have quit application')
