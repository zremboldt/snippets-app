import React, { useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';
import { useFormik } from 'formik';

export default function DialogCreateSnippet({ setOpen, data, setData }) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [imageData, setImageData] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent file from being opened
    setIsDraggingOver(true);
  }

  const handleImageDrop = (e) => {
    e.preventDefault(); // Prevent file from being opened

    setIsDraggingOver(false);

    const droppedItem = [...e.dataTransfer.items][0];

    if (!droppedItem.type.startsWith('image/')) return;

    // ↓ Load the image so we can get the dimensions and a preview image which shows optimistically without fetching from the server.
    const file = droppedItem.getAsFile();
    const windowUrl = window.URL || window.webkitURL;

    let img = new Image();
    img.src = windowUrl.createObjectURL(file);
    img.onload = () => {
      setImageData({
        image: file,
        image_width: img.width,
        image_height: img.height,
        optimisticImage: img.src
      });
    }
  }

  const handleSave = async ({
    title,
    link,
    note,
    imageData,
  }) => {
    const url = 'http://localhost:3000/api/v1/snippets';
    let formData = new FormData();
    formData.append('title', title);
    formData.append('link', link);
    formData.append('note', note);
    formData.append('image_width', imageData?.image_width || null);
    formData.append('image_height', imageData?.image_height || null);
    formData.append('image', imageData?.image || null);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: formData
    })

    await response.json();

    const optimisticUi = {
      title,
      link,
      note,
      image_width: imageData?.image_width || null,
      image_height: imageData?.image_height || null,
      optimisticImage: imageData?.optimisticImage || null,
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
        imageData,
      });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ImageDropzone
        isDraggingOver={isDraggingOver}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDraggingOver(false)}
        onDrop={handleImageDrop}
      >
        {imageData ? 'Got it!' : 'Drop image here'}
      </ImageDropzone>
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
  variants: {
    isDraggingOver: {
      true: {
        outline: '3px solid black',
        outlineOffset: 3,
      }
    }
  }
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