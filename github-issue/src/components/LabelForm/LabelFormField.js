import { getRandomColor } from '../../utils';
import styled from 'styled-components';
import { useState } from 'react';
import LabelInputField from './LabelInputField';
import LabelColorField from './LabelColorField';
import LabelButtonField from './LabelButtonField';

const LabelForm = styled.form`
  width: 100%;
  margin-top: 25px;
`;

const LabelFormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const LabelFormField = ({
  onSubmit,
  onCancel,
  name,
  setName,
  color,
  setColor,
}) => {
  const { url, post, refresh } = onSubmit;
  const [description, setDescription] = useState('');
  const resetFormField = () => {
    setName(() => '');
    setDescription(() => '');
    setColor(() => 'black');
  };
  return (
    <LabelForm>
      <LabelFormWrapper>
        <LabelInputField
          label="Label name"
          placeHolder="Label name"
          data={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <LabelInputField
          label="Description"
          placeHolder="Description (optional)"
          data={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <LabelColorField
          label="color"
          data={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          onClick={(e) => {
            e.preventDefault();
            setColor(getRandomColor());
          }}
        />
        <div>
          <LabelButtonField
            label="cancel"
            onClick={(e) => {
              e.preventDefault();
              onCancel();
            }}
            disabled={false}
          />
          <LabelButtonField
            label="create label"
            disabled={name === '' ? true : false}
            style={{
              marginLeft: '5px',
              color: 'white',
              backgroundColor: 'green',
              opacity: name === '' ? '0.1' : '1',
            }}
            onClick={async (e) => {
              e.preventDefault();
              await post(url, { name, description, color });
              resetFormField();
              await refresh(url);
            }}
          />
        </div>
      </LabelFormWrapper>
    </LabelForm>
  );
};

export default LabelFormField;
