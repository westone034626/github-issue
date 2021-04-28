import styled from 'styled-components';
import Icon from '../icons';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  background-color: ${(props) => props.buttonColor};
  padding: 5px 0 5px 0;
  border: 1px solid black;
`;

const ButtonContent = styled.p`
  color: ${(props) => props.fontColor};
  margin: 0 0 0 0;
  font-weight: bold;
`;

const Button = ({ message, buttonColor, fontColor, iconName }) => {
  return (
    <ButtonWrapper buttonColor={buttonColor}>
      <ButtonContent fontColor={fontColor}>
        {Icon(iconName)}
        {message}
      </ButtonContent>
    </ButtonWrapper>
  );
};

export default Button;
