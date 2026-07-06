import { useState } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Unable to connect to server");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#007bff" }}>
        🤖 AI Process Health Checker
      </h1>

      <h3 style={{ textAlign: "center" }}>
        Welcome 👋
      </h3>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    margin: "30px 0",
  }}
>
  <div style={{ background: "#2563eb", color: "white", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
    <h2>92%</h2>
    <p>Process Health Score</p>
  </div>

  <div style={{ background: "#10b981", color: "white", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
    <h2>3.2 Days</h2>
    <p>Average Cycle Time</p>
  </div>

  <div style={{ background: "#f59e0b", color: "white", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
    <h2>5</h2>
    <p>Bottlenecks Found</p>
  </div>

  <div style={{ background: "#7c3aed", color: "white", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
    <h2>12</h2>
    <p>AI Recommendations</p>
  </div>
</div>

      <div
        style={{
          width: "70%",
          margin: "30px auto",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 10px lightgray",
        }}
      >
        <h2>📂 Upload Event Log (CSV)</h2>

        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />
        <br />

        <button
          onClick={handleUpload}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Analyze Process
        </button>
      </div>

      {result && (
        <div
          style={{
            width: "70%",
            margin: "20px auto",
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 0 10px lightgray",
          }}
        >
          <h2>📊 Analysis Result</h2>

          <hr />

          <h3>Total Events : {result.totalEvents}</h3>

          <h3>Health Score : {result.healthScore}%</h3>

          <h3>Status : {result.status}</h3>
          <hr />

<h2>🤖 AI Recommendations</h2>

<ul style={{ lineHeight: "2", fontSize: "17px" }}>
  <li>✔ Remove unnecessary approval steps.</li>
  <li>✔ Automate repetitive manual tasks.</li>
  <li>✔ Reduce waiting time between departments.</li>
  <li>✔ Improve process visibility using dashboards.</li>
</ul>

          <div
            style={{
              width: "100%",
              background: "#ddd",
              height: "20px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: `${result.healthScore}%`,
                height: "20px",
                background: "green",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;