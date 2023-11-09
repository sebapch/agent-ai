'use client'
import React, { useState, useEffect } from 'react';

const WebSocketChat = () => {
    const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [websocket, setWebsocket] = useState(null);

  const createWebSocketConnection = () => {
    const newWebSocket = new WebSocket('wss://wx58gybkj4.execute-api.us-east-2.amazonaws.com/production/');
    setWebsocket(newWebSocket);

    newWebSocket.onopen = () => {
      console.log(newWebSocket)
      console.log('Conexión WebSocket abierta.');
    };

    newWebSocket.onmessage = (event) => {
      console.log('onmessage', event)
      const newMessage = JSON.parse(event.data);
      
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    newWebSocket.onclose = () => {
      console.log('Conexión WebSocket cerrada.');
    };
  };

  useEffect(() => {
    createWebSocketConnection();

    // Cierra la conexión WebSocket cuando el componente se desmonta
    return () => {
      if (websocket) {
        websocket.close();
        console.log('Conexión WebSocket cerrada desde el desmontaje.');
      }
    };
  }, []); // El segundo argumento vacío [] asegura que este efecto se ejecute solo una vez

  const sendMessage = () => {
    if (websocket) {
      websocket.send(JSON.stringify({ message: inputMessage }));
      setInputMessage('');
    }
  };
  return (
    <div>
      
      <input
        type="text"
        className='text-black'
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  )
}

export default WebSocketChat