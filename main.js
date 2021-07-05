
  const toggle = document.getElementById('toggle');
const nav = document.getElementById('mySidenav');
        toggle.addEventListener('click',() => {
            toggle.classList.toggle('active')
            nav.classList.toggle('active');
        })