import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
            Suyash Nande — Portfolio
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            <div>Test Platform Engineering</div>
            <div>with LLM-driven QA</div>
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#cbd5e1" }}>
          suyashn02@gmail.com • github.com/suyashnatural • linkedin.com/in/suyashnande
        </div>
      </div>
    ),
    size,
  );
}
