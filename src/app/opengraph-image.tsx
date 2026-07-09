import { ImageResponse } from "next/og";

export const alt = "Cauã Alves — Desenvolvedor & Técnico de Informática";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          background:
            "linear-gradient(110deg, #10203a 0%, #0f1a30 46%, #1c1206 54%, #2a1a06 100%)",
        }}
      >
        {/* costura diagonal */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "49.5%",
            width: 3,
            height: "120%",
            transform: "rotate(8deg)",
            background: "#f2f0e8",
            opacity: 0.5,
          }}
        />

        {/* label superior esquerdo (dev) */}
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 80,
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            color: "#7fd7f0",
            fontWeight: 700,
          }}
        >
          &lt;/&gt; DESENVOLVEDOR
        </div>

        {/* label inferior direito (tech) */}
        <div
          style={{
            position: "absolute",
            bottom: 70,
            right: 80,
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            color: "#f0b866",
            fontWeight: 700,
          }}
        >
          TÉCNICO DE INFORMÁTICA
        </div>

        {/* bloco central */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 128,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: -3,
            }}
          >
            Cauã Alves
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 34,
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#7fd7f0" }}>Desenvolvedor</span>
            <span style={{ color: "#9aa4b2", margin: "0 14px" }}>&amp;</span>
            <span style={{ color: "#f0b866" }}>Técnico de Informática</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 24,
              color: "#c7ccd4",
            }}
          >
            Dados, BI, Automação &amp; Web · Suporte, Manutenção &amp; Redes
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
