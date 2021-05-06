import LabelItem from './LabelItem';

const LabelItemList = ({ labelList, url, onSubmit, onDelete, onRefresh }) => {
  return (
    <>
      {labelList.map((item, idx) => (
        <LabelItem
          key={idx}
          message={item.description}
          labelName={item.name}
          fontColor="white"
          buttonColor={item.color}
          onEditBtnClick={{ url, edit: onSubmit, refresh: onRefresh }}
          onDeleteBtnClick={async () => {
            await onDelete(url, item.id);
            await onRefresh(url);
          }}
        />
      ))}
    </>
  );
};

export default LabelItemList;
