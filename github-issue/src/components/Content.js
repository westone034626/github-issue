import LabelItemList from '../components/Label/LabelItemList';
import Counter from '../components/Counter';
import { useFetchData } from '../hooks';
import Loading from './Loading';

const Content = ({ tab }) => {
  const REQUEST_URL = `http://localhost:3001/${tab}`;
  const [data, isLoading] = useFetchData(REQUEST_URL);
  return (
    <>
      {isLoading ? (
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
