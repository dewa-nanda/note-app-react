import ItemNote from "./ItemNote";

const ListNote = ({datas}) => {
    return (<div>
        <h1>List Note</h1>
        <p>Total note : {datas.length}</p>
        {datas.map((data) => {
        if(data.archived) {return <ItemNote title = {data.title} body = {data.body} archived = {data.archived} createdAt = {data.createdAt} id = {data.id}/>}
        else {return <h1>Nope</h1>}
        })}
    </div>)

}

export default ListNote;