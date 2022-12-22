const ItemNote = ({title, body, archived, createdAt, id}) => {
    return (<div>
        <h1>{title}</h1>
        <div>
            <p>{createdAt}</p>
            {archived ? <button>Unarchived</button> : <button>Archived</button>}
        </div>
        <p>{body}</p>
    </div>)
}

export default ItemNote;