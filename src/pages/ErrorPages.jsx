import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPages = () => {
  const error = useRouteError();
  return (
    <div>
      {error.status} {error.statusText}
    </div>
  );
};

export default ErrorPages;
