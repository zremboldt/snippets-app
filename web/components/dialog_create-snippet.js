import React, { useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';

export default function DialogCreateSnippet({ setOpen, data, setData }) {
  const [image, setImage] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent file from being opened
  }

  const handleImageDrop = (e) => {
    e.preventDefault(); // Prevent file from being opened
    console.log('File(s) dropped');

    [...e.dataTransfer.items].forEach(item => {
      if (item.kind === 'file') {
        const file = item.getAsFile();
        setImage(file);
        console.log(file);
      }
    })
  }

  const handleSave = async (formValues) => {
    const url = 'http://localhost:3000/api/v1/snippets';
    let formData = new FormData();
    formData.append('title', formValues.title);
    formData.append('link', formValues.link);
    formData.append('note', formValues.note);
    formData.append('image', formValues.image);


    const response = await fetch(url, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: formData
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
      link: '',
      note: '',
    },
    onSubmit: (values) => {
      handleSave({
        ...values,
        image,
      });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ImageDropzone onDragOver={handleDragOver} onDrop={handleImageDrop}>Drop image here</ImageDropzone>
      <TitleInput
        type="text"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Add a title"
      />
      {/* <LinkInput
        type="url"
        name="link"
        onChange={formik.handleChange}
        value={formik.values.link}
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

const LinkInput = styled('input', {
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