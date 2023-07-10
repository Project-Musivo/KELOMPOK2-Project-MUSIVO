import React, { useState, useEffect } from "react";
import Notification from "./notification";
import Notif_types from "./notif_types.json";
import Notif from "./notifications.json";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { StarIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const Toogle_notif = () => {
    const [openPopover, setOpenPopover] = React.useState(false);
    const triggers = {
      onMouseEnter: () => setOpenPopover(true),
      onMouseLeave: () => setOpenPopover(false),
    };

    const [notifs, setNotifs] = useState(Notif);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
      setUnreadCount(notifs.filter((notif) => notif.unread).length);
    }, [notifs]);

    const [bellImg, setBellImg] = useState("./assets/icon/bell2.png");

    useEffect(() => {
      const interval = setInterval(() => {
        setBellImg((prevImg) =>
          prevImg === "./assets/icon/bell2.png"
            ? "./assets/icon/bell1.png"
            : "./assets/icon/bell2.png"
        );
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    function readAll() {
      setNotifs((prevNotifs) =>
        prevNotifs.map((prevNotif) => ({ ...prevNotif, unread: false }))
      );
    }

    return (
      <Popover open={openPopover} handler={setOpenPopover}>
        <PopoverHandler {...triggers}>
          <img src={bellImg} alt="" width={20} />
        </PopoverHandler>
        <PopoverContent {...triggers} className="w-[39rem] mt-4 right-9 absolute z-50 top-0">
          <section className="main-header">
            <h1>Notifications </h1>{" "}
            {unreadCount > 0 && (
              <div className="unread-count"> {unreadCount}</div>
            )}
            <button onClick={readAll} className="read-btn">
              Mark all as read
            </button>
          </section>
          <section className="notifications-section">
            {notifs.map((Notif) => {
              return <Notification key={Notif.id} {...Notif} />;
            })}
          </section>
        </PopoverContent>
      </Popover>
    );
}
export default Toogle_notif;