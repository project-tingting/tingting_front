import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

export function FixedAppLayout({ children }: LayoutProps) {
  return <section>{children}</section>;
}

export function FixedLayout({ children }: LayoutProps) {
  return <FixedSection>{children}</FixedSection>;
}

export const FixedSection = styled.section`
  max-width: 43rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1.6rem;
`;
