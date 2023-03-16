console.log('Hello!');

function toggleHandRaise () {
  const raisedHand = document.getElementById('raisedHand');
  raisedHand.classList.toggle('active');
}


const toggler = document.getElementById('toggler');
toggler.addEventListener('click', (e) => {
  const raisedHand = document.getElementById('raisedHand');
  const r = document.querySelector(':root');
  if (raisedHand.clientWidth > 0) {
    r.style.setProperty('--buttonWidth', `${raisedHand.clientWidth + 14}px`);
  }
  toggleHandRaise();
})