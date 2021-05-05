import styled from 'styled-components';

const LabelItemControllerWrapper = styled.div`
  display: flex;
`;

const LabelItemController = ({ onDeleteBtnClick }) => {
  return (
    <LabelItemControllerWrapper>
      <button>Edit</button>
      <button
        onClick={() => {
          onDeleteBtnClick();
        }}
        style={{ marginLeft: '5px' }}
      >
        Delete
      </button>
    </LabelItemControllerWrapper>
  );
};

export default LabelItemController;
