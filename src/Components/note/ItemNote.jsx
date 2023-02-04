import { showFormattedDate } from '../../utils/data';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';

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
        <p>{showFormattedDate(createdAt)}</p>
        <div className="card-btn-wrapper">
          {archived ? (
            <button className="btn-arch" onClick={() => onArchived(id)}>
              <BsFillBookmarkFill></BsFillBookmarkFill>
            </button>
          ) : (
            <button className="btn-arch" onClick={() => onArchived(id)}>
              <BsBookmark></BsBookmark>
            </button>
          )}
          <button className="btn-dlt" onClick={() => onDelete(id)}>
            <FiTrash></FiTrash>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemNote;
