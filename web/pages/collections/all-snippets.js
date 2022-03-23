import { Dialog, DialogTrigger, DialogWrapper } from '../../components/dialog';
import Head from 'next/head'
import { useState, useEffect } from 'react'
import DialogCreateSnippet from '../../components/dialog_create-snippet';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../../styles/base-styles';
import TextCard from '../../components/text-card';
import ImageCard from '../../components/image-card';

export default function AllSnippets() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/api/v1/snippets', {
      method: "GET",
      headers: { "Content-Type": 'application/json' },
    })
      .then((res) => res.json())
      .then(({ status, message, data }) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return null;
  // if (isLoading) return <p>Loading...</p>

  return (
    <div className='layout'>
      <Head>
        <title>Snippets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data ? (
        <main>
          <PageTitle>All Snippets</PageTitle>

          <Grid>
            {data.map((snippet) => {
              if (snippet.optimisticImage || snippet.image) {
                return (
                  <ImageCard
                    key={snippet.id}
                    setData={setData}
                    data={data}
                    {...snippet}
                  />
                )
              }

              return (
                <TextCard
                  key={snippet.id}
                  setData={setData}
                  data={data}
                  {...snippet}
                />
              )
            })}
          </Grid>
        </main>
      ) : (
        <p>No snippets found.</p>
      )}

      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <NewSnippetButton>New snippet +</NewSnippetButton>
        <DialogWrapper>
          <DialogCreateSnippet
            setOpen={setOpen}
            data={data}
            setData={setData}
          />
        </DialogWrapper>
      </Dialog>
    </div>
  )
}

const PageTitle = styled('h1', {
  marginBottom: 60,
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 24,
});

const NewSnippetButton = styled(DialogTrigger, {
  ...baseButtonStyles,
  position: 'fixed',
  bottom: 'min(30px, 2vw)',
  right: 'min(30px, 2vw)',
  '&:focus-visible': {
    outline: '3px solid black',
    outlineOffset: 3,
  }
});