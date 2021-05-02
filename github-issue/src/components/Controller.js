import Button from './Button';
import styled from 'styled-components';

const ControllerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const ScreenChanger = styled.div`
  display: flex;
`;

const Controller = ({ itemName, onTabClick, onNewBtnClick }) => {
  return (
    <ControllerWrapper>
      <ScreenChanger>
        <Button
          message="Labels"
          fontColor="white"
          buttonColor="blue"
          iconName="label"
          onClick={() => onTabClick('labels')}
        />
        <Button
          message="Milestones"
          fontColor="black"
          buttonColor="white"
          iconName="mileStone"
          onClick={() => onTabClick('mileStones')}
        />
      </ScreenChanger>

      <Button
        message={`New ${itemName}`}
        fontColor="white"
        buttonColor="green"
        onClick={() => {
          onNewBtnClick();
        }}
      />
    </ControllerWrapper>
  );
};

export default Controller;
