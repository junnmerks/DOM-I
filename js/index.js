const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  mainContent: {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const heroImg = document
  .querySelector("#cta-img")
  .setAttribute("src", "./img/header-img.png");

let navItem = siteContent.nav;

let anchor = document.querySelectorAll("nav a");
anchor[0].textContent = navItem["nav-item-1"];
anchor[1].textContent = navItem["nav-item-2"];
anchor[2].textContent = navItem["nav-item-3"];
anchor[3].textContent = navItem["nav-item-4"];
anchor[4].textContent = navItem["nav-item-5"];
anchor[5].textContent = navItem["nav-item-6"];

// console.log(anchor);
//const titleHeader = document.getElementsByClassName("cta-text.h1");
//titleHeader.textContent = "DOM Is Awesome";

//const newTitle = (document.getElementsByTagName("h1").textContent =
//  "DOM is Awesome");

let newTitle = document.querySelector(".cta-text h1");
newTitle.textContent = siteContent.cta.h1;
newTitle.style.fontSize = "3.2rem";
newTitle.style.alignItems = "center";
newTitle.style.flexDirection = "column";
newTitle.style.width = "40%";

let btn = document.querySelector(".cta-text button");
btn.textContent = siteContent.cta.button;

let ctaText = document.querySelector(".cta-text");
ctaText.style.display = "flex";
ctaText.style.alignContent = "center";

// let mContent = document.querySelector(".text-content h4");
// mContent.textContent = siteContent.mainContent["features-h4"];

// let fContent = document.querySelector(".text-content p");
// fContent.textContent = siteContent.mainContent["features-content"];
// fContent.style.width = "48%";

// let textContent2 = document.createElement("h4");
// textContent2.textContent = siteContent.mainContent["about - h4"];
// fContent.appendChild =

let aSubTitle = document.querySelectorAll(".text-content h4");

aSubTitle[0].textContent = siteContent.mainContent["features-h4"];
aSubTitle[1].textContent = siteContent.mainContent["about-h4"];
aSubTitle[2].textContent = siteContent.mainContent["services-h4"];
aSubTitle[3].textContent = siteContent.mainContent["product-h4"];
aSubTitle[4].textContent = siteContent.mainContent["vision-h4"];

let paragraph = document.querySelectorAll(".text-content p");

paragraph[0].textContent = siteContent.mainContent["features-content"];
paragraph[1].textContent = siteContent.mainContent["about-content"];
paragraph[2].textContent = siteContent.mainContent["services-content"];
paragraph[3].textContent = siteContent.mainContent["product-content"];
paragraph[4].textContent = siteContent.mainContent["vision-content"];

console.log(paragraph[1]);

const midImage = document
  .querySelector(".middle-img")
  .setAttribute("src", "./img/mid-page-accent.jpg");

let fContent = document.querySelector(".text-content p");
fContent.textContent = siteContent.mainContent["features-content"];
fContent.style.width = "90%";
