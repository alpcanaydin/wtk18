import styled from '@/theme';

const Button = styled.button`
  font-size: 16px;
  padding: 12px 18px;
  border-radius: 1.75rem;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.whiteColor};
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.bodyColor};
`;
