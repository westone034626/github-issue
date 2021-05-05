import LabelItem from './LabelItem';

const LabelItemList = ({ labelList, onDelete, url }) => {
  return (
    <>
      {labelList.map((item, idx) => (
        <LabelItem
          key={idx}
          message={item.description}
          labelName={item.name}
          fontColor="white"
          buttonColor={item.color}
          onDeleteBtnClick={async () => {
            await onDelete.del(url, item.id);
            await onDelete.refresh(url);
          }}
        />
      ))}
    </>
  );
};

export default LabelItemList;
