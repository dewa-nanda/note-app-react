import ItemNote from './ItemNote';
import NotFound from '../errorHandling/NotFound';

const ListNote = ({ datas, title, archived = false, onDelete, onArchived, searchFilter }) => {
  const datasFilterd = datas.filter((data) => data.archived === archived);
  const searchValue = datasFilterd.filter((data) => data.title.toLowerCase().includes(searchFilter));

  return (
    <section className="notes-arc" id={title}>
      <h1 className="title">{title}</h1>
      {datasFilterd.length !== 0 && searchValue.length !== 0 ? (
        <div className="card-wrapper">
          {searchFilter === ''
            ? datasFilterd.map((data, idx) => <ItemNote title={data.title} body={data.body} id={data.id} archived={data.archived} createdAt={data.createdAt} onDelete={onDelete} onArchived={onArchived} key={idx} />)
            : searchValue.map((data, idx) => <ItemNote title={data.title} body={data.body} id={data.id} archived={data.archived} createdAt={data.createdAt} onDelete={onDelete} onArchived={onArchived} key={idx} />)}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default ListNote;
