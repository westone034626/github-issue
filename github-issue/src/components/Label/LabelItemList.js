import LabelItem from './LabelItem';

const LabelItemList = ({ labelList }) => {
  return (
    <>
      {labelList.map((item, idx) => (
        <LabelItem
          key={idx}
          message={item.description}
          labelName={item.name}
          fontColor="white"
          buttonColor={item.color}
        />
      ))}
    </>
  );
};

export default LabelItemList;
