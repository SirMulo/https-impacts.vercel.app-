"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/norway/norway-new-counties.json"

const markers = [
  { name: "Oslo", coordinates: [10.7522, 59.9139] },
  { name: "Bergen", coordinates: [5.3221, 60.3913] },
  { name: "Trondheim", coordinates: [10.3951, 63.4305] },
]

export default function AdvocacyMap() {
  const [tooltipContent, setTooltipContent] = useState("")

  return (
    <div className="relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 2000,
          center: [15, 65],
        }}
        width={400}
        height={400}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />)
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates as [number, number]}>
            <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text textAnchor="middle" y={-10} style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "8px" }}>
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      {tooltipContent && <div className="absolute top-0 left-0 bg-white p-2 rounded shadow">{tooltipContent}</div>}
    </div>
  )
}

