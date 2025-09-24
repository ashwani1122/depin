// pages/_error.tsx
import { NextPageContext } from "next";

interface Props {
  statusCode?: number;
}

function ErrorPage({ statusCode }: Props) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{statusCode ? `Error ${statusCode}` : "An error occurred"}</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
