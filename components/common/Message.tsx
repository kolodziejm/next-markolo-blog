import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const Message = styled.p`
  ${tw`text-center mb-1`};

  ${props => props.error && css`
    ${tw`text-red-700`};
  `};
`;

export default Message;