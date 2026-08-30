import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17262c",
          color: "#f1ebdd",
          fontSize: 36,
          fontFamily: "Georgia, serif",
        }}
      >
        C
      </div>
    ),
    { ...size },
  );
}
