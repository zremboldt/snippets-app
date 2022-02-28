import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';

export default function DialogCreateSnippet({ setOpen, data, setData }) {
  const handleSave = async (formValues) => {
    const url = 'http://localhost:3000/api/v1/snippets';

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(formValues)
    })

    await response.json();

    const optimisticUi = {
      ...formValues,
      id: data[0].id + 1,
    }

    setData([optimisticUi, ...data]); // Add new snippet to the view without making another server request.
    setOpen(false);
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      url: '',
      note: '',
    },
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ImageDropzone>Drop image here</ImageDropzone>
      <TitleInput
        type="text"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Add a title"
      />
      {/* <UrlInput
        type="url"
        name="url"
        onChange={formik.handleChange}
        value={formik.values.url}
        placeholder="Add a link"
      /> */}
      <NoteTextarea
        name="note"
        onChange={formik.handleChange}
        value={formik.values.note}
        placeholder="Add a note"
      ></NoteTextarea>
      <SaveButton type="submit">Save</SaveButton>
    </Form>
  )
}

const Form = styled('form', {
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