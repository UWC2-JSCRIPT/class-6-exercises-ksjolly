// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

clickHandler = (e) => {
    e.preventDefault();
    alert('Added to Cart!');
}
$( document ).ready(function() {

     $("main").append("<a id = 'cta'> Buy Now! </a>");
     // var a_el = $("p").add("<a id = 'cta'> Buy Now! </a>");


    const imgcolor = $('img').attr('data-color');
    console.log('Data color is ', imgcolor);

    $("li:nth-child(3)").addClass("highlight");

    $("p").remove();

    $("a").on("click", clickHandler);

});