import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    return (
      <div className="master-detail-element sidebar">
        <NoteList selectNoteToView={this.props.selectNoteToView} />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
