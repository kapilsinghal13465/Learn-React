import { useState } from "react";

const useOnlineStatus = () => {
  const [isOnlineStatus, setIsOnlineStatus] = useState(true);

  addEventListener("online", () => {
    setIsOnlineStatus(true);
  });

  addEventListener("offline", () => {
    setIsOnlineStatus(false);
  });

  return isOnlineStatus;
};

export default useOnlineStatus;
