// ===============================
// Populate cards
// ===============================

function generateCardMarkup({ id, image, title, note }) {
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
      <button onclick="deleteSnippet(${id})">Delete</button>
    </div>
  `
}

const deleteSnippet = async (id) => {
  const url = `http://localhost:3000/api/v1/snippets/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": 'application/json' },
  })

  const json = await response.json();
  console.log(json)
}

const getSnippets = async () => {
  const url = 'http://localhost:3000/api/v1/snippets';

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": 'application/json' },
  })

  const json = await response.json();
  return json.data
}

async function generateCards() {
  const snippets = await getSnippets();

  const cardsMarkup = snippets.map(snippet => generateCardMarkup(snippet)).join('');

  const cardsContainerEl = document.querySelector('.cards-container');

  cardsContainerEl.insertAdjacentHTML('beforeend', cardsMarkup);
}

generateCards();

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


const newSnippetModal = document.querySelector('.new-snippet');
// const inputImage = newSnippetModal.querySelector('.new-snippet_title-input');
const inputTitle = newSnippetModal.querySelector('.new-snippet_title-input');
const inputLink = newSnippetModal.querySelector('.new-snippet_url-input');
const inputNote = newSnippetModal.querySelector('.new-snippet_textarea');
const saveButton = newSnippetModal.querySelector('.new-snippet_save-button');

const saveSnippet = async () => {
  const url = 'http://localhost:3000/api/v1/snippets';
  const body = {
    title: inputTitle.value,
    link: inputLink.value,
    note: inputNote.value,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify(body)
  })

  const data = await response.json();
  console.log(data)
}

saveButton.addEventListener('click', saveSnippet);
