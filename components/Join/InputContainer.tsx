import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

interface MotionProps {
  initial: object;
  animate: object;
  exit: object;
}

export default function InputContainer({ children }: Props) {
  return (
    <StyledInputContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled(motion.section)<MotionProps>``;
