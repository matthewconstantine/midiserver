### Midi Server

It's a socket.io server that sends midi notes. And it's a React App that
visualizes the notes. 

The server takes the midi events from the first MIDI port (not yet configurable)
and sends them to port 800 (also not yet configurable). 

#### Run it
`node src/server`

`open index.html`

#### Develop it
`grunt jsdev`
