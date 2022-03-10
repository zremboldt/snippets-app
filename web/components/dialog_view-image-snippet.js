import React, { useState, useEffect, useRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';

export default function DialogViewImageSnippet({ id, title, note, image, data, setData, isLandscapeImg = false }) {
  const handleDelete = async () => {
    const url = `http://localhost:3000/api/v1/snippets/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": 'application/json' },
    })

    const updatedData = data.filter((snippet) => snippet.id !== id);
    setData(updatedData);
  }

  return (
    <Container layout={isLandscapeImg ? 'column' : 'row'}>
      <Img src={image} alt="" />
      <TextContainer>
        {title && <h3>{title}</h3>}
        {note && <p>{note}</p>}
        <button onClick={handleDelete}>Delete</button>
      </TextContainer>
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex',
  variants: {
    layout: {
      row: {
        maxWidth: 800,
        flexDirection: 'row',
        '& img': {
          width: '50%',
        }
      },
      column: {
        maxWidth: 600,
        flexDirection: 'column',
      }
    }
  }
});

const Img = styled('img', {
  display: 'block',
  objectFit: 'cover',
  // width: '100%',
  pointerEvents: 'none',
})

const TextContainer = styled('div', {
  padding: 34,
  '& > * + *': {
    marginTop: 20,
  },
});