import LabelItemList from '../components/Label/LabelItemList';
import Counter from '../components/Counter';
import { useFetchData } from '../hooks';
import Loading from './Loading';
import { useEffect } from 'react';
import NewLabel from './NewLabel';

const Content = ({ tab, isNewBtnClick }) => {
  const REQUEST_URL = `http://localhost:3001/${tab}`;
  const { data, pending, run } = useFetchData();
  useEffect(() => {
    run(REQUEST_URL);
  }, [REQUEST_URL]);
  return (
    <>
      {isNewBtnClick && (
        <NewLabel url={REQUEST_URL} onCreateButtonClick={run} />
      )}
      {pending ? (
        <Loading /> // Would implement a loading component later.
      ) : (
        <>
          <Counter count={data.length} itemName="labels" />
          {tab === 'labels' ? (
            <LabelItemList labelList={data} />
          ) : (
            'Milestone page'
          )}
        </>
      )}
    </>
  );
};

export default Content;
