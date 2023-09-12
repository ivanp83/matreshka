import dynamic from "next/dynamic";
const Index = dynamic(() => import("@/app/components/form"), {
  ssr: false,
});
export default function Page() {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <Index />
    </>
  );
}
