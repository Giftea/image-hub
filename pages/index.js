import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Images from "../components/Images";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="body">
      <Navbar />
      <Hero />
      <Images />
    </div>
  );
}
