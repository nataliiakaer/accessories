const refs = {
  controls: document.querySelector("#tabs-1 [data-controls]"),
  cards: document.querySelector("#tabs-1 [data-cards]"),
};

refs.controls.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "A") {
    console.log("Клік не по посиланню");
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector(
    ".buttons__btn--active"
  );

  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove("buttons__btn--active");

    const cardID = currentActiveControlItem.getAttribute("href").slice(1);

    const card = refs.cards.querySelector(`#${cardID}`);
    card.classList.remove("card-active");
  }

  const controlItem = event.target;
  controlItem.classList.add("buttons__btn--active");

  const cardID = controlItem.getAttribute("href").slice(1);

  const card = refs.cards.querySelector(`#${cardID}`);

  card.classList.add("card-active");
});
