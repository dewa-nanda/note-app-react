import ItemNote from './ItemNote';

const ListNote = ({ datas, title, archived = false }) => {
  // const dataArchived = datas.filter((data) => data.archived);
  return (
    <section className="notes-arc">
      <h1 className="title">{title}</h1>
      <div className="card-wrapper">
        {datas
          .filter((data) => data.archived === archived)
          .map((data, idx) => (
            <ItemNote title={data.title} body={data.body} archived={data.archived} createdAt={data.createdAt} key={idx} />
          ))}
      </div>
    </section>
  );
};

export default ListNote;
