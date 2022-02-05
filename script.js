// ===============================
// Populate cards
// ===============================

// NOTE: Instead of a hardcoded array here we need to fetch our snippets from the server.

const cardsData = [
  {
    image: 'https://pbs.twimg.com/media/EFUZQ-uXUAAAj-g?format=jpg&name=medium',
    title: "Here's a title",
    note: `Here's a quote that I want to remember. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    image: 'https://pbs.twimg.com/media/FBsdNX3UcAYI9r5?format=jpg&name=4096x4096',
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    note: "Lorem ipsum dolor sit amet ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    title: "My title",
    note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
]

function generateCardMarkup({image, title, note}) {
  if (image) {
    return `
      <div class='image-card'>
        ${image ? `<img class="image-card-image" src="${image}" />` : ''}
        ${title || note ? `<div class="image-card-text-container">
          ${title ? `<h3 class="image-card-title">${title}</h3>` : ''}
          ${note ? `<p class="image-card-note">${note}</p>` : ''}
        </div>` : ''}
      </div>
    `
  }

  return `
    <div class='text-card'>
      ${title ? `<h3 class="text-card-title">${title}</h3>` : ''}
      ${note ? `<p class="text-card-note">${note}</p>` : ''}
    </div>
  `
}

const allCardsMarkup = cardsData.map(card => generateCardMarkup(card)).join('');

const cardsContainerEl = document.querySelector('.cards-container');

cardsContainerEl.insertAdjacentHTML('beforeend', allCardsMarkup);


// ===============================
// New snippet screen
// ===============================

const newSnippetToggleButton = document.querySelector('.new-snippet_toggle-button');
const newSnippetOverlay = document.querySelector('.new-snippet_overlay');

newSnippetToggleButton.addEventListener('click', () => {
  if (newSnippetOverlay.classList.contains('active')) {
    newSnippetOverlay.classList.remove('active');
    document.body.classList.remove('lock-scroll');
    newSnippetToggleButton.innerText = 'New Snippet +'
  } else {
    newSnippetOverlay.classList.add('active');
    document.body.classList.add('lock-scroll');
    newSnippetToggleButton.innerText = 'Close'
  }
})
