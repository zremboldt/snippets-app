import React, { useState } from 'react';
import { keyframes, styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';
import { AddToCollection } from '../assets/icon-components/add-to-collection';
import { LinkedWebpage } from '../assets/icon-components/linked-webpage';
import { Edit } from '../assets/icon-components/edit';
import { Trash } from '../assets/icon-components/trash';

export default function SnippetButtonsGroup({ id, link, data, setData }) {
  const [isDeleteAvailable, setIsDeleteAvailable] = useState(false);

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
    <Group>
      <IconButton>
        <AddToCollection />
      </IconButton>
      {link && (
        <IconLink href={link} target="_blank" rel="noreferrer noopener">
          <LinkedWebpage />
        </IconLink>
      )}
      <IconButton>
        <Edit />
      </IconButton>
      <ButtonContainer>
        <IconButton onClick={() => setIsDeleteAvailable(!isDeleteAvailable)}>
          <Trash />
        </IconButton>
        {isDeleteAvailable && (
          <SecondaryButton onClick={handleDelete}>
            Delete Snippet
          </SecondaryButton>
        )}
      </ButtonContainer>
    </Group>
  )
}

const fadein = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3d(8px, 0, 0)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
});

const animateButton = {
  animationName: fadein,
  animationDuration: '400ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'var(--ease-out-quart)',
}

const Group = styled('div', {
  position: 'absolute',
  top: 40,
  right: -17,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  '& > * + *': {
    marginTop: 6,
  }
});

const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
});

const focusStyles = {
  '&:focus-visible': {
    outline: '2px solid black',
    outlineOffset: 2,
  },
}

const baseIconButtonStyles = {
  ...baseButtonStyles,
  ...focusStyles,
  width: 40,
  height: 40,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  transition: 'transform 300ms var(--ease-out-quart)',

  '&:active': {
    transform: 'scale(0.9)',
  },
}

const IconButton = styled('button', {
  ...baseIconButtonStyles,
});

const IconLink = styled('a', {
  ...baseIconButtonStyles,
});

const SecondaryButton = styled('button', {
  ...baseButtonStyles,
  ...animateButton,
  ...focusStyles,
  height: 40,
  marginRight: 6,
  padding: '0 18px',
  fontSize: 18,
  transition: 'background-color 200ms var(--ease-out-quart)',

  '&:hover': {
    backgroundColor: 'hsl(5, 90%, 50%)',
  },

  '&:active': {
    backgroundColor: 'hsl(0, 100%, 65%)',
  },
});
