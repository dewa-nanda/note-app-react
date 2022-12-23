import ListNote from './note/ListNote';
import data from '../utils/data';
import React from 'react';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: data,
    };
  }

  render() {
    return (
      <>
        <NavbarComponent />
        <main>
          <ListNote datas={this.state.notes} title={'Notes'} />
          <ListNote datas={this.state.notes} title={'Archived'} />
          <ListNote datas={this.state.notes} title={'Archived'} />
        </main>
        <FooterComponent />
      </>
    );
  }
}

export default MainComponent;
