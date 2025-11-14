import { titleProps } from "../../interfaces/interfaces";
import { Spectral } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: "700",
});

const Title = ({ children, styling }: titleProps) => {
  return (
    <h1
      className={`text-7xl font-bold uppercase mb-5 text-custom-dark dark:text-custom-title text-center ${spectral.className} tracking-wide ${styling}`}
    >
      {children}
    </h1>
  );
};

export default Title;
