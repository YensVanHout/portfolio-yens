import { titleProps } from "../../interfaces/interfaces";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: "700",
});

const Title = ({ children }: titleProps) => {
  return (
    <h1
      className={`text-7xl font-bold uppercase py-8 mb-5 text-white text-center ${spectral.className} tracking-wide`}
    >
      {children}
    </h1>
  );
};

export default Title;
