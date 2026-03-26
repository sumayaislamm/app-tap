import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReviewChart = ({ ratings }) => {

  const chartData = ratings.map((r) => ({
    name: r.name,
    value: r.count,
  }));

  return (

    <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="name"
          />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#22c55e"
            radius={[0, 5, 5, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default ReviewChart;