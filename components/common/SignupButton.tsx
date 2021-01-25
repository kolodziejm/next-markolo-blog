import tw, { styled } from 'twin.macro';

const SignupButton = styled.button`
  ${tw`rounded-full uppercase bg-primary text-indigo-100 py-2 ease-in-out duration-100 w-full shadow cursor-pointer transform`};

  &:hover {
    ${tw`shadow-xl -translate-y-px`}
  }

  &:active {
    ${tw`shadow-none translate-y-px`}
  }
`;

export default SignupButton;