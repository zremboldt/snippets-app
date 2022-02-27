import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { baseButtonStyles } from '../styles/base-styles';

const DialogContent = ({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <Overlay />
    <FullScreenContainer {...props} ref={forwardedRef}>
      <Content>
        {children}
        <CloseButton>
          <Cross1Icon />
        </CloseButton>
      </Content>
    </FullScreenContainer>
  </DialogPrimitive.Portal>
)

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogWrapper = React.forwardRef(DialogContent);

const fullScreenStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
}

const Overlay = styled(DialogPrimitive.Overlay, {
  ...fullScreenStyles,
  background: 'rgba(0 0 0 / 0.5)',
});

const FullScreenContainer = styled('div', {
  ...fullScreenStyles,
  overflowY: 'auto',
  backgroundColor: 'hsla(50, 100%, 50%, 0.6)',
  backdropFilter: 'blur(10px)',
  padding: '30px 4%',
});

const Content = styled(DialogPrimitive.Content, {
  minWidth: 300,
  background: 'white',
  borderRadius: 18,
});

const CloseButton = styled(DialogPrimitive.Close, {
  ...baseButtonStyles,
  position: 'fixed',
  top: 18,
  right: 18,
  padding: 16,
  '&:focus-visible': {
    outline: '3px solid black',
    outlineOffset: 3,
  },
  '& svg': {
    color: 'white',
    width: 20,
    height: 20
  }
});