import { Archivo, JetBrains_Mono } from "next/font/google";

// Display + body: Archivo — grotesca industrial, com caráter técnico,
// fora da lista de fontes-reflexo. Serve tanto ao lado dev quanto ao hardware.
const archivo = Archivo({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
    weight: ["400", "500", "600", "700", "800", "900"],
});

// Mono: JetBrains Mono — código, terminal e labels dos dois trilhos.
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-mono",
    weight: ["400", "500", "700"],
});

export { archivo, jetbrainsMono };
