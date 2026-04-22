"use client";

import { useState } from "react";

type PartItem = {
  name: string;
  selected: string;
  options: string[];
};

type PartSection = {
  title: string;
  items: PartItem[];
};

const initialPartsTree: PartSection[] = [
  {
    title: "Body",
    items: [
      {
        name: "Front Left Fender",
        selected: "Stock Flare",
        options: ["Stock Flare", "Kut Snake Flares", "No Flare"],
      },
      {
        name: "Front Right Fender",
        selected: "Stock Flare",
        options: ["Stock Flare", "Kut Snake Flares", "No Flare"],
      },
      {
        name: "Hood",
        selected: "Factory Hood",
        options: ["Factory Hood", "79 style scoop", "Cross Country Scoop"],
      },
      {
        name: "Snorkel",
        selected: "Safari Style",
        options: ["Safari Style", "Patroldocta 4inch BE", "KF 5inch BE", "No Snorkel",],
      },
      {
        name: "Mirrors",
        selected: "Factory Mirrors",
        options: ["Factory Mirrors", "OCAM Tow Mirrors"],
      },
      {
        name: "Sunvisor",
        selected: "Empty",
        options: ["Empty", "Factory Sunvisor", "Extended Sunvisor"],
      },
        {
  name: "Bullbar",
  selected: "Deluxe Winch Bullbar",
  options: [
    "ARB Deluxe Winch Bar",
    "TJM Outback Bar",
    "Patrol Docta Bar",
    "Azza Bull Bar",
    "Chrome Bumper Bar",
    "No Bullbar",
  ],
},
      {
        name: "Winch",
        selected: "Runva 11XP",
        options: ["Runva 11XP", "Warn Zeon", "Carbon Winch", "No Winch"],
      },
      {
        name: "Side Rails",
        selected: "Rock Sliders",
        options: ["Rock Sliders", "Side Steps", "Tube Sliders", "None"],
      },
    ],
  },
  {
    title: "Front Suspension",
    items: [
      {
        name: "Front Coilovers",
        selected: "Profender 14 Inch",
        options: [
          "Profender 4x4 2.5 Inch Triple Bypass Shock Absorber 12 Inch Travel",
          "Profender 4x4 2.5 Inch Triple Bypass Shock Absorber 14 Inch Travel",
          "Profender 4x4 2.5 Inch Triple Bypass Shock Absorber 16 Inch Travel",
          "Profender 4x4 2.5 Inch Coilover Shock Absorber 8 Stage Adjustable 12 Inch Travel",
          "Profender 4x4 2.5 Inch Coilover Shock Absorber 8 Stage Adjustable 14 Inch Travel",
          "Profender 4x4 2.5 Inch Coilover Shock Absorber 8 Stage Adjustable 16 Inch Travel",
        ],
      },
      {
        name: "Front Differential",
        selected: "Open Front Differential",
        options: [
          "Open Front Differential",
          "Air Locker",
          "E-Locker",
          "Welded Diff",
        ],
      },
      {
        name: "Front Wheel Hubs",
        selected: "Manual Locking Hubs",
        options: ["Manual Locking Hubs", "Auto Hubs", "Heavy Duty Hubs"],
      },
      {
        name: "Steering",
        selected: "Ported Box",
        options: ["Ported Box", "Hydraulic Assist", "Full Hydro"],
      },
      {
        name: "Front Sway Bar",
        selected: "Factory Sway Bar",
        options: ["Factory Sway Bar", "Disconnect Sway Bar", "No Sway Bar"],
      },
    ],
  },
  {
    title: "Rear Suspension",
    items: [
      {
        name: "Rear Differential",
        selected: "Rear Locker",
        options: ["Rear Locker", "Open Diff", "Air Locker", "Welded Diff"],
      },
      {
        name: "Rear Wheel Hubs",
        selected: "Factory Rear Hubs",
        options: ["Factory Rear Hubs", "Heavy Duty Rear Hubs"],
      },
      {
        name: "Rear Shocks",
        selected: "Fox 2.5 Triple Bypass",
        options: [
          "Fox 2.5 Triple Bypass",
          "King 2.5 Bypass",
          "Profender Shocks",
        ],
      },
      {
        name: "Rear Springs",
        selected: "4 Inch Coils",
        options: ["2 Inch Coils", "4 Inch Coils", "5 Inch Coils", "7 Inch Coils"],
      },
      {
        name: "Rear Sway Bar",
        selected: "Custom Sway Bar",
        options: ["Custom Sway Bar", "Factory Sway Bar", "No Sway Bar"],
      },
    ],
  },
  {
    title: "Engine",
    items: [
      {
        name: "Engine",
        selected: "TD42T",
        options: ["TD42T", "TD42 N/A", "1HDFTE", "Cummins 6BT"],
      },
      {
        name: "Turbo",
        selected: "18G",
        options: ["18G", "GTX2867", "G30-660", "HX35"],
      },
      {
        name: "Intercooler",
        selected: "Front Mount",
        options: ["Front Mount", "Top Mount", "No Intercooler"],
      },
      {
        name: "Exhaust",
        selected: "4 Inch Exhaust",
        options: ["3 Inch Exhaust", "4 Inch Exhaust", "5 Inch Exhaust"],
      },
    ],
  },
];

export default function Home() {
  const [partsTree, setPartsTree] = useState<PartSection[]>(initialPartsTree);

  const [openSections, setOpenSections] = useState<string[]>([
    "Body",
    "Front Suspension",
  ]);

  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((s) => s !== title)
        : [...prev, title]
    );
  };

  const toggleItem = (key: string) => {
    setOpenItems((prev) =>
      prev.includes(key)
        ? prev.filter((item) => item !== key)
        : [...prev, key]
    );
  };

  const changePart = (
    sectionTitle: string,
    itemName: string,
    option: string
  ) => {
    setPartsTree((prev) =>
      prev.map((section) =>
        section.title !== sectionTitle
          ? section
          : {
              ...section,
              items: section.items.map((item) =>
                item.name !== itemName
                  ? item
                  : { ...item, selected: option }
              ),
            }
      )
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111214",
        color: "#f5f5f5",
        display: "grid",
        gridTemplateColumns: "360px 1fr",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <aside
        style={{
          background: "#0f1115",
          borderRight: "1px solid #2a2d33",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      ><div
  style={{
    padding: "18px 16px 14px 16px",
    borderBottom: "1px solid #222",
    fontSize: "22px",
    fontWeight: 800,
    color: "#ffffff",
    letterSpacing: "0.5px",
  }}
>
  RigForgedX
</div>

<div style={{ padding: "14px 16px", borderBottom: "1px solid #222" }}>
  <input
    placeholder="Search"
    style={{
      width: "100%",
      background: "transparent",
      border: "none",
      borderBottom: "2px solid #ff5a1f",
      color: "#fff",
      padding: "10px 4px",
      outline: "none",
      fontSize: "14px",
    }}
  />
</div>

        <div style={{ overflowY: "auto", flex: 1 }}>
          {partsTree.map((section) => {
            const isOpen = openSections.includes(section.title);

            return (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    color: "#ff5a1f",
                    textAlign: "left",
                    padding: "12px 16px",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span>{isOpen ? "▾" : "▸"}</span>
                  <span>{section.title}</span>
                </button>

                {isOpen &&
                  section.items.map((item) => {
                    const itemKey = `${section.title}-${item.name}`;
                    const itemOpen = openItems.includes(itemKey);

                    return (
                      <div key={item.name}>
                        <button
                          onClick={() => toggleItem(itemKey)}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 34px",
                            alignItems: "center",
                            padding: "10px 16px",
                            borderTop: "1px solid #1e2127",
                            color: "#e5e7eb",
                            fontSize: "14px",
                            width: "100%",
                            background: "transparent",
                            borderLeft: "none",
                            borderRight: "none",
                            borderBottom: "none",
                            cursor: "pointer",
                            textAlign: "left",
                          }}
                        >
                          <div>{item.name}</div>

                          <div
                            style={{
                              color: "#d1d5db",
                              textAlign: "left",
                              paddingLeft: "10px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            ▸ {item.selected}
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              color: itemOpen ? "#ff5a1f" : "#bfc4cc",
                              fontSize: "16px",
                            }}
                          >
                            {itemOpen ? "▾" : "▸"}
                          </div>
                        </button>

                        {itemOpen && (
                          <div
                            style={{
                              background: "#12151b",
                              borderTop: "1px solid #1e2127",
                            }}
                          >
                            {item.options.map((option) => (
                              <button
                                key={option}
                                onClick={() =>
                                  changePart(section.title, item.name, option)
                                }
                                style={{
                                  width: "100%",
                                  padding: "10px 26px",
                                  background: "transparent",
                                  color:
                                    item.selected === option
                                      ? "#ff5a1f"
                                      : "#d1d5db",
                                  border: "none",
                                  borderTop: "1px solid #1e2127",
                                  textAlign: "left",
                                  cursor: "pointer",
                                  fontWeight:
                                    item.selected === option ? 700 : 400,
                                }}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>

        <div
          style={{
            borderTop: "2px solid #ff5a1f",
            padding: "14px 16px",
            background: "#0c0e12",
          }}
        >
          <div style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "10px" }}>
            License Plate
          </div>
          <div style={{ fontWeight: 700, marginBottom: "14px" }}>RIG-001</div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button style={smallButtonStyle}>↻</button>
            <button style={smallButtonStyle}>⟲</button>
            <button
              style={{
                background: "#ff5a1f",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 18px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </aside>

      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(180deg, rgba(27,29,34,1) 0%, rgba(16,17,20,1) 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
            opacity: 0.25,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "6%",
            right: "6%",
            top: "8%",
            height: "55%",
            border: "1px solid rgba(255,255,255,0.06)",
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 100px)",
            opacity: 0.6,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "5%",
            right: "5%",
            bottom: "8%",
            height: "20%",
            background:
              "linear-gradient(180deg, #2b2f35 0%, #1a1d22 100%)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "20%",
            right: "20%",
            bottom: "14%",
            height: "22%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,90,31,0.20), transparent 65%)",
            filter: "blur(18px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "24px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "38px", marginBottom: "12px" }}>
              Premium Shed Viewer
            </h2>
            <p style={{ color: "#9ca3af", maxWidth: "520px", margin: "0 auto" }}>
              This center area becomes your live 3D GQ, GU, 79, Hilux viewer with
              parts updating from the exact parts tree on the left.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const smallButtonStyle: React.CSSProperties = {
  background: "#15181d",
  color: "#fff",
  border: "1px solid #2a2d33",
  borderRadius: "8px",
  width: "42px",
  height: "42px",
  cursor: "pointer",
  fontSize: "18px",
};

