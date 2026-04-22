export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0d10",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", fontWeight: 800 }}>
          RigForgedX
        </h1>

        <p style={{ color: "#9ca3af", marginTop: "10px" }}>
          Premium 4x4 build configurator
        </p>

        <a
          href="/builder"
          style={{
            marginTop: "30px",
            display: "inline-block",
            background: "#ff5a1f",
            padding: "14px 24px",
            borderRadius: "10px",
            fontWeight: 700,
            textDecoration: "none",
            color: "#fff",
          }}
        >
          Log In
        </a>
      </div>
    </main>
  );
}