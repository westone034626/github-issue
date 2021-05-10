import Controller from '../Controller';
import Content from '../Content';
import { useState, createContext } from 'react';
import { useToggle } from '../../hooks';
import styled from 'styled-components';
export const MainContext = createContext();

const MainWrapper = styled.div`
  padding: 25px;
`;
const Main = () => {
  const [currentTab, setCurrentTab] = useState('labels');
  const [isNewBtnClick, setIsNewBtnClick] = useToggle();
  return (
    <MainContext.Provider value={{ setIsNewBtnClick }}>
      <MainWrapper>
        <Controller
          itemName={currentTab}
          onTabClick={setCurrentTab}
          onNewBtnClick={setIsNewBtnClick}
        />
        <Content
          tab={currentTab}
          isNewBtnClick={isNewBtnClick}
          onCancelBtnClick={setIsNewBtnClick}
        />
      </MainWrapper>
    </MainContext.Provider>
  );
};

export default Main;
