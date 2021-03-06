import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import NoteItem from "./NoteItem";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  state = {
    note: {},
  };

  renderContent = () => {
    if (false) {
      return <NoteEditor />;
    } else if (this.props.note) {
      return (
        <NoteViewer title={this.props.note.title} body={this.props.note.body} />
      );
    } else {
      return <Instructions />;
    }
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
