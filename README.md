# Create a web app called Snippets

<video src='./snippets-app.mp4' width='400px'>

## Elements

- A "Snippet" is a piece of text, an image, or both.
- A "Collection" is a collection of snippets.

## Screens

### All Collections screen

Shows all of your snippet collections.

- Collections are similar to the concept of albums in Google Photos. The same snippet could belong to more than one collection. Collections are essentially tags.
- By default your first collection is automatically created and will be the "All Snippets" collection.

### Collection screen

Shows all of the snippets within a single collection.

### Snippet screen

Shows a single snippet.

- Shows image large (when applicable).
- Shows text.
- Shows link/url where text or image was referenced.
- Shows collection/s this snippet may belong to.
- Any of these fields can be modified on this screen.

### Create Snippet screen

Shows fields used to create a snippet.

- Image
- Text
- Link/url
- Collection/s

## Features

### Smart labels via machine learning

When a user uploads an image an asynchronous job is enqueued via Redis/Sidekiq. The job makes a call to an AWS service called [Rekognition](https://aws.amazon.com/rekognition/) which uses machine learning to analyze the image, returning labels and a confidence score for the things it observes are part of the image. Those labels are attached to the snippet making it easy to search the app and find the Snippet you’re looking for later on.
