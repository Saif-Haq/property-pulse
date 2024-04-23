import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoBox from "../components/InfoBox";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            backgroundColor="gray-100"
            heading="For Renters"
            description="Find your dream rental property. Bookmark properties and contact
            owners."
            buttonLink="/properties"
            buttonText="Browse Properties"
            buttonColor="black"
          />
          <InfoBox
            backgroundColor="blue-100"
            heading="For Property Owners"
            description="List your properties and reach potential tenants. Rent as an
            airbnb or long term."
            buttonLink="/properties/add"
            buttonText="Add Property"
            buttonColor="blue-500"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
