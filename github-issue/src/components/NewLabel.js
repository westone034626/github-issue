import styled from 'styled-components';
import Label from './Label/Label';
import { usePostData } from '../hooks';

const NewLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;

  border: 1px solid black;
  padding: 10px 10px 10px 10px;
`;

const NewLabel = () => {
  return (
    <NewLabelWrapper>
      <Label />
      <form style={{ width: '100%', marginTop: '25px' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              width: '25%',
            }}
          >
            <p>label name</p>
            <input style={{ width: '100%', height: '27px' }} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              width: '25%',
            }}
          >
            <p>description</p>
            <input style={{ width: '100%', height: '27px' }} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              width: '25%',
            }}
          >
            <p>color</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <button style={{ width: '15%', height: '27px' }} />
              <input type="color" style={{ width: '80%', height: '27px' }} />
            </div>
          </div>
          <div>
            <button>cancel</button>
            <button
              type="submit"
              style={{ marginLeft: '5px' }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              create label
            </button>
          </div>
        </div>
      </form>
    </NewLabelWrapper>
  );
};

export default NewLabel;
