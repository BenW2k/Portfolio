import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/components/contact/Scene"), {
  ssr: false,
});

export default function Contact() {
  return (
    <main className="relative h-screen">
      <Scene />
    </main>
  );
}
