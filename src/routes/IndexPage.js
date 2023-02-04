import ListNote from '../Components/note/ListNote';
import SearchNote from '../Components/note/SearchNote';

const IndexPage = (props) => {
  console.log(props);
  return (
    <>
      <div className="wrapperPage">
        <h1>Notes</h1>
        <SearchNote value={props.searchFilter} onChangeSearch={props.onChangeSearch} />
      </div>
      
      <ListNote datas={props.notes} title={'Notes'} onDelete={props.onDelete} onArchived={props.onArchived} searchFilter={props.searchFilter} />
    </>
  );
};

export default IndexPage;
