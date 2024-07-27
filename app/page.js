
import Link from "next/link";
import Hero from '@/component/Hero';
import InfoBox from "@/component/InfoBox";
import HomeComponentPage from "@/component/HomePage";
import connectDb from "@/config/database";


export const metadata={
    title:"Home",
    description:"Home Page",
    keywords:"Home Page Rental"
}

export default function HomePage() {

  return (
    <>
        <Hero/>
        <InfoBox/>
        <HomeComponentPage/>
   
    </>
  )
}
