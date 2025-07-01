const container = document.getElementById("container");
const cardLength = 16;
const cards = [];

let PreviousCart = undefined;

let icons = [
  "fa-horse",
  "fa-frog",
  "fa-dove",
  "fa-spider",
  "fa-cat",
  "fa-hippo",
  "fa-fish",
  "fa-dragon",
];

icons.push(...icons)
for (let i = 0; i < 100; i++) {
  let index1 = Math.floor(Math.random() * icons.length);
  let index2 = Math.floor(Math.random() * icons.length);
  let temp = icons[index1];
  icons[index1] = icons[index2];
  icons[index2] = temp;
}

for (let i= 0 ; i <cardLength;i++){
  let cardEl = document.createElement('div')
  cardEl.classList.add('cart')
  cardEl.innerHTML = `
  <div class="frond">
           <i class="fa-solid ${icons[i]}"></i>
     </div>

     <div class="back">
           <h4>Click me</h4>
     </div>
  `
  container.appendChild(cardEl);

cardEl.addEventListener('click', ()=>{
  if(!cardEl.classList.contains('show')){
    cardEl.classList.add('show')

    if(PreviousCart == undefined){
      PreviousCart = cardEl 
    }else{
      let firstChild = PreviousCart.querySelector('i').classList[1]
      let secondChild = cardEl.querySelector('i').classList[1]
      if(firstChild !== secondChild){
        let temp = PreviousCart
        setTimeout(()=>{
          temp.classList.remove('show')
          cardEl.classList.remove('show')
        },1000)
      }
      PreviousCart = undefined
    }
  }
})

}


let restart = document.querySelector('.Restart');
restart.addEventListener('click', () => {
  container.innerHTML = '';
  PreviousCart = undefined;
  for (let i = 0; i < cardLength; i++) {
    let cardEl = document.createElement('div');
    cardEl.classList.add('cart');
    cardEl.innerHTML = `
      <div class="frond">
        <i class="fa-solid ${icons[i]}"></i>
      </div>
      <div class="back">
        <h4>Click me</h4>
      </div>
    `;
    container.appendChild(cardEl);

    cardEl.addEventListener('click', () => {
      if (!cardEl.classList.contains('show')) {
        cardEl.classList.add('show');

        if (PreviousCart == undefined) {
          PreviousCart = cardEl;
        } else {
          let firstChild = PreviousCart.querySelector('i').classList[1];
          let secondChild = cardEl.querySelector('i').classList[1];
          if (firstChild !== secondChild) {
            let temp = PreviousCart;
            setTimeout(() => {
              temp.classList.remove('show');
              cardEl.classList.remove('show');
            }, 1000);
          }
          PreviousCart = undefined;
        }
      }
    });
  }
});
