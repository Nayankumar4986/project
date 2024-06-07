// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


};


// scroll section active link 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrolly;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight; 
      let id= sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href* =' + id + ']').classList.add('active');
            });
        };
    });

    //    sticky navbar
    
    let header = document.toggle('sticky', window.scrollY > 100);

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)    

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
   
     
};



// scroll reveal 

ScrollReveal({ 
    reset: true,
    distance: '80px', 
    duration: 2000,
    delay: 200
});

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});




    //  typed js  for multiple text 


    // const typed = new Typed('.multiple-text', {
    //     Strings: ['Web Developer', 'Android App Developer', 'AI-ML'],
    //     typeSpeed: 100,
    //     backSpeed: 100,
    //     backDelay: 1000,
    //     loop: true
    // });

    
  var typed = new Typed('#element', {
    strings: ['Full Stack Web Developer', 'Android App Developer','Video Editor','Machine Leaning and Artificial Intelligence','Software Developer'],
    typeSpeed: 50,
    loop: true // Set loop option to true
  });



  

  // Assuming you have the object data from MongoDB
const data = {
  _id: '64c503247ceb95f5f4c1dce6',
  linkText: 'Download',
  link: 'https://kiit.ac.in/',
  __v: 0,
};

// Get the raw Handlebars template from the DOM
const template = document.getElementById("your-template-id").innerHTML;

// Compile the template (optional as it's already a Handlebars template)
const compiledTemplate = Handlebars.compile(template);

// Render the template with the data
const renderedHTML = compiledTemplate(data);

// Inject the rendered HTML into the DOM (e.g., in a div with an ID "container")
document.getElementById("container").innerHTML = renderedHTML;







