import { useEffect } from "react";
import s from "./Notification.module.scss";

const Notification = ({ content, onClose }) => {
  useEffect(() => {
    console.log("on mounted");

    setTimeout(onClose, 4000);
  }, []);

  return (
    <div className={s.notification}>
      <div className={s.close}></div>
      <p>{content}</p>
    </div>
  );
};

export default Notification;
