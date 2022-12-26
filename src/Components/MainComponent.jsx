import ListNote from './note/ListNote';
import { getInitialData } from '../utils/data';
import React from 'react';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';
import SearchNote from './note/SearchNote';
import InputNote from './note/InputNote';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      inputTitle: '',
      inputContent: '',
      search: '',
    };

    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickArchived = this.onClickArchived.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onInputTitle = this.onInputTitle.bind(this);
    this.onInputContent = this.onInputContent.bind(this);
    this.onSubmitInput = this.onSubmitInput.bind(this);
  }

  onInputTitle(event) {
    if (event.target.value.length <= 50) {
      this.setState(() => {
        return { inputTitle: event.target.value };
      });
    }
  }

  onInputContent(event) {
    this.setState(() => {
      return { inputContent: event.target.value };
    });
  }

  onSubmitInput(event) {
    event.preventDefault();
    if (this.state.inputContent === '' || this.state.inputTitle === '') {
      alert('Please fill all input fields');
    } else {
      const inputData = {
        id: +new Date(),
        title: this.state.inputTitle,
        body: this.state.inputContent,
        archived: false,
        createdAt: new Date().toISOString(),
      };

      this.setState((currentState) => {
        const notesUpdate = currentState.notes;
        notesUpdate.push(inputData);

        return { notes: notesUpdate };
      });

      alert('Anda berhasil menambahakn note');
    }

    this.setState(() => {
      return { inputTitle: '', inputContent: '' };
    });
  }

  onClickDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onClickArchived(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      } else {
        return note;
      }
    });

    this.setState({ notes });
  }

  onChangeSearch(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    return (
      <>
        <NavbarComponent />
        <main>
          <InputNote inputTitle={this.state.inputTitle} onSubmit={this.onSubmitInput} onInputTitle={this.onInputTitle} inputContent={this.state.inputContent} onInputContent={this.onInputContent} />
          <SearchNote value={this.state.search} onChangeSearch={this.onChangeSearch} />
          <ListNote datas={this.state.notes} title={'Notes'} onDelete={this.onClickDelete} onArchived={this.onClickArchived} searchFilter={this.state.search} />
          <ListNote datas={this.state.notes} title={'Archived'} archived={true} onDelete={this.onClickDelete} onArchived={this.onClickArchived} searchFilter={this.state.search} />
        </main>
        <FooterComponent />
      </>
    );
  }
}

export default MainComponent;
