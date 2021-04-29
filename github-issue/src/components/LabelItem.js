import styled from 'styled-components';
import LabelItemController from './LabelItemController';

const LabelItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 75px;
  border: 1px solid black;
`;

const LabelItem = ({ message, children }) => {
  return (
    <LabelItemWrapper>
      {children}
      <p style={{ margin: '0px 0px 0px 0px' }}>{message}</p>
      <LabelItemController>
        <button>Edit</button>
        <button>Delete</button>
      </LabelItemController>
    </LabelItemWrapper>
  );
};

export default LabelItem;
