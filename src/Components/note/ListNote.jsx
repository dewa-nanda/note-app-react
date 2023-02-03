import ItemNote from './ItemNote';
import NotFound from '../errorHandling/NotFound';
import propTypes, { object } from 'prop-types';

const ListNote = ({ datas, archived = false, onDelete, onArchived, searchFilter }) => {
  const searchValue = datas.filter((data) => data.title.toLowerCase().includes(searchFilter));

  return (
    <section className="notes-arc">
      {searchValue.length !== 0 ? (
        <div className="card-wrapper">
          {searchFilter === ''
            ? searchValue.map((data, idx) => <ItemNote title={data.title} body={data.body} id={data.id} archived={data.archived} createdAt={data.createdAt} onDelete={onDelete} onArchived={onArchived} key={idx} />)
            : searchValue.map((data, idx) => <ItemNote title={data.title} body={data.body} id={data.id} archived={data.archived} createdAt={data.createdAt} onDelete={onDelete} onArchived={onArchived} key={idx} />)}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

ListNote.propTypes = {
  datas: propTypes.arrayOf(object).isRequired,
};

export default ListNote;
