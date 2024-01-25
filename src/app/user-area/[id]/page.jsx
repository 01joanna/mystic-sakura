import { getAllReadings } from "@/app/services/reading";
import { getUserById } from "@/app/services/login";
import App from "./App";

export default async function Page({ params }) {
  console.log({ params });
  const response = await getUserById(params.id);
  const readings = await getAllReadings(params.id);
  return <App readings={readings} userData={response.data} />;
}
