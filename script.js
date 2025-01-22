const PREVIEW_TILE = document.getElementById("hex-preview");

// Display project picture when hovering over the project hex
function changeTile(path){
  PREVIEW_TILE.style.background = `url(${path}) center/cover no-repeat`;
  document.getElementById("hex-preview-text").innerText = "";
}
document.getElementById("hex-calculator").addEventListener('mouseover', ()=>{changeTile("./images/calculator-website.png")});
document.getElementById("hex-etch-a-sketch").addEventListener('mouseover', ()=>{changeTile("./images/etch-a-sketch-website.png")});
document.getElementById("hex-rps").addEventListener('mouseover', ()=>{changeTile("./images/rps-website.png")});
document.getElementById("hex-typing-grove").addEventListener('mouseover', ()=>{changeTile("./images/typing-grove-website.png")});

const COURSE_BOXES = document.querySelectorAll('.course-box');

const COURSES = {
  'DSA' : 'Data Structures and Algorithms',
  'NET' : 'Computer Networks',
  'AI' : 'Artificial Intelligence',
  'WEB' : 'Web Application Programming',
  'DBS' : 'Database Systems',
  'DAA' : 'Design-Analysis of Algorithms',
  'ICS' : 'Introduction to Computer Systems',
  'SWE' : 'Software Engineering',
  'CV' : 'Computer Vision',
  'OS' : 'Operating Systems',
};
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
COURSE_BOXES.forEach(box => {
  box.addEventListener('click', () =>{
    
    if (box.textContent in COURSES){
      box.classList.add('box-active');
      box.textContent = COURSES[box.textContent];
    }
    else{
      box.classList.remove('box-active');
      box.textContent = getKeyByValue(COURSES,box.textContent);
    }
    
  })
});

const startDate = new Date(2024, 0); // January 2024
const currentDate = new Date(); // Current date

// Calculate year and month difference
let yearDifference = currentDate.getFullYear() - startDate.getFullYear();
let monthDifference = currentDate.getMonth() - startDate.getMonth() + 1;

// Adjust for negative month difference
if (monthDifference < 0) {
  yearDifference -= 1;
  monthDifference += 12;
}

// Format the duration
const duration = `${yearDifference == 0 ? "" : yearDifference + " yr "} ${monthDifference == 0 ? "" : monthDifference + " mos"}`;

document.getElementById("ASC-job-duration").innerText = document.getElementById("ASC-job-duration").innerText.replace("{{Duration}}", duration);