import notif_types from './notif_types.json'
export default function Notification(props){
    return (
        <div className={`notification-container ${props.unread ? "unread" : ""}`}>
            <img src={props.avatarURL} className='avatar' alt="Avatar Image"></img>
            <div className='notification-content-container'>
                <div className='notif-content'>
                    <div className='notif-text'>
                        <span className='name'>{props.name}</span>&nbsp;
                        <span className='type'>{notif_types[props.type]}</span>&nbsp;
                        <span className={`additional ${props.type == "join_group" || props.type=="left_group" ? "group-text" : ""}`}>
                            {props.additional} 
                        </span>&nbsp;
                        {props.unread && <div className='notif-icon'></div>}                        
                    </div>
                    <p className='notification-time'>{props.time}</p>
                </div>
                { props.type=="message" && <div className='message-container'><p>{props.message}</p></div>}
            </div>
            {props.type == "comment" && <img src={props.reactionURL} className='reaction-picture'></img>}
        </div>
    )
}