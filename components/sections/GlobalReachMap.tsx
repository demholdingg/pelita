"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { GlobeMethods } from "react-globe.gl";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
});

const locations = [
  {
    id: "hq",
    label: "HQ Jakarta",
    lat: -6.2088,
    lng: 106.8456,
    color: "#fbbf24",
    size: 1.2,
  },
  {
    id: "sm",
    label: "Sumatra Hub",
    lat: -0.5897,
    lng: 101.3431,
    color: "#064e3b",
  },
  {
    id: "kl",
    label: "Kalimantan Hub",
    lat: -1.2691,
    lng: 115.0917,
    color: "#064e3b",
  },
  {
    id: "sl",
    label: "Sulawesi Hub",
    lat: -1.9032,
    lng: 120.8735,
    color: "#064e3b",
  },
  {
    id: "ej",
    label: "East Java Hub",
    lat: -7.2575,
    lng: 112.7521,
    color: "#064e3b",
  },
  {
    id: "pp",
    label: "Papua Node",
    lat: -4.2699,
    lng: 138.0803,
    color: "#064e3b",
  },
];

const infoContainers = [
  { region: "Jawa", status: "Pusat Operasional & Distribusi", type: "hub" },
  { region: "Sumatera", status: "Sentra Bahan Baku Biomassa", type: "node" },
  { region: "Kalimantan", status: "Kawasan Produksi Utama", type: "node" },
  { region: "Sulawesi", status: "Jalur Logistik Maritim", type: "node" },
  { region: "Indonesia Timur", status: "Ekspansi Strategis", type: "node" },
  { region: "Nasional", status: "Jaringan Distribusi Aktif", type: "node" },
];

const ringsData = [
  {
    lat: locations[0].lat,
    lng: locations[0].lng,
    color: "#fbbf24",
  },
];

const arcs = locations.slice(1).map((loc) => ({
  startLat: locations[0].lat,
  startLng: locations[0].lng,
  endLat: loc.lat,
  endLng: loc.lng,
  color: ["#fbbf24", "#064e3b"],
}));

export default function GlobalReachMap() {
  const container = useRef<HTMLDivElement>(null);

  const globeEl = useRef<GlobeMethods | undefined>(undefined);

  const [isGlobeLoaded, setIsGlobeLoaded] = useState(false);

  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: 0x7dd3fc,
        emissive: 0x000000,
        specular: 0x111111,
        shininess: 10,
      }),
    [],
  );

  // =========================
  // TEXT ANIMATION
  // =========================
  useGSAP(
    () => {
      if (!container.current) return;

      const textElements =
        container.current.querySelectorAll(".global-reach-text");

      if (!textElements.length) return;

      gsap.fromTo(
        textElements,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: container },
  );

  // =========================
  // CARD + GLOBE ANIMATION
  // =========================
  useGSAP(
    () => {
      if (!isGlobeLoaded || !container.current) return;

      const cards =
        container.current.querySelectorAll<HTMLElement>(".info-card");

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            x: (i) => (i < 3 ? -30 : 30),
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
        );
      }

      const controls = globeEl.current?.controls?.();

      if (controls?.object?.rotation) {
        gsap.to(controls.object.rotation, {
          y: `+=${Math.PI * 2}`,
          duration: 120,
          ease: "none",
          repeat: -1,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    {
      scope: container,
      dependencies: [isGlobeLoaded],
    },
  );

  // =========================
  // GLOBE SETUP
  // =========================
  useEffect(() => {
    if (!isGlobeLoaded || !globeEl.current) return;

    const controls = globeEl.current.controls?.();

    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    }

    const timer = setTimeout(() => {
      globeEl.current?.pointOfView?.(
        {
          lat: -2.5,
          lng: 118.0,
          altitude: 1.6,
        },
        1000,
      );
    }, 100);

    return () => clearTimeout(timer);
  }, [isGlobeLoaded]);

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-slate-50 py-24 text-slate-800"
    >
      <div className="absolute inset-0 z-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-[0.03]" />

      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="global-reach-text mb-4 text-3xl font-bold uppercase text-amber-400">
            Our National <span className="text-green-900">Network</span>
          </h2>

          <p className="global-reach-text leading-relaxed text-slate-600">
            Pelita Bioenergi Nusantara berkomitmen untuk memperkuat ketahanan
            energi terbarukan di seluruh penjuru tanah air, menghubungkan sumber
            daya biomass lokal dengan standar kualitas internasional.
          </p>
        </div>

        {/* GLOBE */}
        <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          {/* INFO CARDS */}
          {isGlobeLoaded && (
            <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-between px-12 md:flex lg:px-48">
              {/* LEFT */}
              <div className="flex flex-col gap-6">
                {infoContainers.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="info-card pointer-events-auto w-48 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-white lg:w-56 will-change-transform"
                    style={{ opacity: 0 }}
                  >
                    <div className="mb-1 flex items-center gap-3">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          item.type === "hub"
                            ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                            : "bg-green-500"
                        }`}
                      />

                      <h4 className="text-[10px] font-black uppercase tracking-tighter text-green-950">
                        {item.region}
                      </h4>
                    </div>

                    <p className="text-[11px] font-medium leading-tight text-slate-500">
                      {item.status}
                    </p>
                  </div>
                ))}
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end gap-6 text-right">
                {infoContainers.slice(3, 6).map((item, idx) => (
                  <div
                    key={idx}
                    className="info-card pointer-events-auto w-48 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-white lg:w-56 will-change-transform"
                    style={{ opacity: 0 }}
                  >
                    <div className="mb-1 flex flex-row-reverse items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />

                      <h4 className="text-[10px] font-black uppercase tracking-tighter text-green-950">
                        {item.region}
                      </h4>
                    </div>

                    <p className="text-[11px] font-medium leading-tight text-slate-500">
                      {item.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LOADER */}
          {!isGlobeLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-amber-400" />

              <p className="ml-4 font-semibold text-amber-400">
                Loading Globe...
              </p>
            </div>
          )}

          {/* GLOBE */}
          <Globe
            ref={globeEl as any}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            width={800}
            height={600}
            showAtmosphere
            atmosphereColor="#0ea5e9"
            globeMaterial={globeMaterial}
            labelsData={locations}
            labelLat={(d: any) => d.lat}
            labelLng={(d: any) => d.lng}
            labelText={(d: any) => d.label}
            labelSize={1.5}
            labelDotRadius={0.4}
            labelColor={() => "#ffffff"}
            labelResolution={1}
            pointsData={locations}
            pointLat={(d: any) => d.lat}
            pointLng={(d: any) => d.lng}
            pointColor={(d: any) => d.color}
            pointAltitude={0.07}
            pointRadius={(d: any) => d.size || 0.6}
            pointResolution={6}
            ringsData={ringsData}
            ringColor={(arg: any) => {
              // Jika arg adalah angka, itu adalah progress animasi 't'
              if (typeof arg === "number") {
                return `rgba(251, 191, 36, ${1 - arg})`;
              }
              // Jika arg adalah objek, itu adalah data ring 'd'. Kembalikan warnanya.
              return arg.color || "#fbbf24"; // Fallback ke warna amber default
            }}
            ringMaxRadius={8}
            ringPropagationSpeed={3}
            arcsData={arcs}
            arcColor={(d: any) => d.color}
            arcAltitude={0.2}
            arcStroke={0.5}
            arcDashGap={1}
            arcDashAnimateTime={1000}
            arcCurveResolution={24}
            onGlobeReady={() => setIsGlobeLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}
