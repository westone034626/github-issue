import styled from 'styled-components';

const LabelWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.buttonColor};
  padding: 3px 7px 3px 7px;
  border-radius: 15%;
`;

const LabelContent = styled.p`
  color: ${(props) => props.fontColor};
  margin: 0 0 0 0;
  font-weight: bold;
`;

const Label = ({ buttonColor, fontColor, message }) => {
  return (
    <LabelWrapper buttonColor={buttonColor}>
      <LabelContent fontColor={fontColor}>{message}</LabelContent>
    </LabelWrapper>
  );
};

export default Label;
