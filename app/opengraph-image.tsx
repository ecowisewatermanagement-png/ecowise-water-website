import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0d1e2b 0%, #1a3a52 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#257d48",
            }}
          />
          <span style={{ fontSize: 36, fontWeight: 700 }}>{siteConfig.shortName}</span>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, maxWidth: 900, lineHeight: 1.15 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#b6e3c6", marginTop: 24 }}>
          Free Water Savings Assessments for Utah Properties
        </div>
      </div>
    ),
    { ...size },
  );
}
