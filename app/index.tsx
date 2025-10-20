import { Redirect } from "expo-router";
import "../global.css";

export default function app() {
  return <Redirect href="/tabs" />;
}
