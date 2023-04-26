import dynamic from "next/dynamic";
const Form = dynamic(() => import("@/app/components/form/form"), {
  ssr: false,
});
export default function Page() {
  return <Form />;
}
