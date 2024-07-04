import { useLocation } from "react-router-dom";
import "./Home.css"
export default function Home() {
  const data_locate= useLocation()
  const data=data_locate.state
  return (
    <>
      <div className="flex align-middle justify-center w-full h-full flex-col">
        <span className="m-auto text-blue-500 heading">Home page</span>
        <span className="m-auto name">Hi,{data.Fullname}</span>
      </div>
    </>
  );
}
