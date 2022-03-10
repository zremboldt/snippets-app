import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';

export default function DialogViewTextSnippet({ id, title, note, data, setData }) {
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
    <Container>
      {title && <h3>{title}</h3>}
      {note && <p>{note}</p>}
      <button onClick={handleDelete}>Delete</button>
    </Container>
  )
}

const Container = styled('div', {
  padding: 34,
  maxWidth: 600,
  '& > * + *': {
    marginTop: 20,
  },
});
