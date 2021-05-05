import styled from 'styled-components';
import Label from './Label/Label';
import { usePostData } from '../hooks';
import Icon from '../icons';
import { useState } from 'react';

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

const NewLabel = ({ url, onCreateButtonClick }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('black');
  const { pending, error, run } = usePostData();
  const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const onColorRefreshButtonClick = () => {
    const newColor = getRandomColor();
    setColor(() => newColor);
  };
  const resetFormField = () => {
    setName(() => '');
    setDescription(() => '');
    setColor(() => 'black');
  };
  return (
    <NewLabelWrapper>
      <Label
        message={name === '' ? 'Label preview' : name}
        buttonColor={color}
      />
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
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{ width: '100%', height: '27px' }}
            />
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
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              style={{ width: '100%', height: '27px' }}
            />
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
              <button
                style={{ width: '27px', height: '27px' }}
                onClick={(e) => {
                  e.preventDefault();
                  onColorRefreshButtonClick();
                }}
              >
                {Icon('refresh')}
              </button>
              <input
                type="color"
                style={{ width: '85%', height: '27px' }}
                value={color}
                onChange={(e) => {
                  setColor(() => e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                resetFormField();
              }}
            >
              cancel
            </button>
            <button
              disabled={name === '' ? true : false}
              type="button"
              style={{
                marginLeft: '5px',
                color: 'white',
                backgroundColor: 'darkgreen',
                opacity: name === '' ? '0.1' : '1',
              }}
              onClick={async (e) => {
                e.preventDefault();
                await run(url, { name, description, color });
                resetFormField();
                await onCreateButtonClick(url);
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
