$(document).ready(function(){
  const navText = ["<button class='tiles__controll-btn' style='background-image: url(./assets/arrow.svg);'></button>","<button class='tiles__controll-btn' style='background-image: url(./assets/arrow.svg); transform: rotate(180deg);'></button>"];
  const navBestText = [`
    <button> <img src="./assets/arrow.svg" alt="arrow" loading="lazzy" /> </button>
  `,`
    <button style='transform: rotate(180deg);'> <img src="./assets/arrow.svg" alt="arrow" loading="lazzy" /> </button>`
  ];
  
  $(".owl-carousel-tiles").owlCarousel({
    loop:true,
    responsive:{
      1000:{
        items:3,
        nav:true,
        navText,
        loop:true
      },
      768:{
        items:3,
        nav:true,
        navText
      }
    }
  });

  $('.owl-carousel-main').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
      0:{
          items:1
      }
    }
  });

  $('.owl-carousel-bestseller').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    navText: navBestText,
    dots: true,
    responsive:{
      320:{
        items:1
      },
      1000:{
        items:1.2
      }
    }
  });
  

  $('.owl-carousel-reviews').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    navText: navBestText,
    dots: true,
    responsive:{
      0:{
        items: 1
      }
    }
  });

  // Mobile Nav Bar
  let btnClass = '.showList'
  let NavClassClose = '.closeNavMenu'
  let NavOpenClass = '.openNavMenu'

  // show/hide dropdawn
  document.querySelectorAll(btnClass).forEach(element => {
    element.addEventListener('click', OpenMenu);
  });

  // hide nav menu
  document.querySelectorAll(NavClassClose).forEach(element => {
    element.addEventListener('click', CloseNav);
  });
  // show nav menu
  document.querySelectorAll(NavOpenClass).forEach(element => {
    element.addEventListener('click', OpenNav);
  });


  function OpenMenu(e) {
    let ActiveUL = e.target.getAttribute('data-ul');
    
    e.target.classList.toggle('active');
    document.querySelector(`.${ActiveUL}`).classList.toggle('active');
  }
  function CloseNav() {
    document.querySelector('.header__navMobile').classList.remove('show')
  }
  function OpenNav() {
    document.querySelector('.header__navMobile').classList.add('show')
  }

  // Counter
  let counterClass = '.counter__btn'
  document.querySelectorAll(counterClass).forEach(element => {
    element.addEventListener('click', CounterClick);
  });

  function CounterClick(e) {
    let CounterID = e.target.getAttribute('data-id');
    let CounterAction = e.target.getAttribute('data-action');
    let CounterValue = document.querySelector(`.${CounterID}`);

    if (CounterAction === 'plus') CounterValue = ++CounterValue.innerText;
    else
      if (parseInt(CounterValue.innerText) !== 1) CounterValue = --CounterValue.innerText;
  }

  // Close/Show cart
  let openCartClass = '.openCart';
  let closeCartClass = '.closeCart';

  document.querySelectorAll(openCartClass).forEach(element => {
    element.addEventListener('click', OpenCart);
  });
  document.querySelectorAll(closeCartClass).forEach(element => {
    element.addEventListener('click', CloseCart);
  });

  function OpenCart() {
    document.querySelector('.CartWindow').classList.add('show');
  }
  function CloseCart() {
    document.querySelector('.CartWindow').classList.remove('show');
  }


  // FAQ
  let faqClass = '.faqOpen'
  document.querySelectorAll(faqClass).forEach(element => {
    element.addEventListener('click', OpenFAQ);
  });

  function OpenFAQ(e) {
    let ActiveFAQ = e.target.getAttribute('data-id');
    
    // e.target.classList.toggle('active');
    document.querySelector(`.${ActiveFAQ}`).classList.toggle('active');
    document.querySelector(`${faqClass}`).classList.toggle('active');
  }

  // Open ques. product
  let buttonClass = '.openProductQues';

  document.querySelectorAll(buttonClass).forEach(element => {
    element.addEventListener('click', OpenQues);
  });

  function OpenQues(e) {
    let ActiveQues = e.target.children[0].getAttribute('data-id');
    
    e.target.children[0].classList.toggle("active");
    document.querySelector(`.${ActiveQues}`).classList.toggle('show');
  }

  // Chenge product tabs
  let tabClass = '.productPage__tabs-li'

  document.querySelectorAll(tabClass).forEach(element => {
    element.addEventListener('click', OpenProductTab);
  });

  function OpenProductTab(e) {
    let ActiveTab = e.target.getAttribute('data-id');

    document.querySelector("[data-id='tab-1']").classList.remove("active");
    document.querySelector("[data-id='tab-2']").classList.remove("active");
    document.querySelector("[data-id='tab-3']").classList.remove("active");
    
    document.querySelectorAll(`.tab`).forEach(element => {
      element.classList.remove("active");
    })

    document.querySelector(`.${ActiveTab}`).classList.add("active");
    e.target.classList.add("active");
  }

  // chage var product
  document.querySelector(".productPage-template-item").classList.add("active");
  // 


  document.querySelectorAll('.productPage-template-item').forEach(element => {
    element.addEventListener('click', ChangeVarProduct);
  });

  function ChangeVarProduct(e) {
    document.querySelectorAll('.productPage-template-item').forEach(element => {
      element.classList.remove("active");
    });

    e.target.classList.add("active");
    document.getElementsByName("add-to-cart")[0].setAttribute("value", e.target.getAttribute("value"));

    document.querySelector(".productPage-price").children[0].innerHTML = e.target.children[1].innerHTML;
    document.querySelector(".productPage-price").children[1].innerHTML = e.target.children[0].innerHTML;
  }

});

function changeIMG(img) {
  document.querySelector('.productPage__image').children[0].setAttribute('src', img);

  let btnClass = '.product_img-btn';
  for (let i = 0; i < document.querySelectorAll(btnClass).length; i++) {
    document.querySelectorAll(btnClass)[i].classList.remove('active');
    document.querySelectorAll(btnClass+'1')[0].classList.remove('active');

    if (document.querySelectorAll(btnClass)[i].getAttribute('onclick').includes(img)) {
      document.querySelectorAll(btnClass)[i].classList.add('active');
    }
    if (document.querySelectorAll('.product_img-img')[i].getAttribute('onclick').includes(img)) {
      document.querySelectorAll(btnClass)[i].classList.add('active');
    }
  }
}

function openPreview(img) {
  document.querySelector('.productPage__image').children[0].setAttribute('src', img);
  let btnClass = '.product_img-btn';
  for (let i = 0; i < document.querySelectorAll(btnClass).length; i++) {
    document.querySelectorAll(btnClass)[i].classList.remove('active');

    document.querySelectorAll(btnClass+'1')[0].classList.add('active');
  }
}

function openShip() {
  document.querySelectorAll(".shipping__nav-btn")[0].classList.add("shipping__nav-btn--active");
  document.querySelectorAll(".shipping__nav-btn")[1].classList.remove("shipping__nav-btn--active");
  
  document.querySelector(".shipping").classList.add("active");
  document.querySelector(".refund").classList.remove("active");

}
function openRef() {
  document.querySelectorAll(".shipping__nav-btn")[0].classList.remove("shipping__nav-btn--active");
  document.querySelectorAll(".shipping__nav-btn")[1].classList.add("shipping__nav-btn--active");
  
  document.querySelector(".shipping").classList.remove("active");
  document.querySelector(".refund").classList.add("active");
}