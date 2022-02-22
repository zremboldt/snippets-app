// ===============================
// Populate cards
// ===============================

// NOTE: Instead of a hardcoded array here we need to fetch our snippets from the server.

const collections = [
  {
    name: 'Quotes',
    snippets: [
      {
        lastModified: 'date here',
        title: "Quote of the day",
        note: `Here's an inspirational quote that I want to remember.`
      },
      {
        lastModified: 'date here',
        note: `My grandpa always said: "Booooy Howdy!"`
      },
      {
        lastModified: 'date here',
        title: "Twitter quote",
        note: `This one came straight from Twitter using the Snippets browser extension.`
      },
      {
        lastModified: 'date here',
        title: "Quote number three",
        note: `Some wise words here.`
      },
      {
        lastModified: 'date here',
        note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`
      },
    ]
  },
  {
    name: 'Hackdays ideas',
    snippets: [
      {
        lastModified: 'date here',
        title: "Talking fish",
        note: "Get one of those old singing bass fish. Hook it up to an Arduino. Trigger its mouth to open and close based on audio waves. Then record your voice saying something."
      },
      {
        lastModified: 'date here',
        title: "Zelda game board",
        note: "Keep working on the Zelda game"
      },
      {
        lastModified: 'date here',
        title: "Homemade photos app with S3",
        note: "Replace Google Photos by dumping all my pics on AWS S3 and create a Next app as an interface to view them. Why? Massive storage for cheap."
      },
      {
        lastModified: 'date here',
        title: "Try a new language/framework",
        note: "Rust, Swift, Svelte"
      },
      {
        lastModified: 'date here',
        title: "Augmented reality Oregon Trail",
        note: "Hook it up to Apple Healthkit for steps data"
      },
      {
        lastModified: 'date here',
        title: "Try some #CreativeCoding",
        note: "https://twitter.com/miketuritzin/status/1476320114353979394?s=21"
      },
      {
        lastModified: 'date here',
        title: "Try some #CreativeCoding",
        note: "https://twitter.com/glitch/status/1476650196138405888?s=21"
      },
      {
        lastModified: 'date here',
        title: "Re-imagine HeroImageRight",
        note: `Use the canvas element to dislpay a truly 3D image alongside the text. Maybe scroll position tilts the 3D model on the Y axis as you scroll so as you pass it, you begin to see under it. Maybe headline animates on using the overflow hidden technique. Maybe use post processing over the top of the HTML making the text shimmer. Subtle particles flowing/spiraling around the 3D image?`
      },
      {
        lastModified: 'date here',
        title: "VS Code Extension",
        note: "Create a snippet library for CSS in JS (object syntax)"
      },
      {
        lastModified: 'date here',
        title: "Remix project",
        note: "Build something with Remix"
      },
    ]
  },
  {
    name: 'My very fancy snippet collection',
    snippets: [
      {
        lastModified: 'date here',
        image: 'https://pbs.twimg.com/media/EFUZQ-uXUAAAj-g?format=jpg&name=medium',
        title: "This one has an image",
        note: `Notes are automatically truncated to two lines for the preview as you can see here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
      },
      {
        lastModified: 'date here',
        image: 'https://pbs.twimg.com/media/FBsdNX3UcAYI9r5?format=jpg&name=4096x4096',
        note: `Here's a note without a title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        lastModified: 'date here',
        title: "Title 1",
        note: "Lorem ipsum dolor sit amet ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        lastModified: 'date here',
        title: "Title 2",
        note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        lastModified: 'date here',
        title: "Titles are truncated to one line for the preview as you can see here.",
        image: 'https://i.etsystatic.com/5882372/r/il/6ec79c/1574779667/il_1588xN.1574779667_72z4.jpg',
      },
      {
        lastModified: 'date here',
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        lastModified: 'date here',
        lastModified: 'date here',
        note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`
      },
    ]
  },
]

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

function generateCardMarkup({ image, title, note }) {
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

// ===============================
// Testing ping
// ===============================

const pingBtn = document.querySelector('.ping');
const message = document.querySelector('.message');

pingBtn.addEventListener('click', () => {
  fetch('http://localhost:3000/pings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: { "message": "ping" },
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
})



