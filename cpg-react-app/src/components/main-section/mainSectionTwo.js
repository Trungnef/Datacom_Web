import sectionTwoItem from "../../assets/section-two-item.svg";

export default function MainSectionTwo() {
  return (
    <div className="container mx-auto mt-10">
      <div className="justify-between flex mx-10">
        <img src={sectionTwoItem} alt="Section Two Item" className="" />
        <img src={sectionTwoItem} alt="Section Two Item" className="" />
        <img src={sectionTwoItem} alt="Section Two Item" className="" />
      </div>
    </div>
  );
}
