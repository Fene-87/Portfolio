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
                    Below, you'll find an impressive lineup of my remarkable
                    projects, each a testament to my passion and expertise. Join
                    me as we explore this diverse array of projects, where
                    artistry meets functionality, and innovation knows no bounds.
                </p>
            </article>
            </div>
        </div>

        <main class="main-section">
            <section class="works-card">
                <div class="works-card-info">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>Rails</li>
                    <li>React</li>
                    <li>PostgresSQL</li>
                </ul>
                <button type="button">See Project</button>
                </div>
            </section>
            <section class="works-card">
                <div class="works-card-info">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>Ruby on Rails</li>
                    <li>PostgreSQL</li>
                </ul>
                <button type="button">See Project</button>
                </div>
            </section>
            <section class="works-card">
                <div class="works-card-info">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>React</li>
                    <li>Redux</li>
                    <li>SpaceX API</li>
                </ul>
                <button type="button">See Project</button>
                </div>
            </section>
            <section class="works-card">
                <div class="works-card-info">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>React</li>
                    <li>Redux</li>
                    <li>CoinGecko API</li>
                </ul>
                <button type="button">See Project</button>
                </div>
            </section>
            <section class="works-card">
                <div class="works-card-info">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>React</li>
                    <li>Redux</li>
                </ul>
                <button type="button">See Project</button>
                </div>
            </section>
            <section class="works-card">
                <div class="works-card-info">
                <h4>Professional Art <br/> Printing Data</h4>
                <p>
                    A daily section of privately personalized reads;
                    no accounts or sign-ups required. Has been the industry's
                    standard
                </p>
                <ul class="works-ul">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <button type="button">See Project</button>
                </div>
            </section>
        </main>
`;

const projectDetails = [
  {
    name: 'Book Ease Reservation',
    description: 'This is a robust and user-friendly Room Reservation Application built using the Ruby on Rails framework. With its intuitive interface and powerful features, this app aims to streamline the hotel booking process for both guests and hotel staff.',
    featuredImage: './img/Book-ease-home.PNG',
    technologies: ['Ruby on Rails', 'React', 'PostgreSQL'],
    liveLink: 'https://book-ease.onrender.com/',
    sourceLink: 'https://github.com/Fene-87/hotel-room-reservation-front-end',
  },

  {
    name: 'Budget Tracker',
    description: 'Budget Tracker is a Ruby on Rails mobile web application designed to empower users in effectively managing their budgets. It provides a user-friendly interface and a range of features to assist users in budget planning and tracking.',
    featuredImage: './img/Budget-tracker.PNG',
    technologies: ['Ruby on Rails', 'PostgreSQL'],
    liveLink: 'https://budget-tracker-lkkh.onrender.com/',
    sourceLink: 'https://github.com/Fene-87/budget_app',
  },

  {
    name: 'Space Travellers Hub',
    description: 'A web application whose aim is to facilitate a company that provides commercial and scientific space travel services. The application gets real live data from the SpaceX API. It allows users to book rockets and join selected space missions.',
    featuredImage: './img/Space-travellers.PNG',
    technologies: ['React', 'Redux', 'SpaceX API'],
    liveLink: 'https://space-travelers-hub-bbxn.onrender.com/',
    sourceLink: 'https://github.com/Fene-87/space-travelers-hub',
  },

  {
    name: 'CryptoMetrics',
    description: 'CryptoMetrics is a comprehensive web application that provides users with detailed information about various cryptocurrencies. Stay up-to-date with real-time data, market trends, and key metrics for a wide range of digital currencies',
    featuredImage: './img/CryptoMetrics.PNG',
    technologies: ['React', 'Redux', 'CoinGecko API'],
    liveLink: 'https://cryptometrics.onrender.com/',
    sourceLink: 'https://github.com/Fene-87/cryptometrics',
  },

  {
    name: 'BookStore CMS',
    description: 'A simple React/Redux project that allows users to display a list of books, add a book , and delete a particular book.',
    featuredImage: './img/Bookstorecms.PNG',
    technologies: ['React', 'Redux'],
    liveLink: 'https://bookstore-i0bx.onrender.com/',
    sourceLink: 'https://github.com/Fene-87/Bookstore',
  },

  {
    name: 'Art Gallery',
    description: 'This simple web application is a cutting-edge web application designed to captivate art enthusiasts and create an immersive experience within the world of contemporary art. Whether you\'re an avid art collector, a curious newcomer, or simply seeking a dose of creative inspiration, this website is here to ignite your passion for the arts.',
    featuredImage: './img/Artgallery.PNG',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://fene-87.github.io/Module-1-Capstone/',
    sourceLink: 'https://github.com/Fene-87/Module-1-Capstone',
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

const cardImages = document.querySelectorAll('.works-card');
for (let i = 0; i < cardImages.length; i += 1) {
  const backgroundImg = projectDetails[i].featuredImage;
  cardImages[i].style.backgroundImage = `url(${backgroundImg})`;
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

<ul class="works-ul pop-works"></ul>

<div class="image-text-button">
<img src="" alt="" class="popup-image" />
<div>
<p class="pop-win-text"></p>
<div class="pop-win-buttons">
    <button type="button" class="live-demo">Live Demo<span></span><i class="fa-solid fa-up-right-from-square"></i></button>
    <button type="button" class="github-repo">GitHub Repo<span><i class="fa-brands fa-github"></i></span></button>
</div>
</div>
</div>
</div>
`;

body.appendChild(main);

const openPopup = document.querySelectorAll('.works-card button');
openPopup.forEach((item, index) => {
  item.addEventListener('click', () => {
    const popWinHeader = document.querySelector('.pop-win-h3');
    popWinHeader.textContent = item.parentElement.children[0].textContent;

    const popupImage = document.querySelector('.popup-image');
    const imgUrl = item.parentElement.parentElement.style.backgroundImage;
    const trimmedUrl = imgUrl.replace('url("', '').replace('")', '');
    popupImage.src = trimmedUrl;
    popupImage.alt = 'project-logo';

    const popupTech = document.querySelector('.pop-works');
    const specificPopupTech = item.parentElement.children[2].children;
    for (let i = 0; i < specificPopupTech.length; i += 1) {
      const techTextContent = specificPopupTech[i].textContent;
      const liElement = document.createElement('li');
      liElement.textContent = techTextContent;
      liElement.classList.add('works-list');
      popupTech.appendChild(liElement);
    }
    const liveDemoUrl = document.querySelector('.live-demo');
    let link;
    const handleLiveDemoLink = () => {
      liveDemoUrl.addEventListener('click', (event) => {
        event.preventDefault();
        link = document.createElement('a');
        link.href = projectDetails[index].liveLink;
        link.target = '_blank';
        link.click();
      });
    };
    handleLiveDemoLink();

    const githubDemoUrl = document.querySelector('.github-repo');
    const handleGithubDemoLink = () => {
      githubDemoUrl.addEventListener('click', (event) => {
        event.preventDefault();
        const link = document.createElement('a');
        link.href = projectDetails[index].sourceLink;
        link.target = '_blank';
        link.click();
      });
    };
    handleGithubDemoLink();

    const popWinPar = document.querySelector('.pop-win-text');
    popWinPar.textContent = item.parentElement.children[1].textContent;
    main.classList.toggle('active');
  });
});

const closePopup = document.querySelector('.pop-win-remove');
closePopup.addEventListener('click', () => {
  main.classList.remove('active');
  const popupTech = document.querySelector('.pop-works');
  popupTech.innerHTML = '';
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
  };
  localStorage.setItem('data', JSON.stringify(formData));
};

contactName.addEventListener('change', setFormInfo);
contactEmail.addEventListener('change', setFormInfo);
contactMessage.addEventListener('change', setFormInfo);

const getFormInfo = () => {
  const data = JSON.parse(localStorage.getItem('data'));

  if (data === null) {
    return;
  }
  contactName.value = data.name;
  contactEmail.value = data.email;
  contactMessage.value = data.message;
};

document.addEventListener('DOMContentLoaded', getFormInfo);
