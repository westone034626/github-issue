import styled from 'styled-components';
import LabelDesc from './LabelDesc';
import LabelItemController from './LabelItemController';
import Label from './Label';

const LabelItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 75px;
  border: 1px solid black;
`;

const LabelItemSubWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

const LabelItem = ({ message, labelName, buttonColor, fontColor }) => {
  return (
    <LabelItemWrapper>
      <Label
        message={labelName}
        fontColor={fontColor}
        buttonColor={buttonColor}
      />
      <LabelItemSubWrapper>
        <LabelDesc message={message} />
        <LabelItemController />
      </LabelItemSubWrapper>
    </LabelItemWrapper>
  );
};

export default LabelItem;