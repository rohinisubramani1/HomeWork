const bulb = document.getElementById('bulb');
const button = document.getElementById('toggleButton');

let isBulbOn = false;

button.addEventListener('click', () => {
  isBulbOn = !isBulbOn;
  if (isBulbOn) {
    bulb.src = 'https://cdn.pixabay.com/photo/2024/07/15/16/19/lightbulb-8897270_640.png';
    button.textContent = 'Turn Off';
  } else {
    bulb.src = 'https://i0.wp.com/pearlyarts.com/wp-content/uploads/2021/12/Light-bulb-off-Clipart-WM.png';
    button.textContent = 'Turn On';
  }
});
