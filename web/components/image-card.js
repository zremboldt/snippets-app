import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@stitches/react';
import { Dialog, DialogTrigger, DialogWrapper } from './dialog';
import DialogViewImageSnippet from './dialog_view-image-snippet';
import Image from 'next/image';

export default function ImageCard({
  id,
  title,
  note,
  link,
  image_width,
  image_height,
  image,
  optimisticImage,
  data,
  setData
}) {
  const [isLandscapeImg, setIsLandscapeImg] = useState(false);

  useEffect(() => {
    if (!image_width || !image_height) return;

    if (image_width > image_height) {
      setIsLandscapeImg(true)
    } else {
      setIsLandscapeImg(false)
    }
  }, [image_width, image_height])

  return (
    <Dialog>
      <Content>
        {/* <Image
          src={image}
          width={300}
          height={300}
          alt={title}
        /> */}
        <Img src={optimisticImage || image} />
        <TextContainer className='imageCardTextContainer'>
          {title && <h3>{title}</h3>}
          {note && <p>{note}</p>}
        </TextContainer>
      </Content>
      <DialogWrapper>
        <DialogViewImageSnippet
          isLandscapeImg={isLandscapeImg}
          image={optimisticImage || image}
          title={title}
          note={note}
          link={link}
          id={id}
          data={data}
          setData={setData}
        />
      </DialogWrapper>
    </Dialog>
  )
}

const Content = styled(DialogTrigger, {
  position: 'relative',
  display: 'flex',
  backgroundColor: 'black',
  overflow: 'hidden',
  borderRadius: 'var(--border-radius-card)',
  boxShadow: '0 10px 14px -6px hsla(30, 40%, 50%, 0.4)',
  cursor: 'zoom-in',
  appearance: 'none',
  border: 'none',

  '&:hover img': {
    opacity: 0.35,
  },

  '&:hover .imageCardTextContainer': {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },

  '&:focus-visible': {
    outline: '3px solid black',
    outlineOffset: 3,
  }
})

const Img = styled('img', {
  display: 'block',
  objectFit: 'cover',
  width: '100%',
  minHeight: '100%',
  pointerEvents: 'none',
  transition: 'opacity 300ms var(--ease-out-quart)',
})

const TextContainer = styled('div', {
  position: 'absolute',
  left: 0,
  bottom: 0,
  padding: 14,
  textAlign: 'left',
  transition: 'opacity 300ms var(--ease-out-quart), transform 300ms var(--ease-out-quart)',
  opacity: 0,
  transform: 'translate3d(0, 20px, 0)',

  '& > * + *': {
    marginTop: 8,
  },

  '& :is(p, h3)': {
    color: 'white',
    lineHeight: 1.4
  },

  '& p': {
    fontSize: 14,
    // Handles truncating text
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    //
  },

  '& h3': {
    fontSize: 16,
    fontWeight: 700,
    // Handles truncating text
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    //
  }
})
