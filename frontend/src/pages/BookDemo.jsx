function BookDemo() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#60a5fa" }}>
        Book a Free Demo
      </h1>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Schedule a personalized demonstration of FlowSense AI.
      </p>

      <form
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Business Email" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Industry" />
        <textarea
          rows="5"
          placeholder="Describe your business challenges..."
        ></textarea>

        <button
          style={{
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookDemo;