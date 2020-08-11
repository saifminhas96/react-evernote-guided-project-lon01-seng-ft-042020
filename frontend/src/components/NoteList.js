import React from "react";
import NoteItem from "./NoteItem";

const BASE_URL = "http://localhost:3000/api/v1/notes";

class NoteList extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    fetch(BASE_URL)
      .then((r) => r.json())
      .then((notes) => {
        this.setState({ notes });
      });
  }

  renderNoteItems = () => {
    return this.state.notes.map((n) => {
      return (
        <NoteItem
          key={n.id}
          onClick={() => this.props.selectNoteToView(n)}
          title={n.title}
          body={n.body.substring(0, 30).concat("...")}
        />
      );
    });
  };

  render() {
    return (
      <ul>
        <li>{this.renderNoteItems()}</li>
      </ul>
    );
  }
}

export default NoteList;
