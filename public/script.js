const countElement = document.getElementById('count');

update();

function update() {
  fetch('https://api.countapi.xyz/update/twcreeper/twc/?amount=1').then(res => res.json()).then(res => {
    countElement.innerHTML = res.value;
  })
}
