import { Poppins } from "next/font/google";

/**
 * Font family from goolge font https://fonts.google.com/?query=poppins
 */
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  /**
   * Can be found at Glyphs section at https://fonts.google.com/specimen/Inter/glyphs?query=inter
   */
  subsets: ["latin"],
  /** Value for display can be:
   * auto
   * The browser will select the most appropriate display mode
   * block
   * The browser will hide the text until the font is fully loaded
   * swap
   * text will be displayed immediately with a fallback if the font is not yet loaded
   * fallback
   * the browser will hide text for a very short time while the font is loading,
   * then display the text with the fallback font. If the font still has not loaded, it will be swapped out.
   * optional
   * The browser will hide text for a very short time while the font is loading,
   * then display the text with the fallback font. If the font has not loaded, it will not be used at all.
   */
  display: "swap",
  variable: "--font-poppins",
});

export { poppins };
