import { Dialog, DialogTrigger, DialogWrapper } from '../../components/dialog';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/AllSnippets.module.css'
import { useState, useEffect } from 'react'
import DialogCreateSnippet from '../../components/dialog_create-snippet';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../../styles/base-styles';
import DialogViewSnippet from '../../components/dialog_view-snippet';

export default function AllSnippets() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

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

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No snippets found.</p>

  return (
    <div className={'layout'}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>All Snippets</h1>

        <div className={styles.grid}>
          {data.map(({ note, title, image, id }) => {
            if (image) {
              return (
                <div className={styles.imageCard} key={id}>
                  <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={title}
                  />
                  <div className={styles.imageCardTextContainer}>
                    {title && <h3>{title}</h3>}
                    {note && <p>{note}</p>}
                  </div>
                </div>
              )
            }

            return (
              <Dialog key={id}>
                <TextCard>
                  {title && <h3>{title}</h3>}
                  {note && <p>{note}</p>}
                </TextCard>
                <DialogWrapper>
                  <DialogViewSnippet
                    title={title}
                    note={note}
                    id={id}
                    data={data}
                    setData={setData}
                  />
                </DialogWrapper>
              </Dialog>
            )
          })}
        </div>
      </main>

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

const TextCard = styled(DialogTrigger, {
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