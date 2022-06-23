import React, { useState, useEffect, useRef } from "react";
import "./chat.scss";
import { DoDecrypt, DoEncrypt } from "../aes.js";
import { useDispatch } from "react-redux";
import { process } from "../store/action/index";

function Chat({ username, roomname, socket }) {
  const [text, setText] = useState("")
  const [messages, setMessages] = useState([])

  const dispatch = useDispatch()

  // const dispatchProcess = (encrypt, msg, cipher) => {
  //   dispatch(process(encrypt, msg, cipher))
  // }

  useEffect(() => {
    socket.on("message", (data) => {
      // decrypt
      // const ans = DoDecrypt(data.text, data.username)
      // dispatchProcess(false, ans, data.text)
      // console.log(ans)
      let temp = messages
      temp.push({
        userId: data.userId,
        username: data.username,
        text: data.text
      })
      setMessages([...temp])
    })
  }, [socket, messages])

  const sendData = () => {
    if (text !== "") {
      // encrypt here
      // const ans = DoEncrypt(text)
      socket.emit("chat", text)
      setText("")
    }
  }

  const messageEndRef = useRef(null)

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  console.log(messages, "mess")

  return (
    <div className="chat">
      <div className="user-name">
        <h2>
          {username}<span style={{ fontSize: "0.7rem" }}>in {roomname}</span>
        </h2>
      </div>
      <div className="chat-message">
        {messages.map((i, idx) => {
          if (i.username === username) {
            return (
              <div className="message" key={idx.toString()}>
                <p>{i.text}</p>
                <span>{i.username}</span>
              </div>
            )
          } else {
            return (
              <div className="message mess-right" key={idx.toString()}>
                <p>{i.text}</p>
                <span>{i.username}</span>
              </div>
            )
          }
        })}
        <div ref={messageEndRef} />
      </div>
      <div className="send">
        <input
          placeholder="enter ur message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendData()
            }
          }}></input>
        <button onClick={sendData}>Send</button>
      </div>
    </div>
  )
}

export default Chat;