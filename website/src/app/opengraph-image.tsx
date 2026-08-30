import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(155deg, #1f333a 0%, #315e6d 46%, #17262c 100%)",
          color: "#f1ebdd",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.7,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          A House of Origins
        </div>
        <div style={{ fontSize: 110, marginTop: 24, display: "flex" }}>
          CASA 1569
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 28,
            opacity: 0.85,
            fontStyle: "italic",
            display: "flex",
          }}
        >
          Exceptional tea from remarkable places.
        </div>
      </div>
    ),
    { ...size },
  );
}
