"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { year: 2019, immigrants_helped: 100, partnerships: 5, policy_changes: 1 },
  { year: 2020, immigrants_helped: 250, partnerships: 10, policy_changes: 2 },
  { year: 2021, immigrants_helped: 500, partnerships: 20, policy_changes: 3 },
  { year: 2022, immigrants_helped: 1000, partnerships: 35, policy_changes: 5 },
  { year: 2023, immigrants_helped: 2000, partnerships: 50, policy_changes: 8 },
]

export default function ImpactChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="immigrants_helped" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="partnerships" stroke="#82ca9d" />
        <Line yAxisId="right" type="monotone" dataKey="policy_changes" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  )
}

