import { useRouteError } from "react-router"; // Or "react-router"

const Error = () => {
  const err = useRouteError();
  
  // This will force the actual error to print in your browser developer console
  console.log("CRITICAL ERROR OBJECT:", err);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
      <h1>A crash occurred!</h1>
      {/* This safely converts whatever object 'err' is into plain text */}
      <p>{String(JSON.stringify(err))}</p>
    </div>
  );
};

export default Error;
