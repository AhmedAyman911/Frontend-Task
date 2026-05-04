import Header from "@/components/Header";
import PhotoCard from "@/components/PhotoCard";
import StatsCard from "@/components/StatsCard";


export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="row px-5 g-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <PhotoCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <StatsCard
            title="Total Revenue"
            value="4,547"
            decimal="08"
            change={12.5}
            isIncrease={true}
            period="From Jan 01, 2025 - March 30, 2024"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <StatsCard
            title="Avg. Order Value"
            value="1,230"
            decimal="58"
            change={8.2}
            isIncrease={false}
            period="From Jan 01, 2025 - March 30, 2024"
          />
          
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          
          <StatsCard
            title="Total Orders"
            value="19,744"
            decimal="49"
            change={47.5}
            isIncrease={true}
            period="From Jan 01, 2025 - March 30, 2024"
          />
        </div>
      </div>
    </div>
  );
}
