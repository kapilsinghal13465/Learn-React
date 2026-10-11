import useOnlineStatus from "../utils/useOnlineStatus";
import ResContainer from "./ResContainer";

const Body = () => {
  const isOnlineStatus = useOnlineStatus();
  
  return (
    isOnlineStatus ? <div className="app-body">
      {/* <div>Search</div> */}
      <ResContainer />
    </div> : <h1>Looks like you are Offline!, Please check your internet connection.</h1>
  );
};

export default Body;
