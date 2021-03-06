import React from 'react';
import { styled } from '../styles/stitches-theme';
import { Dialog, DialogTrigger, DialogWrapper } from './dialog';
import DialogViewTextSnippet from './dialog_view-text-snippet';
import Note from './note';

export default function TextCard({ id, title, note, link, data, setData }) {
  return (
    <Dialog>
      <Content>
        {title && <h3>{title}</h3>}
        {note && <Note note={note} />}
      </Content>
      <DialogWrapper modalWidth={'narrow'}>
        <DialogViewTextSnippet
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
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--padding-card)',
  appearance: 'none',
  border: 'none',
  backgroundColor: 'white',
  borderRadius: 'var(--border-radius-card)',
  boxShadow: 'var(--box-shadow-card)',
  cursor: 'zoom-in',
  textAlign: 'left',
  '& > * + *': {
    marginTop: 20,
  },
  '&:focus-visible': {
    outline: '3px solid black',
    outlineOffset: 3,
  },
});
