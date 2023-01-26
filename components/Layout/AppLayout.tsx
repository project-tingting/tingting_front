import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return <Root>{children}</Root>;
}

export const Root = styled.section`
  margin: 0 auto;
  max-width: 43rem;
`;
