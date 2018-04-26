import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charCount: ''
    };

    this.dirty = false;
  }

  showCounter(val) {
    this.setState({ charCount: val.toString() });
  }

  hideCounter() {
    this.setState({ charCount: '' });
  }

  onChange = e => {
    this.dirty = true;
    let val = 140 - e.target.value.length;
    e.target.value.length > 125 ? this.showCounter(val) : this.hideCounter();
  };

  onBlur = e => {
    const { id, onUpdateIdea } = this.props;
    const name = e.target.name;
    this.dirty && onUpdateIdea({ id, [name.slice(0, name.indexOf('-'))]: e.target.value });
    this.dirty = false;
    if (this.state.charCount.length > 1) this.hideCounter();
  };

  onDelete = () => {
    const { deleteIdea, id } = this.props;
    deleteIdea(id);
  };

  render() {
    const { id, title, body, created_date, total, index } = this.props;
    return (
      <div className="c-app__tile">
        <input
          className="c-app__tile-title"
          placeholder="Title"
          autoFocus={index === total - 1 && title.length === 0}
          type="text"
          name={`title-${id}`}
          defaultValue={title}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        <textarea
          maxLength="140"
          className="c-app__tile-body"
          placeholder="Body"
          type="text"
          name={`body-${id}`}
          defaultValue={body}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        <p className="c-app__tile-counter">{this.state.charCount}</p>
        <p className="c-app__tile-date">{new Date(created_date).toString()}</p>
        <button className="c-app__tile-deletebtn" onClick={this.onDelete}>
          <img src={require('../images/delete_icon.png')} alt="delete btn" />
        </button>
      </div>
    );
  }
}

export default Tile;
