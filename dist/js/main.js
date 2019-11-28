const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item')


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;

    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));




        showMenu = false;
    }
}

var notificationsEnabled = false;
    function initNotifications() {
        if (window.Notification) {
            Notification.requestPermission(function(permission) {
                if (permission === 'granted') {
                    notificationsEnabled = true;
                } else {
                    alert("You have denied Notifications :(");
                }
            });
        } else {
            alert("Your browser does not support Notifications API");
        }
    }

    function showNotification() {
        if (notificationsEnabled) {
            var notification = new Notification('SSaurel', {
                body : 'You clicked on the button !',
                icon : 'https://www.ssaurel.com/cryptocoins/screenshots/web_hi_res_512.png'
            });

            setTimeout (function() { notification.close(); }, 5000);
        } else {
            alert ('Notifications are disabled');
        }
    }