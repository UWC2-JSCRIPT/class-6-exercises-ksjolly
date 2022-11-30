// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});


// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const handleInfo = (e) => {
  e.preventDefault();
  alert(`Here's some info`);
}

document.getElementById('more-info').addEventListener('click', handleInfo);


// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const overrideMeow = (e) => {
  e.stopPropagation();
  alert('Bow Wow');
}
document.getElementById('dog').addEventListener('click', overrideMeow);
