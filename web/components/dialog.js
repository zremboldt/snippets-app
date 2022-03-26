import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled, keyframes } from '../styles/stitches-theme';
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

const fadein = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const animateDialog = {
  animationName: fadein,
  animationDuration: '150ms',
  animationFillMode: 'forwards',
  animationTimingFunction: 'var(--ease-out-quart)',
}

const Overlay = styled(DialogPrimitive.Overlay, {
  ...fullScreenStyles,
  ...animateDialog,
  backgroundColor: 'hsla(50, 100%, 50%, 0.7)',
  backdropFilter: 'blur(10px)',
});

const FullScreenContainer = styled('div', {
  ...fullScreenStyles,
  overflowY: 'auto',
  padding: '30px 4%',
});

const Content = styled(DialogPrimitive.Content, {
  ...animateDialog,
  width: 'min(600px, 100%)',
  background: 'white',
  borderRadius: 'var(--border-radius-dialog)',
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