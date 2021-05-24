import React from "react";

type ErrorPageProps = {
  errorCode?: number;
  errorMessage?: string;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = 404,
  errorMessage = "Page not found",
}) => {
  return (
    <div>
      <h1>Error {errorCode}</h1>
      <p>{errorMessage}</p>
    </div>
  );
};
