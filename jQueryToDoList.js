/**

*

* Toggles "done" class on <li> element

*/





const toggleDone = function (e) {
  console.log('entered toggle done');
  console.log($(this).parent());
  e.preventDefault();
  if ($(this).parent().hasClass('done')) {
    $(this).parent().removeClass('done');
  }
  else {
    $(this).parent().addClass('done')
  }
};

/**

* Delete element when delete link clicked

*/



const deleteEl = (e) => {
  e.preventDefault();
  console.log('entered delete function');
  console.log('the parent is ', $(this));
  $(e.target).parent().fadeOut();
}



/**l

* Adds new list item to <ul>

*/

const addListItem = function (e) {
  e.preventDefault();
  const text = $('input').val();
  console.log("in add list item");
  const newLi = '<li>' + text + "<a class='delete'>Delete</a></li>";
  //newLi.append(deleteBtn)
  $("ul").append(newLi);
  $(".delete").on('click', deleteEl);

};





// rest here...

// add listener for add

$(document).ready(function () {
  $("span").on("click", toggleDone);
  $(".delete").on('click', deleteEl);
  $(".add-item").on('click', addListItem);

});



