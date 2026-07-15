import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [homeData, setHomeData] = useState({});

useEffect(() => {
  fetch("http://localhost:5000/api/users/home")
    .then((res) => res.json())
    .then((data) => {
      console.log("Home API Response:", data);
      setHomeData(data.data);
    })
    .catch((err) => console.log(err));
}, []);
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 70px",
          background: "#2563eb",
          position: "sticky",
          top: 0,
          overflowX: "auto",
        }}
      >
        <h2
  style={{
    marginRight: "50px",
    fontSize: "34px",
    fontWeight: "bold",
    color: "white",
    whiteSpace: "nowrap",
  }}
>
  FlowSense AI
</h2>

        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>

          <Link to="/product" style={{ color: "white", textDecoration: "none" }}>
            Product
          </Link>

          <Link to="/solutions" style={{ color: "white", textDecoration: "none" }}>
            Solutions
          </Link>

          <Link to="/features" style={{ color: "white", textDecoration: "none" }}>
            Features
          </Link>

          <Link to="/industries" style={{ color: "white", textDecoration: "none" }}>
            Industries
          </Link>

          <Link to="/pricing" style={{ color: "white", textDecoration: "none" }}>
            Pricing
          </Link>

          <Link to="/resources" style={{ color: "white", textDecoration: "none" }}>
            Resources
          </Link>

          <Link to="/faq" style={{ color: "white", textDecoration: "none" }}>
            FAQ
          </Link>

          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>

          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </Link>

          <Link to="/login">
            <button
              style={{
                padding: "8px 18px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>

          <Link to="/register">
            <button
              style={{
                padding: "8px 18px",
                background: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </nav>
      <div
  style={{
    background: "#1e293b",
    color: "white",
    padding: "20px",
    textAlign: "center",
  }}
>
  <h2>Home API Data</h2>

  <p><b>Name:</b> {homeData.name}</p>
  <p><b>Course:</b> {homeData.course}</p>
  <p><b>College:</b> {homeData.college}</p>
  <p>Project: {homeData.project}</p>

<p>City: {homeData.city}</p>

<p>Status: {homeData.status}</p>
</div>

      {/* Hero Section */}

      <section
        style={{
          textAlign: "center",
          minHeight: "90vh",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
padding: "20px",
        }}
      >
        <h1
  style={{
    fontSize: "52px",
    color: "#60a5fa",
    maxWidth: "1100px",
    margin: "0 auto",
    lineHeight: "1.3",
    fontWeight: "bold",
  }}
>
  Your Business Process Isn't What You Think It Is.
</h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "25px auto",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Automatically discover, visualize and optimize business processes
          using AI-powered Process Mining. Eliminate bottlenecks, reduce
          delays and improve operational efficiency.
        </p>

        <div
  style={{
    marginTop: "45px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
          <Link to="/book-demo">
            <button
              style={{
                padding: "16px 38px",
background: "#2563eb",
color: "white",
border: "none",
borderRadius: "10px",
cursor: "pointer",
fontSize: "17px",
fontWeight: "bold",
              }}
            >
              Book Demo
            </button>
          </Link>

          <Link to="/dashboard">
  <button
    style={{
      padding: "16px 38px",
background: "white",
color: "#2563eb",
border: "none",
borderRadius: "10px",
cursor: "pointer",
fontSize: "17px",
fontWeight: "bold",
    }}
  >
    Watch Live Demo
  </button>
</Link>
        </div>
      </section>

      {/* Statistics */}

      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "80px 20px",
          background: "#111827",
        }}
      >
        <div>
          <h2
  style={{
    color: "#38bdf8",
    fontSize: "42px",
    marginBottom: "10px",
  }}
>
  40%
</h2>
          <p>Faster Process Execution</p>
        </div>

        <div>
          <h2
  style={{
    color: "#38bdf8",
    fontSize: "42px",
    marginBottom: "10px",
  }}
>
  65%
</h2>
          <p>Better Process Visibility</p>
        </div>

        <div>
          <h2
  style={{
    color: "#38bdf8",
    fontSize: "42px",
    marginBottom: "10px",
  }}
>
  32%
</h2>
          <p>Reduction in Operational Delays</p>
        </div>

        <div>
          <h2
  style={{
    color: "#38bdf8",
    fontSize: "42px",
    marginBottom: "10px",
  }}
>
  90%
</h2>
          <p>Faster Root Cause Analysis</p>
        </div>
      </section>
      {/* Problem Section */}

      <section
        style={{
          padding: "70px 30px",
          background: "#0f172a",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#60a5fa" }}>
          The Hidden Cost of Invisible Processes
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "20px auto",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Most companies believe they know how work flows inside their
          organization. Reality is different. Hidden bottlenecks and manual
          approvals silently reduce productivity.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
            Manual approvals causing delays
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
            Employees skipping process steps
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
            Duplicate work
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
            Hidden bottlenecks
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
            Difficult compliance tracking
          </div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
            Lack of process transparency
          </div>
        </div>
      </section>

      {/* Meet FlowSense AI */}

      <section
        style={{
          padding: "70px 30px",
          background: "#111827",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#60a5fa" }}>Meet FlowSense AI</h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "25px auto",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          FlowSense AI connects with ERP, CRM, HRMS, Email Logs and enterprise
          applications. It automatically discovers business workflows, detects
          bottlenecks and provides AI-powered recommendations for process
          optimization.
        </p>

        <h3 style={{ marginTop: "40px", color: "#38bdf8" }}>
          ERP → CRM → HRMS → Email Logs
        </h3>

        <h2 style={{ marginTop: "20px" }}>⬇</h2>

        <h2
  style={{
    fontSize: "34px",
    fontWeight: "bold",
    marginRight: "70px",
    color: "white",
    letterSpacing: "1px",
  }}
>
  FlowSense AI
</h2>

        <h2 style={{ marginTop: "20px" }}>⬇</h2>

        <h3>Process Discovery → Bottleneck Detection → AI Recommendations</h3>
      </section>

      {/* Features */}

      <section
        style={{
          padding: "70px 30px",
          background: "#0f172a",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#60a5fa" }}>Powerful Features</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>🤖 AI Process Discovery</div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>📊 Process Visualization</div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>🚦 Bottleneck Detection</div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>✅ Compliance Monitoring</div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>📈 KPI Dashboard</div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>🧠 AI Recommendations</div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>📄 Reports Center</div>

          <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>⚡ Root Cause Analysis</div>
        </div>
      </section>

      {/* How It Works */}

      <section
        style={{
          padding: "70px 20px",
          background: "#111827",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#60a5fa" }}>How It Works</h2>

        <h3 style={{ marginTop: "40px", lineHeight: "2.2" }}>
          Connect Business Systems
          <br />⬇<br />
          Collect Activity Logs
          <br />⬇<br />
          AI Builds Process Maps
          <br />⬇<br />
          Detect Bottlenecks
          <br />⬇<br />
          Recommend Improvements
        </h3>
      </section>
      {/* Customer Success */}

      <section
        style={{
          padding: "70px 20px",
          background: "#0f172a",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#60a5fa" }}>Customer Success</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "10px",
              width: "280px",
            }}
          >
            <h3>Before FlowSense AI</h3>
            <p>Approval Time: 8 Days</p>
            <p>Process Visibility: 35%</p>
            <p>Manual Reports: Yes</p>
          </div>

          <div
            style={{
              background: "#2563eb",
              padding: "25px",
              borderRadius: "10px",
              width: "280px",
            }}
          >
            <h3>After FlowSense AI</h3>
            <p>Approval Time: 3 Days</p>
            <p>Process Visibility: 95%</p>
            <p>Automated Insights</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}

      <section
        style={{
          padding: "80px 20px",
          background: "#2563eb",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>Discover How Your Business Really Works.</h2>

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Uncover inefficiencies, optimize processes and improve productivity
          using AI-powered Process Mining.
        </p>

        <Link to="/book-demo">
          <button
            style={{
              marginTop: "30px",
              padding: "14px 30px",
              border: "none",
              borderRadius: "8px",
              background: "white",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Book Demo
          </button>
        </Link>
      </section>

      {/* Footer */}

      <footer
        style={{
          background: "#111827",
          color: "white",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2>FlowSense AI</h2>

        <p style={{ marginTop: "15px" }}>
          AI Powered Process Mining Platform
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "nowrap",
            marginTop: "25px",
          }}
        >
          <Link to="/product" style={{ color: "white" }}>Product</Link>
          <Link to="/features" style={{ color: "white" }}>Features</Link>
          <Link to="/pricing" style={{ color: "white" }}>Pricing</Link>
          <Link to="/resources" style={{ color: "white" }}>Resources</Link>
          <Link to="/about" style={{ color: "white" }}>About</Link>
          <Link to="/contact" style={{ color: "white" }}>Contact</Link>
        </div>

        <p style={{ marginTop: "30px" }}>
          © 2026 FlowSense AI. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;