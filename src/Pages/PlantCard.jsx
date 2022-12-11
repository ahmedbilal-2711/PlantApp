import Bamboo from "../assets/bamboo.jpg";
const PlantCard = (props) => {
  return (
    <div className="p-1">
      <div className="bg-white rounded-lg shadow-lg shadow-slate-300 mb-3">
        <img src={Bamboo} alt="Bamboo Plant" className="h-[250px] rounded-md" />
        <i
          class="fa fa-heart-o"
          style={{
            color: "#23693F",
            fontSize: "1.4rem",
            position: "relative",
            top: "-220px",
            left: "220px",
          }}
          aria-hidden="true"
        ></i>
      </div>
      <h1 className="text-3xl">Bamboo Plant</h1>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
          <p>4.5</p>
        </div>
        <div className="border-l-2 border-[#0D986A] h-5"></div>
        <p className="border-2 border-[#0D986A] px-1 rounded-md text-[#0D986A]">
          4528 sold
        </p>
      </div>
      <h1 className="text-2xl text-[#0D986A]">$50</h1>
    </div>
  );
};

export default PlantCard;
