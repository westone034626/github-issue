import Controller from './Controller';
import Content from '../components/Content';
import { useState } from 'react';
import { useToggle } from '../hooks';
import styled from 'styled-components';
import NewLabel from './NewLabel';

const MainWrapper = styled.div`
  padding: 25px;
`;
const Main = () => {
  const [currentTab, setCurrentTab] = useState('labels');
  const [isNewBtnClick, setIsNewBtnClick] = useToggle();
  return (
    <MainWrapper>
      <Controller
        itemName={currentTab === 'labels' ? 'label' : 'milestone'}
        onTabClick={setCurrentTab}
        onNewBtnClick={setIsNewBtnClick}
      />
      {isNewBtnClick && <NewLabel />}
      <Content tab={currentTab} />
    </MainWrapper>
  );
};

export default Main;
