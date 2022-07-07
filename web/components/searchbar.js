import React from 'react';
import { styled } from '../styles/stitches-theme';
import { SearchIcon } from '../assets/icon-components/search';

export default function Searchbar({ setSearchQuery }) {
  return (
    <SearchContainer>
      <Input onChange={(e) => setSearchQuery(e.target.value)} type="text" />
      <SearchIcon />
    </SearchContainer>
  )
}

const SearchContainer = styled('div', {
  position: 'fixed',
  top: 'min(30px, 2vw)',
  right: 'min(30px, 2vw)',
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'black',
  boxShadow: '0 14px 20px -8px hsla(46, 100%, 19%, 0.5)',
  color: 'white',
  borderRadius: 999,
  '& svg': {
    margin: '0 20px 1px 9px',
  }
});

const Input = styled('input', {
  borderRadius: 999,
  height: 42,
  border: 'none',
  margin: 6,
  padding: '14px 18px',
  fontSize: 18,
  '&:focus-visible': {
    outline: '2px solid black',
    outlineOffset: -4,
  },
});