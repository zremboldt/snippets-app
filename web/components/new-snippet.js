import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';

export default function NewSnippet() {
  // TODO: Connect inputs to fetch
  // const handleSave = () => {
  //   const url = 'http://localhost:3000/api/v1/snippets';
  //   const body = {
  //     title: inputTitle.value,
  //     link: inputLink.value,
  //     note: inputNote.value,
  //   };

  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": 'application/json' },
  //     body: JSON.stringify(body)
  //   })

  //   const data = await response.json();
  // }

  return (
    <Container>
      <ImageDropzone>Drop image here</ImageDropzone>
      <TitleInput type="text" placeholder="Add a title" />
      <UrlInput type="url" placeholder="Add a link" />
      <NoteTextarea placeholder="Add a note"></NoteTextarea>
      <SaveButton>Save</SaveButton>
    </Container>
  )
}

const Container = styled('div', {
  position: 'relative',
  padding: '24px',
});

const ImageDropzone = styled('div', {
  display: 'grid',
  placeContent: 'center',
  width: '100%',
  height: 300,
  backgroundColor: 'gold',
  borderRadius: 8,
  fontSize: 18,
});

const baseInputStyles = {
  width: '100%',
  height: 50,
  paddingInline: 2,
  marginTop: 14,
  fontFamily: 'var(--font-family)',
  fontSize: 18,
  border: 'none',
  borderBottom: '1px solid rgb(202, 202, 202)',
  resize: 'none',
  outline: 'none',
}

const TitleInput = styled('input', {
  ...baseInputStyles,
});

const UrlInput = styled('input', {
  ...baseInputStyles,
});

const NoteTextarea = styled('textarea', {
  ...baseInputStyles,
  height: 160,
  marginTop: 25,
  borderBottom: 'none',
});

const SaveButton = styled('button', {
  ...baseButtonStyles,
  position: 'absolute',
  bottom: 20,
  right: 20,
  transition: 'transform 300ms var(--ease-out-quart)',
  '&:focus-visible': {
    outline: '3px solid black',
    outlineOffset: 3,
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
});