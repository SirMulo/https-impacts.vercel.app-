"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { year: 2019, innvandrere_hjulpet: 100, partnerskap: 5, politikkendringer: 1 },
  { year: 2020, innvandrere_hjulpet: 250, partnerskap: 10, politikkendringer: 2 },
  { year: 2021, innvandrere_hjulpet: 500, partnerskap: 20, politikkendringer: 3 },
  { year: 2022, innvandrere_hjulpet: 1000, partnerskap: 35, politikkendringer: 5 },
  { year: 2023, innvandrere_hjulpet: 2000, partnerskap: 50, politikkendringer: 8 },
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
        <Line yAxisId="left" type="monotone" dataKey="innvandrere_hjulpet" name="Innvandrere hjulpet" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="partnerskap" name="Partnerskap" stroke="#82ca9d" />
        <Line yAxisId="right" type="monotone" dataKey="politikkendringer" name="Politikkendringer" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  )
}
