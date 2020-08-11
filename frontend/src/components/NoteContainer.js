import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {
  state = {
    selectedNote: null,
  };

  selectNoteToView = (note) => {
    this.setState({ selectedNote: note });
  };

  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <Fragment>
        <Search value={this.props.search} onChange={this.handleSearchChange} />
        <div className="container">
          <Sidebar selectNoteToView={this.selectNoteToView} />
          <Content note={this.state.selectedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
