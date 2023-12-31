import React, { useEffect, useState } from "react";
import {
  fetchUserCountApi,
  fetchBookingCountApi,
  fetchRevenueCountApi,
} from "../../../api/admin/userFetch";
// import BarChart from "./Bar";
// import { PieChart } from "./Pie";

export default function Dashboard() {
  const [bookingCount, setBookingCount] = useState();
  const [client, setClient] = useState();
  const [revenue, setRevenue] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const [bookingRes, clientsRes, totalRes] = await Promise.all([
          fetchBookingCountApi(),
          fetchUserCountApi(),
          fetchRevenueCountApi(),
        ]);

        setBookingCount(bookingRes?.data.bookingCount);
        setClient(clientsRes?.data.ClientsCount);
        setRevenue(totalRes?.data.totalRevenue);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="font-Ariza text-2xl ml-4 py-5 px-4 text-yellow-400 font-bold underline">
        OverView
      </h1>
      <div className="grid grid-flow-dense md:grid-cols-4 md:gap-6 md:ml-[140px] md:mt-9 grid-cols-2 gap-3  ">
        <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
          <div className="py-10 px-7">
            <h3 className="text-3xl cursor-pointer  ml-10 font-bold text-indigo-600 sm:text-5xl">
              {bookingCount}
            </h3>

            <div className="mt-4 border-t-2 border-gray-100 pt-4">
              <p className="text-sm font-medium uppercase text-gray-500">
                Total Booking
              </p>
            </div>
          </div>
        </div>
        <div className="group  flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
          <div className="py-10 px-7">
            <h3 className="text-3xl cursor-pointer ml-10 font-bold text-indigo-600 sm:text-5xl">
              {client}
            </h3>

            <div className="mt-4 border-t-2 border-gray-100 pt-4">
              <p className="text-sm font-medium uppercase text-gray-500">
                Total Clients
              </p>
            </div>
          </div>
        </div>
        <div className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
          <div className="py-10 px-7">
            <h3 className="text-3xl cursor-pointer  font-bold text-indigo-600 sm:text-5xl">
              {revenue}
            </h3>

            <div className="mt-4 border-t-2 border-gray-100 pt-4">
              <p className="text-sm font-medium uppercase text-gray-500">
                Total Revenue
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="md:flex md:mt-[30px] h-[500px] justify-evenly">
       <div className="w-[550px] ">
        <BarChart/>
       </div>
       <div className="w-[400px]  md:-mt-0">
        <PieChart/>
       </div>
     </div> */}
    </div>
  );
}
