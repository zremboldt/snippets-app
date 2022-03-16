import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';
import SnippetButtonsGroup from './snippet-buttons-group';

export default function DialogViewTextSnippet({ id, title, note, link, data, setData }) {
  return (
    <Container>
      {title && <h3>{title}</h3>}
      {note && <p>{note}</p>}
      <SnippetButtonsGroup
        id={id}
        link={link}
        data={data}
        setData={setData}
      />
    </Container>
  )
}

const Container = styled('div', {
  position: 'relative',
  padding: 34,
  paddingRight: 55,
  maxWidth: 600,
  minHeight: 256,
  '& > * + *': {
    marginTop: 20,
  },
});
