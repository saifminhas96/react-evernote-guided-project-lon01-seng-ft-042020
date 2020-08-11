import React from "react";

class NoteItem extends React.Component {
  renderNoteDetails = (note) => {
    // <NoteItem title={note.title} body={note.body} />;
  };

  render() {
    return (
      <li onClick={this.props.onClick}>
        <h2>{this.props.title}</h2>
        <p> {this.props.body} </p>
      </li>
    );
  }
}

export default NoteItem;
