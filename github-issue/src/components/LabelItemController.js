import styled from 'styled-components';

const LabelItemControllerWrapper = styled.div`
  display: flex;
`;

const LabelItemController = ({ children }) => {
  return <LabelItemControllerWrapper>{children}</LabelItemControllerWrapper>;
};

export default LabelItemController;
