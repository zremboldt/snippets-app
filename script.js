// ===============================
// Populate cards
// ===============================

// NOTE: Instead of a hardcoded array here we need to fetch our snippets from the server.

const cardsData = [
  {
    title: "My Snippet",
    note: `Here's a quote that I want to remember. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    image: 'https://pbs.twimg.com/media/EFUZQ-uXUAAAj-g?format=jpg&name=medium',
    title: "Here's a title",
    note: `Notes are automatically truncated to two lines for the preview as you can see here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    image: 'https://pbs.twimg.com/media/FBsdNX3UcAYI9r5?format=jpg&name=4096x4096',
    note: `Here's a note without a title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    title: "Title 1",
    note: "Lorem ipsum dolor sit amet ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Title 2",
    note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: "Titles are truncated to one line for the preview as you can see here.",
    image: 'https://i.etsystatic.com/5882372/r/il/6ec79c/1574779667/il_1588xN.1574779667_72z4.jpg',
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
    newSnippetToggleButton.classList.remove('active');
  } else {
    newSnippetOverlay.classList.add('active');
    document.body.classList.add('lock-scroll');
    newSnippetToggleButton.classList.add('active');
  }
})

// ===============================
// Image drop zone
// ===============================

const newSnippetImageDropZone = document.querySelector('.new-snippet_image-drop-zone');

newSnippetImageDropZone.addEventListener('dragover', (e) => {
  e.preventDefault(); // Prevent file from being opened

  if (!newSnippetImageDropZone.classList.contains('active')) {
    newSnippetImageDropZone.classList.add('active');
  }
})

newSnippetImageDropZone.addEventListener('dragleave', (e) => {
  newSnippetImageDropZone.classList.remove('active');
})

newSnippetImageDropZone.addEventListener('drop', (e) => {
  e.preventDefault(); // Prevent file from being opened
  console.log('File(s) dropped');

  [...e.dataTransfer.items].forEach(item => {
    if (item.kind === 'file') {
      const file = item.getAsFile();
      console.log(file.name);
    }
  })
})