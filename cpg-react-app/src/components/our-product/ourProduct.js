import newArrivalItem from "../../assets/newArrivalItem.svg";
import star from "../../assets/star.svg";

const Item = () => (
  <div>
    <img src={newArrivalItem} alt="New Arrival Item" className="w-60" />
    <p className="mt-2">Flower</p>
    <p>$ 1.5</p>
    <div className="flex mt-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <img key={index} src={star} alt="Star" className="w-4" />
      ))}
      <p className="ml-2">(2)</p>
    </div>
  </div>
);

export default function OurProduct() {
  const renderImages = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <Item key={index} />
    ));
  };

  return (
    <div className="container mx-auto mt-20">
      <span className="text-center">
        <p className="text-3xl">_____________ OUR PRODUCT _____________</p>
        <p className="font-thin mt-4 text-xl">Top sale in this week</p>
      </span>
      <div className="flex justify-between mt-10">{renderImages(6)}</div>
      <div className="flex justify-between mt-10">{renderImages(6)}</div>
    </div>
  );
}
