const dropdown = document.getElementById('dropdown');
const arrow = document.querySelector('span');
const dropdownBox = document.getElementById('dropdown-box');
const dropdownItem = document.querySelector('#dropdown-box li a');
const navPar = document.querySelector('p.initial-nav');
const button = document.querySelector('button.initial-nav');
const menuIcon = document.getElementById('menu-icon');
const navResponsive = document.getElementById('nav-responsive');
const navResponsivePar = document.querySelector('#nav-responsive p');
const navResponsiveButton = document.querySelector('#nav-responsive button');

let dropdownShown = false;

dropdown.onmousedown = () => {
    if (!dropdownShown) {
        arrow.style.transform = 'rotate(0.5turn)';
        dropdownBox.style.transform = 'scaleY(1)';
        dropdown.ariaExpanded = 'true';
    } else {
        arrow.style.transform = 'initial';
        dropdownBox.style.transform = 'scaleY(0)';
        dropdown.ariaExpanded = 'false';
    }
    dropdownShown = !dropdownShown;
};

dropdown.onfocus = () => {
    if (!dropdownShown) {
        arrow.style.transform = 'rotate(0.5turn)';
        dropdownBox.style.transform = 'scaleY(1)';
        dropdown.ariaExpanded = 'true';
        dropdownShown = true;
    }
};

dropdownItem.addEventListener("focusout", () => {
    arrow.style.transform = 'initial';
    dropdownBox.style.transform = 'scaleY(0)';
    dropdown.ariaExpanded = 'false';
    dropdownShown = false;
});

let buttonClicked = false;

button.onclick = () => {
    if (!buttonClicked) {
        buttonClicked = true;
        navPar.style.visibility = 'visible';
        navPar.classList.add('animate-in');
        setTimeout(() => {
            navPar.classList.remove('animate-in');
            navPar.classList.add('animate-out');
            setTimeout(() => {
                navPar.classList.remove('animate-out');
                navPar.style.visibility = 'hidden';
                buttonClicked = false;
            }, 250);
        }, 2000);
    }
};

let responsiveButtonClicked = false;

navResponsiveButton.onclick = () => {
    if (!responsiveButtonClicked) {
        responsiveButtonClicked = true;
        navResponsivePar.style.visibility = 'visible';
        navResponsivePar.classList.add('animate-in');
        setTimeout(() => {
            navResponsivePar.classList.remove('animate-in');
            navResponsivePar.classList.add('animate-out');
            setTimeout(() => {
                navResponsivePar.classList.remove('animate-out');
                navResponsivePar.style.visibility = 'hidden';
                responsiveButtonClicked = false;
            }, 250);
        }, 2000);
    }
};

let navShown = false;

menuIcon.onmousedown = () => {
    if (!navShown) {
        navResponsive.style.transform = 'scaleY(1)';
        menuIcon.ariaExpanded = 'true';
        navShown = true;
    } else {
        navResponsive.style.transform = 'scaleY(0)';
        menuIcon.ariaExpanded = 'false';
        navShown = false;
    }
};

window.matchMedia('(min-width: 1019px').addEventListener("change", e => {
    if (e.matches && navShown) {
        navResponsive.style.transform = 'scaleY(0)';
        menuIcon.ariaExpanded = 'false';
        navShown = false;
    }
});