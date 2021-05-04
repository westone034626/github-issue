import styled from 'styled-components';

const LabelItemControllerWrapper = styled.div`
  display: flex;
`;

const LabelItemController = () => {
  return (
    <LabelItemControllerWrapper>
      <button>Edit</button>
      <button style={{ marginLeft: '5px' }}>Delete</button>
    </LabelItemControllerWrapper>
  );
};

export default LabelItemController;
