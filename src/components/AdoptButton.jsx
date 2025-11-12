
const AdoptButton = ({ text = "Adopter" }) => {
  return (
    <div>
      <button className="w-[90%] m-auto mb-4 bg-[#F2968F] text-white rounded-full px-6 py-3 flex justify-center items-center shadow-lg cursor-pointer">
        <span className="font-semibold">Adopter {text}</span>
      </button>
    </div>
  );
};

export default AdoptButton;
