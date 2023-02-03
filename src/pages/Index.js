import { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListNote from '../Components/note/ListNote';
import SearchNote from '../Components/note/SearchNote';

function IndexPageWrapper(notes) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };

  const deleteParams = () => {
    searchParams.delete('keyword');
    setSearchParams(searchParams);
  };

  return <IndexPage defaultKeyword={keyword} keywordChange={changeSearchParams} deleteParams={deleteParams} notes={notes} />;
}

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: props.defaultKeyword || '',
    };

    // this.onChangeSearch = this.onChangeSearch.bind(this);
    // this.onDelete = this.onDelete.bind(this);
    // this.onArchived = this.onArchived.bind(this);
  }

  // Method click
  onChangeSearch(event) {
    this.setState(() => {
      return {
        search: event.target.value.toString(),
      };
    });

    if (event.target.value === '') {
      this.props.deleteParams();
    } else {
      this.props.keywordChange(event.target.value);
    }
  }

  render() {
    return (
      <>
        <div className="wrapperPage">
          <h1>Notes</h1>
          <SearchNote value={this.state.search} onChangeSearch={this.onChangeSearch} />
        </div>
        {/* <ListNote datas={this.props.notes} searchFilter={this.state.search} onDelete={this.onDelete} onArchived={this.onArchived} /> */}
      </>
    );
  }
}

export default IndexPageWrapper;
