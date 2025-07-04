import Image from "../assets/img.png";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <img src={Image} alt="Decorative Pattern" className="mx-auto mb-4" />

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60 mb-6">{subtitle}</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/vansh720"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary">
            GitHub
          </a>
          <a
            href="https://portfolio-tawny-eight-43.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary">
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
