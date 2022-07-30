import React from 'react'
import message from './Message.module.css'

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props:MessagePropsType) {
    return (
        <div className={message.chat}>
            <div className={message.img}><img src={props.avatar} alt={"avatar"}/></div>
            <div className={message.wrapper}>
                <div className={message.message}>
                    <h2>{props.name}</h2>
                    <div className={message.block}>
                        <div className={message.letter}>{props.message}</div>
                        <div className={message.time}>{props.time}</div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Message
