/** @jsx React.DOM */

var React = require('react'),
    _ = require('lodash'),
    socket = require('socket.io-client')("http://localhost:8000");

var App = React.createClass({

  getInitialState: function() {
    return {notes: {}}
  },

  componentDidMount: function() {
    socket.on('note', function(message) {
      console.log(message);
      this.state.notes[message.note] = {
        on: message.status === 144,
        velocity: message.velocity
      }
      this.setState(this.state.notes);
    }.bind(this));
  },

  render: function() {
    return (
      <main id="music grid">
        {_.range(29,101).map(function(note) {
          return (
            <Note note={note} on={this.on(note)} />
          )
        }.bind(this))}
      </main>
    )
  },

  on: function(note) {
    return this.state.notes[note] &&
           this.state.notes[note].on
  }

})


var Note = React.createClass({
  render: function() {
    return (
      <span className={this.className()}>{this.props.note}</span>
    )
  },

  className: function() {
    return "note cell " + (this.props.on ? 'on' : '');
  }
})

App.create = function(el) {
  React.renderComponent(App(), el);
}

module.exports = window.App = App