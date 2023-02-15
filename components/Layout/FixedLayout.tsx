import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

export function FixedAppLayout({ children }: LayoutProps) {
  return <section>{children}</section>;
}

export function FixedTopLayout({ children }: LayoutProps) {
  return <FixedTopSection>{children}</FixedTopSection>;
}

export const FixedTopSection = styled.section`
  max-width: 43rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
`;

export function FixedBottomLayout({ children }: LayoutProps) {
  return <FixedBottomSection>{children}</FixedBottomSection>;
}

export const FixedBottomSection = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 43rem;
  padding: 0 1.6rem;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: inherit;
`;
