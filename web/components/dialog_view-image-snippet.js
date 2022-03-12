import React, { useState, useEffect, useRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';
import { AddToCollection } from '../assets/icon-components/add-to-collection';
import { LinkedWebpage } from '../assets/icon-components/linked-webpage';
import { Edit } from '../assets/icon-components/edit';
import { Trash } from '../assets/icon-components/trash';

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
      </TextContainer>
      <ButtonContainer>
        <Button>
          <AddToCollection />
        </Button>
        <Button>
          <LinkedWebpage />
        </Button>
        <Button>
          <Edit />
        </Button>
        <Button onClick={handleDelete}>
          <Trash />
        </Button>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled('div', {
  position: 'relative',
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
  borderRadius: 'var(--border-radius-dialog)',
})

const TextContainer = styled('div', {
  padding: 34,
  '& > * + *': {
    marginTop: 20,
  },
});

const ButtonContainer = styled('div', {
  position: 'absolute',
  top: 40,
  right: -20,
  '& > button + button': {
    marginTop: 6,
  }
});

const Button = styled('button', {
  ...baseButtonStyles,
  width: 40,
  height: 40,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: 'white',
});