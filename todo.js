var todo = ['walk the dog'];
var userAction = prompt(`what would you like to do? \ntype "help" for more info`);

while (userAction !== "quit") {
  if (userAction === "list") {
    console.log(todo);
  } else if (userAction === "new") {
    var newAdd = prompt('what to add to list?')
    todo.push(newAdd);
    console.log(todo);
  } else if (userAction === "help"){
    alert(`"new" for todo.\n"list" to show all todo.\n"quit" to quit application`)
  }
  //ask again
var userAction = prompt(`what would you like to do? \ntype "help" for more info`);
}
console.log('you have quit application')
