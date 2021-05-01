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

const Controller = ({ onClick, itemName }) => {
  return (
    <ControllerWrapper>
      <ScreenChanger>
        <Button
          message="Labels"
          fontColor="white"
          buttonColor="blue"
          iconName="label"
          onClick={() => onClick('labels')}
        />
        <Button
          message="Milestones"
          fontColor="black"
          buttonColor="white"
          iconName="mileStone"
          onClick={() => onClick('mileStones')}
        />
      </ScreenChanger>

      <Button
        message={`New ${itemName}`}
        fontColor="white"
        buttonColor="green"
      />
    </ControllerWrapper>
  );
};

export default Controller;
