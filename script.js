const anchors = document.querySelectorAll('a[href*="#"]');
const menuButton = document.querySelector('.menu-button');
const menuGroup = document.querySelector('.menu-group');
const circle = document.querySelector('.circle__center');
const video = document.querySelector('.circle__video');
const arrow = document.querySelector('.circle__arrow');
const naming = document.querySelector('.circle__naming');
const heading = document.querySelector('.head');
const about = document.querySelector('.about');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
}

menuButton.addEventListener('click', () => {
  const visibility = menuGroup.style.display == 'flex' ? 'none' : 'flex';
  menuGroup.style.display = visibility;
})

document.addEventListener('click', (e) => {
  const target = e.target;
  if (target !== menuButton) {
    menuGroup.style.display = 'none';
  }
})

window.addEventListener('scroll', (e) => {
  circle.style.transform = 'scale(' + (1 + pageYOffset / 45) + ')';
  video.style.transform = 'scale(' + (1 + pageYOffset / 100) + ')';
  arrow.style.transform = 'translateY(' + pageYOffset * 2 + 'px' + ')';
  naming.style.transform = 'translateY(' + '-' + pageYOffset + 'px' + ')';
  heading.style.transform = 'translateY(' + '-' + pageYOffset + 'px' + ')';

  if (isPartiallyVisible(about)) {
    about.classList.add('active');
  } else {
    about.classList.remove('active');
  }

})

function isPartiallyVisible(el) {
  const elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}