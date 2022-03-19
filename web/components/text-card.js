import React from 'react';
import { styled } from '@stitches/react';
import { Dialog, DialogTrigger, DialogWrapper } from './dialog';
import DialogViewTextSnippet from './dialog_view-text-snippet';

function checkIsQuote(note) {
  if (note.startsWith(`“`) || note.startsWith(`"`)) return true;
}

function transformQuoteMarkup(note) {
  if (note.includes(`–`)) {
    const splitNote = note.split(`–`);
    return (
      <div className='quote-container'>
        <p className='quote'>{splitNote[0]}</p>
        <p className='quote-attribution'>– {splitNote[1]}</p>
      </div>
    )
  } else {
    return (
      <div className='quote-container'>
        <p className='quote'>{note}</p>
      </div>
    )
  }
}

export default function TextCard({ id, title, note, data, setData }) {
  let Note;

  if (note) {
    const isQuote = checkIsQuote(note);

    if (isQuote) {
      Note = () => transformQuoteMarkup(note);
    } else {
      Note = <p>{note}</p>;
    }
  }

  return (
    <Dialog>
      <Content>
        {title && <h3>{title}</h3>}
        {note && <Note />}
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
  },

  '& > .quote-container': {
    '& .quote': {
      fontWeight: 'bold',
    },
    '& .quote-attribution': {
      marginTop: 20,
    },
  }
});
