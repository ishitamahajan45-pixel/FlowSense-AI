function FAQ() {
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
        Frequently Asked Questions
      </h1>

      <h3>What is FlowSense AI?</h3>
      <p>
        FlowSense AI is an AI-powered Process Mining Platform that discovers
        and improves business processes.
      </p>

      <h3>Which industries can use it?</h3>
      <p>
        Manufacturing, Banking, Healthcare, Logistics, Insurance and Government.
      </p>

      <h3>Does it detect bottlenecks?</h3>
      <p>Yes. It automatically detects delays and bottlenecks.</p>

      <h3>Does it support compliance monitoring?</h3>
      <p>Yes.</p>
    </div>
  );
}

export default FAQ;