import { useMemo, useState } from "react";

const projectOptions = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Full Renovation",
  "Addition",
];

const sizeOptions = ["Small", "Medium", "Large"];
const finishOptions = ["Standard", "High-End", "Luxury"];

const pricing: Record<string, Record<string, Record<string, [number, number]>>> = {
  "Kitchen Remodel": {
    Small: {
      Standard: [45000, 65000],
      "High-End": [75000, 105000],
      Luxury: [110000, 160000],
    },
    Medium: {
      Standard: [65000, 85000],
      "High-End": [95000, 135000],
      Luxury: [140000, 210000],
    },
    Large: {
      Standard: [85000, 110000],
      "High-End": [120000, 170000],
      Luxury: [175000, 250000],
    },
  },
  "Bathroom Remodel": {
    Small: {
      Standard: [25000, 40000],
      "High-End": [45000, 65000],
      Luxury: [70000, 95000],
    },
    Medium: {
      Standard: [35000, 50000],
      "High-End": [60000, 85000],
      Luxury: [90000, 120000],
    },
    Large: {
      Standard: [45000, 65000],
      "High-End": [80000, 110000],
      Luxury: [115000, 150000],
    },
  },
  "Full Renovation": {
    Small: {
      Standard: [90000, 130000],
      "High-End": [140000, 195000],
      Luxury: [210000, 300000],
    },
    Medium: {
      Standard: [130000, 180000],
      "High-End": [190000, 265000],
      Luxury: [280000, 400000],
    },
    Large: {
      Standard: [180000, 240000],
      "High-End": [250000, 340000],
      Luxury: [360000, 500000],
    },
  },
  Addition: {
    Small: {
      Standard: [85000, 120000],
      "High-End": [125000, 170000],
      Luxury: [180000, 250000],
    },
    Medium: {
      Standard: [120000, 165000],
      "High-End": [170000, 230000],
      Luxury: [240000, 325000],
    },
    Large: {
      Standard: [165000, 220000],
      "High-End": [230000, 310000],
      Luxury: [320000, 425000],
    },
  },
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function App() {
  const [step, setStep] = useState<"home" | "estimate" | "results" | "booking">("home");
  const [project, setProject] = useState("Kitchen Remodel");
  const [size, setSize] = useState("Medium");
  const [finish, setFinish] = useState("High-End");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const estimate = useMemo(() => {
    const [min, max] = pricing[project][size][finish];
    return { min, max };
  }, [project, size, finish]);

  const cardStyle: React.CSSProperties = {
    background: "#161616",
    border: "1px solid #2a2a2a",
    borderRadius: "20px",
    padding: "24px",
  };

  const buttonStyle: React.CSSProperties = {
    background: "#C9A96E",
    color: "#000",
    border: "none",
    borderRadius: "12px",
    padding: "14px 22px",
    fontWeight: 600,
    cursor: "pointer",
  };

  const secondaryButtonStyle: React.CSSProperties = {
    background: "transparent",
    color: "#fff",
    border: "1px solid #444",
    borderRadius: "12px",
    padding: "14px 22px",
    fontWeight: 600,
    cursor: "pointer",
  };

  const optionStyle = (active: boolean): React.CSSProperties => ({
    padding: "12px 16px",
    borderRadius: "12px",
    border: active ? "1px solid #C9A96E" : "1px solid #333",
    background: active ? "rgba(201,169,110,0.12)" : "#111",
    color: "#fff",
    cursor: "pointer",
    marginRight: "10px",
    marginBottom: "10px",
  });

  return (
    <div
      style={{
        background: "#0B0B0B",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#888", textTransform: "uppercase" }}>
              Harris Contracting
            </div>
            <div style={{ fontSize: "20px", fontWeight: 700, marginTop: "6px" }}>
              Franchise-Level Client Experience
            </div>
          </div>

          <button
            style={buttonStyle}
            onClick={() => setStep(step === "home" ? "estimate" : "booking")}
          >
            {step === "home" ? "Start Estimate" : "Book Review"}
          </button>
        </div>

        {step === "home" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "24px" }}>
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  border: "1px solid #333",
                  background: "#111",
                  color: "#bbb",
                  marginBottom: "20px",
                }}
              >
                Projects Starting at $75K+
              </div>

              <h1 style={{ fontSize: "56px", lineHeight: 1.05, margin: "0 0 20px 0" }}>
                See What Your Renovation Will Cost{" "}
                <span style={{ color: "#C9A96E" }}>Before You Commit</span>
              </h1>

              <p style={{ fontSize: "18px", color: "#aaa", maxWidth: "650px", lineHeight: 1.6 }}>
                A guided estimate experience designed to pre-qualify clients, introduce pricing
                early, and make a one-man operation feel like a premium firm.
              </p>

              <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button style={buttonStyle} onClick={() => setStep("estimate")}>
                  Start Your Estimate
                </button>
                <button style={secondaryButtonStyle}>
                  View Project Experience
                </button>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Live Demo Preview
              </div>
              <div style={{ fontSize: "28px", fontWeight: 700, marginTop: "10px" }}>
                Client Estimate Experience
              </div>

              <div
                style={{
                  marginTop: "24px",
                  background: "rgba(201,169,110,0.12)",
                  border: "1px solid rgba(201,169,110,0.35)",
                  borderRadius: "20px",
                  padding: "22px",
                }}
              >
                <div style={{ color: "#bbb", fontSize: "14px" }}>Estimated Investment</div>
                <div style={{ fontSize: "36px", fontWeight: 700, marginTop: "10px" }}>
                  {formatCurrency(estimate.min)} – {formatCurrency(estimate.max)}
                </div>
                <div style={{ color: "#999", marginTop: "10px" }}>
                  Based on current demo selections
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "estimate" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "24px" }}>
            <div style={cardStyle}>
              <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Step 1 of 2
              </div>
              <h2 style={{ fontSize: "38px", marginTop: "12px" }}>Tell us about your project</h2>
              <p style={{ color: "#aaa" }}>
                This estimate creates a realistic planning range before scheduling a project review.
              </p>

              <div style={{ marginTop: "30px" }}>
                <div style={{ marginBottom: "12px", fontWeight: 600 }}>Project Type</div>
                {projectOptions.map((item) => (
                  <button
                    key={item}
                    style={optionStyle(project === item)}
                    onClick={() => setProject(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: "30px" }}>
                <div style={{ marginBottom: "12px", fontWeight: 600 }}>Project Size</div>
                {sizeOptions.map((item) => (
                  <button
                    key={item}
                    style={optionStyle(size === item)}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: "30px" }}>
                <div style={{ marginBottom: "12px", fontWeight: 600 }}>Finish Level</div>
                {finishOptions.map((item) => (
                  <button
                    key={item}
                    style={optionStyle(finish === item)}
                    onClick={() => setFinish(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: "34px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button style={buttonStyle} onClick={() => setStep("results")}>
                  See My Estimate
                </button>
                <button style={secondaryButtonStyle} onClick={() => setStep("home")}>
                  Back
                </button>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Live Pricing Preview
              </div>

              <div
                style={{
                  marginTop: "20px",
                  background: "rgba(201,169,110,0.12)",
                  border: "1px solid rgba(201,169,110,0.35)",
                  borderRadius: "20px",
                  padding: "22px",
                }}
              >
                <div style={{ color: "#bbb", fontSize: "14px" }}>Estimated Investment</div>
                <div style={{ fontSize: "34px", fontWeight: 700, marginTop: "12px", lineHeight: 1.2 }}>
                  {formatCurrency(estimate.min)}
                  <br />
                  {formatCurrency(estimate.max)}
                </div>
                <div style={{ color: "#999", marginTop: "10px" }}>
                  This planning range updates as selections change.
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "results" && (
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Your Estimate
              </div>
              <h2 style={{ fontSize: "48px", marginTop: "12px" }}>Your Project Estimate Is Ready</h2>
              <p style={{ color: "#aaa", fontSize: "18px" }}>
                Based on your selections, this is the realistic planning range a qualified client would see.
              </p>
            </div>

            <div style={{ ...cardStyle, marginTop: "28px" }}>
              <div
                style={{
                  background: "rgba(201,169,110,0.12)",
                  border: "1px solid rgba(201,169,110,0.35)",
                  borderRadius: "24px",
                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <div style={{ color: "#bbb", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Estimated Investment
                </div>
                <div style={{ fontSize: "52px", fontWeight: 700, marginTop: "14px" }}>
                  {formatCurrency(estimate.min)} – {formatCurrency(estimate.max)}
                </div>
                <div style={{ color: "#999", marginTop: "12px" }}>
                  This is a general planning range based on the scope selected.
                </div>
              </div>

              <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
                <div style={cardStyle}>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase" }}>Project</div>
                  <div style={{ marginTop: "8px", fontWeight: 600 }}>{project}</div>
                </div>
                <div style={cardStyle}>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase" }}>Finish</div>
                  <div style={{ marginTop: "8px", fontWeight: 600 }}>{finish}</div>
                </div>
                <div style={cardStyle}>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase" }}>Fit</div>
                  <div style={{ marginTop: "8px", fontWeight: 600 }}>Premium Match</div>
                </div>
              </div>

              <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "20px" }}>
                <div style={cardStyle}>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Watch This Before Moving Forward
                  </div>
                  <div
                    style={{
                      marginTop: "16px",
                      minHeight: "220px",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #1f1f1f, #111)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "24px",
                      textAlign: "center",
                      color: "#ddd",
                    }}
                  >
                    “Based on what you selected, your project falls within this planning range. The next
                    step is a project review where scope, materials, and site conditions are confirmed.”
                  </div>
                </div>

                <div style={cardStyle}>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    Why this works
                  </div>

                  <div style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
                    <div style={cardStyle}>Pricing is introduced before the call</div>
                    <div style={cardStyle}>Low-budget leads self-filter</div>
                    <div style={cardStyle}>Your process feels premium and structured</div>
                  </div>

                  <div style={{ marginTop: "20px", display: "grid", gap: "10px" }}>
                    <button style={buttonStyle} onClick={() => setStep("booking")}>
                      Book Your Project Review
                    </button>
                    <button style={secondaryButtonStyle} onClick={() => setStep("estimate")}>
                      Edit Estimate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "booking" && (
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div style={cardStyle}>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Final Step
                </div>
                <h2 style={{ fontSize: "42px", marginTop: "12px" }}>Schedule Your Project Review</h2>
                <p style={{ color: "#aaa", fontSize: "18px" }}>
                  This is where qualified prospects move from estimate to conversation.
                </p>
              </div>

              <div style={{ marginTop: "28px", display: "grid", gap: "14px" }}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  style={{
                    height: "54px",
                    borderRadius: "14px",
                    border: "1px solid #333",
                    background: "#111",
                    color: "white",
                    padding: "0 16px",
                  }}
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  style={{
                    height: "54px",
                    borderRadius: "14px",
                    border: "1px solid #333",
                    background: "#111",
                    color: "white",
                    padding: "0 16px",
                  }}
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  style={{
                    height: "54px",
                    borderRadius: "14px",
                    border: "1px solid #333",
                    background: "#111",
                    color: "white",
                    padding: "0 16px",
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: "22px",
                  background: "rgba(201,169,110,0.12)",
                  border: "1px solid rgba(201,169,110,0.35)",
                  borderRadius: "20px",
                  padding: "22px",
                }}
              >
                <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Project Review Summary
                </div>
                <div style={{ marginTop: "10px", fontSize: "24px", fontWeight: 700 }}>
                  {project} · {finish}
                </div>
                <div style={{ color: "#aaa", marginTop: "8px" }}>
                  Planning range: {formatCurrency(estimate.min)} – {formatCurrency(estimate.max)}
                </div>
              </div>

              <button style={{ ...buttonStyle, width: "100%", marginTop: "24px" }}>
                Confirm Appointment Request
              </button>

              <p style={{ textAlign: "center", color: "#777", marginTop: "14px" }}>
                Only clients aligned with project scope and investment level are scheduled.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}