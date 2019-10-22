const el = document.querySelector('.toggle-me');
const handleToggle = () => el.classList.toggle('active');

el.onclick = () => handleToggle();
el.addEventListener('keyup', (event) => {
  if(event.keyCode === 13 || event.keyCode === 32) {
    handleToggle();
  }
});