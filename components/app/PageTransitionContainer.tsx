import { ReactElement } from 'react';
import { PageTransition } from 'next-page-transitions';
import styled from 'styled-components';

const PageTransitionWrapper = styled.div`
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

interface Props {
  children: ReactElement;
}

function PageTransitionContainer({ children }: Props) {
  return (
    <PageTransitionWrapper>
      <PageTransition timeout={200} classNames="page-transition">
        {children}
      </PageTransition>
    </PageTransitionWrapper>
  );
}

export default PageTransitionContainer;