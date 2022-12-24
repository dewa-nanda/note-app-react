const ItemNote = ({ title, body, archived, createdAt, id, onDelete, onArchived }) => {
  return (
    <div className="card-item">
      <div className="card-header">
        <h1>{title}</h1>
      </div>

      <div className="card-body">
        <p>{body}</p>
      </div>

      <div className="card-footer">
        <p>{createdAt.split('T')[0]}</p>
        <div className="card-btn-wrapper">
          {archived ? (
            <button className="btn-arch" onClick={() => onArchived(id)}>
              Unarchived
            </button>
          ) : (
            <button className="btn-arch" onClick={() => onArchived(id)}>
              Archived
            </button>
          )}
          <button className="btn-dlt" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemNote;
