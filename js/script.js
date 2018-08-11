//selects the list items with class .student-item
let allStudents = document.querySelectorAll('.student-item');
const studentDetails = document.querySelectorAll('.student-details');

let ul = document.getElementsByTagName('ul')[0];
let paginationDiv = ul.parentNode;
let div = document.createElement('div');
let createUl = document.createElement('ul');
let createLi = document.createElement('li');

function showPage(pageNumber, allStudents) {
	const upperIndex = (pageNumber * 10) - 1;
	const lowerIndex = (pageNumber * 10) - 10;
	for (let i = 0; i < allStudents.length; i++) {
		allStudents[i].style.display = 'none';
		if (i >= lowerIndex && i <= upperIndex) {
			allStudents[i].style.display = 'block';
		}
	}
}
//pass the function 2 arguments. 1 for the page and the other is the students
showPage(1, allStudents);

function appendPageLinks(allStudents) {
        paginationDiv.appendChild(div).className = 'pagination';
        let pagination = document.getElementsByClassName('pagination')[0];
        pagination.appendChild(createUl);
        for (let i = 0; i <= allStudents.length / 10; i++) {
            createLi.classList.add('paging');
            createUl.appendChild(createLi);
            let a = document.createElement('a');
            a.setAttribute('href', '#');
            createLi.appendChild(a);
            a.textContent = [i + 1];
            if (i === 0) {
                a.classList.add('active');
            }
        }
        function paginationEventListener(){
            pagination.addEventListener('click', (event) => {
                let anchorTags = document.querySelectorAll('.pagination a');
                for (let i = 0; i < anchorTags.length; i++) {
                    anchorTags[i].classList.remove('active');
                }
                if (event.target.classList.contains('active')) {
                    event.target.classList.remove('active');
                } else {
                    event.target.className = 'active';
                    console.log(event.target);
                }

                function buttonNumber() {
                    let button = parseInt(event.target.textContent);
                    showPage(button, allStudents);
                }
                buttonNumber();
            });
            
        }
        paginationEventListener();
}


appendPageLinks(allStudents);