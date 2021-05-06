import LabelItemList from '../components/Label/LabelItemList';
import Counter from '../components/Counter';
import { useDeleteData, useFetchData, usePostData } from '../hooks';
import Loading from './Loading';
import { useEffect } from 'react';
import LabelEditor from './LabelForm/LabelEditor';

const Content = ({ tab, isNewBtnClick, onCancelBtnClick }) => {
  const REQUEST_URL = `http://localhost:3001/${tab}`;
  const { data, pending, run: fetchData } = useFetchData();
  const { run: deleteData } = useDeleteData();
  const { run: postData } = usePostData();
  useEffect(() => {
    fetchData(REQUEST_URL);
  }, [REQUEST_URL]);
  return (
    <>
      {isNewBtnClick && (
        <LabelEditor
          onSubmit={{ url: REQUEST_URL, post: postData, refresh: fetchData }}
          onCancel={onCancelBtnClick}
        />
      )}
      {pending ? (
        <Loading /> // Would implement a loading component later.
      ) : (
        <>
          <Counter count={data.length} itemName={tab} />
          {tab === 'labels' ? (
            <LabelItemList
              labelList={data}
              onDelete={{
                url: REQUEST_URL,
                del: deleteData,
                refresh: fetchData,
              }}
            />
          ) : (
            'Milestone page'
          )}
        </>
      )}
    </>
  );
};

export default Content;
