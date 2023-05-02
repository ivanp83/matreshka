import { Metadata } from "next";
import Index from "../components/about";

export const metadata: Metadata = {
  title: "Матрёшка | Как всё началось",
  description: "Как хобби стало любимым делом",
};
export default function Page() {
  return <Index />;
}
