### Midi Server

It's a socket.io server that sends MIDI notes. And it's a React App that
visualizes the notes. 

The server takes the MIDI events from the first MIDI port and sends them to port 8000.

#### Run it
`node src/server`

`open index.html`

#### Develop it
`grunt jsdev`
