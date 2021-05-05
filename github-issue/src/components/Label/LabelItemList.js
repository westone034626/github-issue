import LabelItem from './LabelItem';

const LabelItemList = ({ labelList, onDelete }) => {
  const { url, del, refresh } = onDelete;
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
            await del(url, item.id);
            await refresh(url);
          }}
        />
      ))}
    </>
  );
};

export default LabelItemList;
