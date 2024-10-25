import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h2>Opps .....</h2>
      <h4>Something went wrong</h4>
      <h5>{err.data}</h5>
      <h5>{err.statusText}</h5>
    </div>
  );
};

export default Error;
