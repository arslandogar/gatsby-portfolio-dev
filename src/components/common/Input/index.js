import styled from 'styled-components';
import '../../../assets/fonts.css';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #38d39f;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  font-family: 'Source Code Pro';

  ${({ error }) =>
    error &&
    `
    border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`;
