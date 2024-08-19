// adding footer - copyright
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = ` Sabina Ruzieva &copy; ${thisYear}`;
footer.appendChild(copyright);

// adding skills section
const skills = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Linux', 'Python'];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

// active section (scrolling) and menu-icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}