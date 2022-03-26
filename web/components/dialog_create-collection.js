import React, { useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '../styles/stitches-theme';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';

export default function DialogCreateCollection({ setOpen, data, setData, currentCollectionId }) {

  const handleSave = async ({ name }) => {
    const url = 'http://localhost:3000/api/v1/collections';

    const response = await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })

    await response.json();

    const optimisticUi = { name }

    // Add new collection to the view without making another server request.
    setData([optimisticUi, ...data]);
    setOpen(false);
  }

  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: (values) => {
      handleSave({ ...values });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <NameInput
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="Name your collection"
      />
      <SaveButton type="submit">Save</SaveButton>
    </Form>
  )
}

const Form = styled('form', {
  position: 'relative',
  padding: '24px',
});

const NameInput = styled('input', {
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
});

const SaveButton = styled('button', {
  ...baseButtonStyles,
  position: 'absolute',
  top: 20,
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