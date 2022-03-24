import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@stitches/react';
import { Dialog, DialogTrigger, DialogWrapper } from './dialog';
import DialogViewImageSnippet from './dialog_view-image-snippet';
import Image from 'next/image';


function checkIsQuote(note) {
  if (note.startsWith(`“`) || note.startsWith(`"`)) return true;
}

function splitQuote(note) {
  const lastQuotationMarkIndex = (note.includes(`”`) ? note.lastIndexOf(`”`) : note.lastIndexOf(`"`)) + 1;
  const quoteBody = note.slice(0, lastQuotationMarkIndex);
  const quoteAttribution = note.slice(lastQuotationMarkIndex).trim();

  return { quoteBody, quoteAttribution }
}

export default function Note({ note }) {
  const isQuote = checkIsQuote(note);

  if (isQuote) {
    const { quoteBody, quoteAttribution } = splitQuote(note);

    return (
      <>
        <QuoteBody>{quoteBody}</QuoteBody>
        {quoteAttribution && (
          <QuoteAttribution>{quoteAttribution}</QuoteAttribution>
        )}
      </>
    )
  }

  return (
    <p>{note}</p>
  )
}

const QuoteBody = styled('p', {
  fontWeight: 'bold',
})

const QuoteAttribution = styled('p', {
  marginTop: 20,
})