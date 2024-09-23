import Image from "next/image";

const Logo = () => {
  return (
    <div className="z-30">
      <Image
        width={100}
        height={100}
        src="/Images/myLogo.png"
        alt="my logo"
        id="logo"
      />
    </div>
  );
};

export default Logo;
