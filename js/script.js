/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate



// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four




// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here



//AJ advice
// store the list of students at the top and separate your code into small functions.

// - one the creates the links based on the size of list it gets
// - one to add them to the DOM
// - one to filter the list 
// - one to remove things from the DOM (edited)


//Lee advice
// So I think what is giving you trouble is that you aren't using your functions in conjunction with the search feature. Think of it like this: When the page loads your showPage and appendPageLinks functions are called using the initial student list as a parameter. This causes the first 10 students to be displayed and adds the pagination links based on the original student list info. Your search feature doesn't actually change the student list. It merely changes the display style of the students that do not match the search term to none. They are still part of the student list, they just aren't visible. Your pagination links remain unchanged because the pagination function was already called on page load and there is nothing in your search function to cause it to run again.
// Rather than simply hiding parts of the original student list, I would try to approach it from the perspective of creating a new list of students from those that match the search term. You can then use that list as a parameter and recall the showPage and appendPageLinks functions. (edited)
