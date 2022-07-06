import React, { useState, useEffect, useRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { keyframes, styled } from '../styles/stitches-theme';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';
import { AddToCollection } from '../assets/icon-components/add-to-collection';
import { LinkedWebpage } from '../assets/icon-components/linked-webpage';
import { Edit } from '../assets/icon-components/edit';
import { Trash } from '../assets/icon-components/trash';
import SnippetButtonsGroup from './snippet-buttons-group';

// Doc on stitches breakpoints: https://stitches.dev/docs/breakpoints#setting-an-initial-variant

export default function DialogViewImageSnippet({ id, title, note, link, image, labels, data, setData, isLandscapeImg = false }) {
  const [isDeleteAvailable, setIsDeleteAvailable] = useState(false);

  console.log(labels)
  return (
    <Container
      layout={isLandscapeImg ? 'column' : {
        '@initial': 'column',
        '@bp1': 'row'
      }}
    >
      <Img src={image} alt="" />
      <TextContainer>
        {title && <h3>{title}</h3>}
        {note && <p>{note}</p>}
        <LabelContainer>
          {labels && labels.map(({name, id}) => <Label key={id}>{name}</Label>)}
        </LabelContainer>
      </TextContainer>
      <SnippetButtonsGroup
        id={id}
        link={link}
        data={data}
        setData={setData}
      />
    </Container>
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

const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  variants: {
    layout: {
      row: {
        flexDirection: 'row',
        '& img': {
          width: '50%',
        }
      },
      column: {
        flexDirection: 'column',
        '& img': {
          width: 'calc(100% - 12px)',
        }
      }
    }
  }
});

const Img = styled('img', {
  display: 'block',
  objectFit: 'cover',
  pointerEvents: 'none',
  borderRadius: 'calc(var(--border-radius-dialog) - 4px)',
  margin: 6,
})

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: 34,
  paddingRight: 40,
  '& > * + *': {
    marginTop: 20,
  },
});

const LabelContainer = styled('div', {
  marginTop: 'auto',
  paddingTop: 20,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 5,
});

const Label = styled('p', {
  padding: '2px 10px',
  backgroundColor: 'gold',
  borderRadius: 999,
  fontSize: 14,

});

const ButtonsGroup = styled('div', {
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
