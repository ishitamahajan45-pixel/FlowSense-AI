function Solutions() {
  return (
    <div
      style={{
        padding: "40px",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#60a5fa" }}>
        Industry Solutions
      </h1>

      <p style={{ textAlign: "center", fontSize: "18px" }}>
        FlowSense AI provides AI-powered Process Mining solutions for different industries.
      </p>

      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <h2>🏭 Manufacturing</h2>
          <p>Optimize production workflows and reduce delays.</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <h2>🏦 Banking</h2>
          <p>Improve loan approvals and compliance monitoring.</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <h2>🏥 Healthcare</h2>
          <p>Reduce patient waiting time and improve treatment flow.</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <h2>🚚 Logistics</h2>
          <p>Optimize warehouse and shipment processes.</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <h2>🛡 Insurance</h2>
          <p>Speed up claim processing using AI.</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <h2>🏛 Government</h2>
          <p>Improve citizen services and approval workflows.</p>
        </div>
      </div>
    </div>
  );
}

export default Solutions;