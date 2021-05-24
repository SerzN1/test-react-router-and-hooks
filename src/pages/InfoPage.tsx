import React from "react";
import { Link, useParams } from "react-router-dom";
import { Alert } from "../components/ui/Alert";
import { Preloader } from "../components/ui/Preloader";
import { Gallery } from "../components/Gallery";
import { useGrocery } from "../api/groceries";
import { Title } from "../components/ui/Title";

type InfoPageProps = {};

type InfoPageParams = {
  id: string;
};

export const InfoPage: React.FC<InfoPageProps> = () => {
  const { id } = useParams<InfoPageParams>();
  const { isLoading, data, error } = useGrocery(id);

  if (isLoading) return <Preloader />;
  if (error) return <Alert title={error.toString()} />;
  if (!data) return <Alert title={'Information not found'} />;

  return (
    <div>
      <Link to="/">Back</Link>

      <Title>{data.name}</Title>

      <p>{data.description}</p>

      {data.additionalInformation && <pre>{data.additionalInformation}</pre>}
      {data.images && <Gallery images={data.images} />}
    </div>
  );
};
