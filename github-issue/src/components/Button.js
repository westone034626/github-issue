import styled from 'styled-components';
import Icon from '../icons';

const ButtonWrapper = styled.div`
  display: inline-flex;
  //   ref: https://stackoverflow.com/questions/37300614/how-to-adapt-a-flex-divs-width-to-content
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.buttonColor};
  padding: 5px 10px 5px 10px;
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
