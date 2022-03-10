import React from 'react';
import { styled } from '@stitches/react';
import { Dialog, DialogTrigger, DialogWrapper } from './dialog';
import DialogViewTextSnippet from './dialog_view-text-snippet';

export default function TextCard({ id, title, note, data, setData }) {
  return (
    <Dialog>
      <Content>
        {title && <h3>{title}</h3>}
        {note && <p>{note}</p>}
      </Content>
      <DialogWrapper>
        <DialogViewTextSnippet
          title={title}
          note={note}
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
  padding: 30,
  appearance: 'none',
  border: 'none',
  backgroundColor: 'white',
  borderRadius: 'var(--border-radius-snippet)',
  boxShadow: '0 10px 14px -6px hsla(30, 40%, 50%, 0.4)',
  cursor: 'zoom-in',
  textAlign: 'left',
  '& > * + *': {
    marginTop: 20,
  },
  '&:focus-visible': {
    outline: '3px solid black',
    outlineOffset: 3,
  }
});
