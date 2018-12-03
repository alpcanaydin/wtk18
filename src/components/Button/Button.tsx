import styled from '@/theme';

const Button = styled.button`
  padding: 12px 18px;
  border: none;
  border-radius: 1.75rem;
  cursor: pointer;
  font-size: 16px;
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
