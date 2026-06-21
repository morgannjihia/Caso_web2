"use client";

import CountUp from "react-countup";

export default function Statistics() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-900">
            <CountUp end={120} />+
          </h2>
          <p>Institutions</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-900">
            <CountUp end={8} />
          </h2>
          <p>Zones</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-900">
            <CountUp end={3000} />+
          </h2>
          <p>Students</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-900">
            <CountUp end={150} />+
          </h2>
          <p>Baptisms</p>
        </div>

      </div>
    </section>
  );
}