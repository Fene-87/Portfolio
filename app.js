const navList = document.querySelector('.nav-list');
const navIcon = document.querySelector('.nav-icon-span');
const removeList = document.querySelector('.nav-list-remove');
const removeSlider = document.querySelectorAll('.nav-li');

navIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});

removeList.addEventListener('click', () => {
  navList.classList.remove('active');
});

removeSlider.forEach((item) => {
  item.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

const section = document.querySelector('.second-section');
section.innerHTML = `
<div class="second-sec-div">
            <h3>My Recent Works</h3>
            <hr />
        </div>

        <div class="second-sec-works">
            <div class="recent-works"></div>
            <div class="recent-works-two">
            <article>
                <h4 class="story-one">Multi-Post Stories</h4>
                <p class="story-two">
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a standard dummy text.
                </p>
            </article>
            <ul class="languages">
                <li>css</li>
                <li>html</li>
                <li>bootstrap</li>
                <li>ruby</li>
            </ul>
            <button type="button" class="btn-project">See Project</button>
            </div>
        </div>

        <main class="main-section">
            <section class="works-card">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>html</li>
                    <li>bootstrap</li>
                    <li>ruby</li>
                </ul>
                <button type="button">See Project</button>
            </section>
            <section class="works-card">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>html</li>
                    <li>bootstrap</li>
                    <li>ruby</li>
                </ul>
                <button type="button">See Project</button>
            </section>
            <section class="works-card">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>html</li>
                    <li>bootstrap</li>
                    <li>ruby</li>
                </ul>
                <button type="button">See Project</button>
            </section>
            <section class="works-card">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>html</li>
                    <li>bootstrap</li>
                    <li>ruby</li>
                </ul>
                <button type="button">See Project</button>
            </section>
            <section class="works-card">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>html</li>
                    <li>bootstrap</li>
                    <li>ruby</li>
                </ul>
                <button type="button">See Project</button>
            </section>
            <section class="works-card">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>html</li>
                    <li>bootstrap</li>
                    <li>ruby</li>
                </ul>
                <button type="button">See Project</button>
            </section>
        </main>
`;

const projectDetails = [
  {
    name: 'Data Dashboard HealthCare',
    description: 'This is a Data Dashboard Healthcare. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Website Portfolio',
    description: 'Hello this is a website portfolio. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Professional Art',
    description: 'This is a Professional Art project. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'SmartHub Groceries',
    description: 'This is  Smart Hub Groceries project. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'BloodBank Management',
    description: 'This is a Blood bank management system. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Professional Art Printing Data',
    description: 'Hey, this is Professional Art Printing Data. A daily section of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './img/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
];

const names = document.querySelectorAll('.main-section h4');
for (let i = 0; i < names.length; i += 1) {
  names[i].textContent = projectDetails[i].name;
}

const descriptions = document.querySelectorAll('.main-section p');
for (let i = 0; i < descriptions.length; i += 1) {
  descriptions[i].textContent = projectDetails[i].description;
}

const body = document.querySelector('body');
const main = document.createElement('section');
main.classList.add('popup-section');
main.innerHTML = `
<div class="popup-window">
<div class="pop-win-header">
    <h3 class="pop-win-h3"></h3>
    <span class="pop-win-remove"><i class="fa-solid fa-xmark"></i></span>
</div>
<ul class="works-ul pop-works">
    <li class="works-list">html</li>
    <li class="works-list">bootstrap</li>
    <li class="works-list">ruby</li>
</ul>
<div class="image-text-button">
<img src="/img/Snapshoot Portfolio.png" alt="" />
<div>
<p class="pop-win-text"></p>
<div class="pop-win-buttons">
    <button type="button">See Live<span></span><i class="fa-solid fa-up-right-from-square"></i></button>
    <button type="button">See Source<span><i class="fa-brands fa-github"></i></span></button>
</div>
</div>
</div>
</div>
`;

body.appendChild(main);

const openPopup = document.querySelectorAll('.works-card button');
openPopup.forEach((item) => {
  item.addEventListener('click', () => {
    const popWinHeader = document.querySelector('.pop-win-h3');
    popWinHeader.textContent = item.parentElement.children[0].textContent;

    const popWinPar = document.querySelector('.pop-win-text');
    popWinPar.textContent = item.parentElement.children[1].textContent;
    main.classList.toggle('active');
  });
});

const closePopup = document.querySelector('.pop-win-remove');
closePopup.addEventListener('click', () => {
  main.classList.remove('active');
});

const multiPostProject = document.querySelector('.btn-project');
multiPostProject.addEventListener('click', () => {
  const popWinHeader = document.querySelector('.pop-win-h3');
  popWinHeader.textContent = multiPostProject.parentElement.children[0].children[0].textContent;

  const popWinPar = document.querySelector('.pop-win-text');
  popWinPar.textContent = multiPostProject.parentElement.children[0].children[1].textContent;
  main.classList.toggle('active');
});

const emailError = document.querySelector('.email-error');
const emailInput = document.querySelector('#email');
const wholeForm = document.querySelector('.form-input');

function validateEmail(event) {
  const emailInputValue = emailInput.value;

  if (emailInputValue.match(/[A-Z]/)) {
    event.preventDefault();
    emailError.innerHTML = '* email should not contain uppercase letters';
    emailInput.classList.add('invalid');
    return false;
  }
  emailError.innerHTML = '';
  emailInput.classList.remove('invalid');
  return true;
}

wholeForm.addEventListener('submit', validateEmail);

const contactName = document.querySelector('#name');
const contactEmail = document.querySelector('#email');
const contactMessage = document.querySelector('#contact-message');

const setFormInfo = () => {
  const formData = {
    name: contactName.value,
    email: contactEmail.value,
    message: contactMessage.value,
  }
  localStorage.setItem('data', JSON.stringify(formData));
}

contactName.addEventListener('change', setFormInfo);
contactEmail.addEventListener('change', setFormInfo);
contactMessage.addEventListener('change', setFormInfo);

const getFormInfo = () => {
  let data = JSON.parse(localStorage.getItem('data'));

  if (data === null) {
    return;
  }
  contactName.value = data.name;
  contactEmail.value = data.email;
  contactMessage.value = data.message;
}
