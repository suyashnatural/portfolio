import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #0b1220 0%, #070a12 100%)",
          color: "#e5e7eb",
          padding: 64,
          fontSize: 42,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 22, color: "#9ca3af" }}>
            Suyash Nande - Lead SDET / Test Platform Engineer
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            <div>AI-powered QA platforms</div>
            <div>built like products</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            fontSize: 20,
            color: "#cbd5e1",
          }}
        >
          {["Cypress", "Playwright", "LLM QA", "RAG/Evals", "CI/CD"].map((t) => (
            <div
              key={t}
              style={{
                border: "1px solid rgba(148,163,184,0.25)",
                borderRadius: 999,
                padding: "10px 14px",
                background: "rgba(15,23,42,0.6)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
