import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color || '#90d979'};
  color: ${(props) => (props.color ? '#f79898' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #2E186A' : '0px')};
  border-radius: 8px;
  height: 40px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '110px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '90px' : '100%')};
  }
`;
