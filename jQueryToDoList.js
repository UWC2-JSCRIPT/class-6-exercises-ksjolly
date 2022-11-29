/**
 * 
 * Toggles "done" class on <li> element
 */


const toggleDone = function (e) {
  console.log('entered toggle done');
  console.log($(this));
  e.preventDefault();
  if($(this).parent().hasClass('done'))
  {
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
  console.log('entered delete element');
  console.log($(this).get());
  $(this).empty();
}

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();


};


  // rest here...
// add listener for add
$(document).ready(function() {
  $("span").on("click", toggleDone);
  $(".delete").on('click', deleteEl);

  
});

/*
const changeClass = function(e) {
  e.preventDefault();
  console.log(this.parentNode);
  this.parentNode.className = 'done';
}

const deleteEl = function(e) {
  e.preventDefault();
  this.parentNode.parentNode.removeChild(this.parentNode);
}

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  const li_el = document.createElement('li');
  const li_span = document.createElement('span');
  const li_textNode = document.createTextNode(text);
  const li_delete = document.createElement('a');
  li_delete.classList.add('delete'); // I feel like this could be done more cleanly
  li_span.addEventListener('click', changeClass);
  li_delete.addEventListener('click', deleteEl);
  li_delete.appendChild(document.createTextNode('delete'));
  li_span.appendChild(li_textNode);
  li_el.appendChild(li_span);
  li_el.appendChild(li_delete);
  

  const ul = this.parentNode.parentNode.getElementsByTagName('ul')[0];
  ul.appendChild(li_el);

};



// Initialize existing elements to have event listeners
const spans = document.querySelectorAll('span');
const deleters = document.querySelectorAll(".delete");
deleters.forEach(del => del.addEventListener('click', deleteEl));
spans.forEach(span => span.addEventListener('click', changeClass));

// Add button 
const addbtn = document.getElementsByClassName('add-item');
addbtn[0].addEventListener('click', addListItem);*/