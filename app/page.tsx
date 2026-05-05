import SalesBarChart from "@/charts/BarChart";
import OrdersHeatmap from "@/charts/HeatMap";
import TransactionsChart from "@/charts/LineChart";
import ConversionRate from "@/components/ConversionRate";
import Header from "@/components/Header";
import PhotoCard from "@/components/PhotoCard";
import ProductList from "@/components/ProductList";
import ScheduleCard from "@/components/ScheduleCard";
import StatsCard from "@/components/StatsCard";
import StoreCard from "@/components/StoreCard";


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


      <div className="px-5 py-3">
        <div className="row g-3">
          <div className="col-lg-9">
            <div className="row g-3">
              <div className="col-md-6"><TransactionsChart /></div>
              <div className="col-md-6"><SalesBarChart title="Sales Performance" /></div>
              <div className="col-md-6"><OrdersHeatmap /></div>
              <div className="col-md-6"><SalesBarChart title="Product Statistics" /></div>
            </div>
          </div>

          <div className="col-lg-3 d-flex">
            <div className="w-100 h-100">
              <ScheduleCard />
            </div>
          </div>

        </div>
      </div>

      <div className="row px-5 g-3">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <StoreCard title="New York" />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <StoreCard title="Los Angeles" />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <StoreCard title="Chicago" />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <StoreCard title="Houston" />
        </div>
      </div>

      <div className="px-5 py-3">
        <div className="card rounded-5 border-0">
          <span className="px-4 mt-4 fw-bold" style={{ fontSize: 21, color: "#1a1a1a" }}> Product List</span>
          <div className="row p-3">
            <div className="col-12 col-sm-6 col-md-3 col-lg-9">
              <ProductList />
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3 py-3 py-lg-0">
              <ConversionRate />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
