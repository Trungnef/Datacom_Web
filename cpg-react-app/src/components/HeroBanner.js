import heroBanner from "../assets/hero-banner.jpg";

export default function HeroBanner() {
  return (
    <div>
      <img src={heroBanner} alt="Hero Banner" className="w-full h-[1000px]" />
    </div>
  );
}
