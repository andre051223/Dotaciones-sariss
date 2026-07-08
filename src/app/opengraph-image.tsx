import { ImageResponse } from "next/og";
import { siteName } from "./config";

export const alt =
  "Dotaciones Sariss - Diseño y confección de dotación empresarial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          color: "#1a1a1a",
          fontFamily: "sans-serif",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 44,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8a6d3b",
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          Diseño y confección de dotación empresarial
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#555555",
          }}
        >
          Uniformes corporativos personalizados · Colombia
        </div>
      </div>
    ),
    { ...size }
  );
}
