function Victory() {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.style.left = `${widthFloor/2 - 150}px`;
    card.style.top = `${heightFloor/2 - 150}px`;
  
    const text = document.createElement('div');
    text.setAttribute('class', 'text');
    text.innerHTML = "You won!!";
  
    card.appendChild(text);
    gameFloor.appendChild(card);
}

export {Victory};