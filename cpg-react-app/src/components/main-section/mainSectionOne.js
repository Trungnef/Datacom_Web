import sectionOneItem from "../../assets/section-one-item.svg";

export default function MainSectionOne() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between gap-4">
        <img src={sectionOneItem} alt="Section One Item" className="" />
        <img src={sectionOneItem} alt="Section One Item" className="" />
        <img src={sectionOneItem} alt="Section One Item" className="" />
      </div>
    </div>
  );
}
