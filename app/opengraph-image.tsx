import { ImageResponse } from "next/og";

export const alt =
  "Kian Malakooti — Software Engineer & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0A0A0A";
const FG = "#F4F4EF";
const ACCENT = "#CBF150";
const MUTED = "#9A9A96";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: BG,
          color: FG,
          fontFamily: "sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 26,
            letterSpacing: 6,
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: ACCENT,
            }}
          />
          <div>Portfolio</div>
        </div>

        {/* Name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 132,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -3,
              textTransform: "uppercase",
            }}
          >
            Kian
          </div>
          <div
            style={{
              fontSize: 132,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -3,
              textTransform: "uppercase",
            }}
          >
            Malakooti
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 38,
              fontWeight: 600,
              color: ACCENT,
            }}
          >
            Software Engineer @ Meta · Full-Stack Developer
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            letterSpacing: 3,
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          <div>San Francisco</div>
          <div>kianjm.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
