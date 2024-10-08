export const FormNavigation = ({ formNumber }: { formNumber: number }) => {
  return (
    <div className="flex items-center justify-between h-14 bg-[#edeffd] rounded-lg">
      <div
        className={`flex-1 bg-[#71b1fc] transition-colors delay-100 h-full ${formNumber ==
          1 && "rounded-e-full"}  flex items-center justify-center `}
      >
        <span className="bg-white px-[12px] shadow-md font-bold text-[#71b1fc] py-[5px] rounded-full">
          1
        </span>
        <h1 className="hidden md:block text-white font-medium ml-2">
          Your Profile
        </h1>
      </div>
      <div
        className={`flex-1 h-full ${formNumber == 2 &&
          "bg-[#71b1fc]"} rounded-e-full flex items-center justify-center`}
      >
        <span
          className={`${formNumber == 2
            ? "bg-white text-[#71b1fc]"
            : "bg-gray-300 text-white"} shadow-md px-[12px] font-bold py-[5px] rounded-full`}
        >
          2
        </span>
        <h1
          className={`${formNumber == 2
            ? "text-white"
            : "text-gray-500"} hidden md:block  font-medium ml-2`}
        >
          Business Information
        </h1>
      </div>
      <div className="flex-1  h-full rounded-e-full flex items-center justify-center">
        <span className="bg-gray-300 shadow-md  px-[12px] font-bold text-white py-[5px] rounded-full">
          3
        </span>
        <h1 className="hidden md:block  text-gray-500 font-medium ml-2">
          Additional Users
        </h1>
      </div>
    </div>
  );
};

export default FormNavigation;
