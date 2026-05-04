import Header from "@/components/Header";
import PhotoCard from "@/components/PhotoCard";


export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="row px-5">
        <div  className="col-12 col-sm-6 col-md-4 col-lg-3">
          <PhotoCard />
        </div>
      </div>
    </div>
  );
}
