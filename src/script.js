window.addEventListener("scroll", function () {
    var menu = document.querySelector("header");
    menu.classList.toggle("sticky", window.scrollY > 0);
  });
  
  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavbar.init();
  
  window.sr = ScrollReveal({ reset: true });
  
  sr.reveal(".title-about", { duration: 2000 });
  sr.reveal(".text-about", { duration: 1700 });
  sr.reveal(".image-about", { duration: 1900 });
  
  sr.reveal(".title-teacher", { duration: 1000 });
  sr.reveal(".text-teacher", { duration: 1700 });
  sr.reveal(".image-teacher", { duration: 1900 });
  
  sr.reveal(".title-method", { duration: 1000 });
  sr.reveal(".text-method", { duration: 1500 });
  sr.reveal(".image-method", { duration: 1600 });
  
  sr.reveal("#modalities", { duration: 1700 });
  sr.reveal("#courses", { duration: 1700 });
  sr.reveal("#contact-us", { duration: 1700 });
  