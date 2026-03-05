"use client"

import { useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"

const campaigns = [
  {
    name: "Oslo",
    coordinates: [10.7522, 59.9139] as [number, number],
    campaign: "Reform av godkjenning av kompetanse",
    supporters: 1240,
    status: "Aktiv",
  },
  {
    name: "Bergen",
    coordinates: [5.3221, 60.3913] as [number, number],
    campaign: "Mangfoldig ansettelsesinitiativ",
    supporters: 860,
    status: "Aktiv",
  },
  {
    name: "Trondheim",
    coordinates: [10.3951, 63.4305] as [number, number],
    campaign: "Mentornettverk for innvandrere",
    supporters: 520,
    status: "Aktiv",
  },
  {
    name: "Stavanger",
    coordinates: [5.7331, 58.9700] as [number, number],
    campaign: "Hurtigspor for kompetansevurdering",
    supporters: 390,
    status: "Aktiv",
  },
  {
    name: "Tromsø",
    coordinates: [18.9551, 69.6496] as [number, number],
    campaign: "Integreringsprogram for Nord-Norge",
    supporters: 210,
    status: "Kommende",
  },
  {
    name: "Drammen",
    coordinates: [10.2039, 59.7441] as [number, number],
    campaign: "Lokalt sysselsettingssenter",
    supporters: 310,
    status: "Aktiv",
  },
  {
    name: "Kristiansand",
    coordinates: [7.9956, 58.1462] as [number, number],
    campaign: "Påvirkningskoalisjon for Sørlandet",
    supporters: 270,
    status: "Kommende",
  },
]

export default function AdvocacyMap() {
  const [activeMarker, setActiveMarker] = useState<string | null>(null)

  return (
    <div className="relative w-full">
      <div className="w-full rounded-lg overflow-hidden border border-slate-200 bg-[#f0f4f8]" style={{ aspectRatio: "4/5" }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1200,
            center: [14, 64],
          }}
          width={500}
          height={620}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isNorway = geo.properties.name === "Norway"
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isNorway ? "#1A3A6D" : "#e2e8f0"}
                      stroke="#fff"
                      strokeWidth={0.5}
                      style={{
                        default: {
                          outline: "none",
                          fill: isNorway ? "#1A3A6D" : "#e2e8f0",
                        },
                        hover: {
                          outline: "none",
                          fill: isNorway ? "#1e4a8a" : "#e2e8f0",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  )
                })
              }
            </Geographies>

            {campaigns.map(({ name, coordinates, campaign, supporters, status }) => (
              <Marker
                key={name}
                coordinates={coordinates}
                onMouseEnter={() => setActiveMarker(name)}
                onMouseLeave={() => setActiveMarker(null)}
              >
                <circle
                  r={status === "Aktiv" ? 10 : 7}
                  fill={status === "Aktiv" ? "rgba(234, 88, 12, 0.2)" : "rgba(37, 99, 235, 0.2)"}
                  className={status === "Aktiv" ? "animate-ping" : ""}
                  style={{ animationDuration: "2s" }}
                />
                <circle
                  r={6}
                  fill={status === "Aktiv" ? "#EA580C" : "#2563EB"}
                  stroke="#fff"
                  strokeWidth={2}
                  cursor="pointer"
                />
                <text
                  textAnchor="middle"
                  y={-14}
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fill: "#1e293b",
                    fontSize: "9px",
                    fontWeight: 600,
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {activeMarker && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg border border-slate-200 p-4 max-w-[220px] z-10">
          {campaigns
            .filter((c) => c.name === activeMarker)
            .map((c) => (
              <div key={c.name}>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: c.status === "Aktiv" ? "#EA580C" : "#2563EB",
                    }}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {c.status}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">{c.campaign}</h4>
                <p className="text-xs text-slate-600">{c.name}</p>
                <p className="text-xs text-slate-500 mt-1">{c.supporters.toLocaleString("nb-NO")} støttespillere</p>
              </div>
            ))}
        </div>
      )}

      <div className="flex items-center gap-6 mt-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-orange-600" />
          Aktiv kampanje
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-600" />
          Kommende kampanje
        </div>
      </div>
    </div>
  )
}
