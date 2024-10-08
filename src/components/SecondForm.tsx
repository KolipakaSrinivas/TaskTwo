import FormNavigation from "./FormNavigation";
import { FormData,ErrorState } from "../Types"; 
interface FirstFormProps {
  formNumber: number;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  error?: ErrorState;
  updateField:(name:string,value:boolean) => void
}


const SecondForm = ({ formNumber, formData, handleChange, error,updateField }:FirstFormProps) => {

  return (
    <div className="bg-white rounded-xl c-box-shadow md:w-[70vw] md:mx-auto mt-3">
      <FormNavigation formNumber={formNumber} />
      <div className="flex flex-col items-center mt-2 gap-1 p-2">
        <h2 className="text-gray-500 font-semibold">Step 2</h2>
        <h1 className="text-[#64799c] font-medium text-2xl">Your Profile</h1>
        <p className="leading-5 text-center min-[800px]:w-[60%] text-[#6d7990]">
          Enter the login information for your account. You will be able to
          create additional users after registering.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pt-5 pb-5 px-2">
        <h1 className="text-blue-500 text-xl py-2">Business Information</h1>
        {/* Brand Name Brand Type */}
        <div className="flex flex-col gap-1 min-[600px]:flex-row justify-evenly min-[600px]:w-full">
          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] mb-2">
              Brand Name{" "}
              <span
                className={`${
                  error?.brandName ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              value={formData.brandName}
              onChange={handleChange}
              name="brandName"
              type="text"
              placeholder="Input Your Brand Name"
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.brandName}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] mb-2">
              Brand Type{" "}
              <span
                className={`${
                  error?.brandType ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
              <div className="relative inline-block ml-2 group">
                <span className="bg-gray-400 px-[8px] cursor-pointer text-xs font-bold text-white py-[4px] rounded-full">
                  ?
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-60 p-2 bg-gray-500 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  Local: Brands with distribution in 3 divisions or less OR
                  multiple divisions but a total of 150 stores or less. Brands
                  with distribution in 4 or more divisions or in more than 150
                  stores.
                </div>
              </div>
            </label>
            <select
              name="brandType"
              onChange={handleChange}
              value={formData.brandType}
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            >
              <option value="">Select Type of Your Brand</option>
              <option value="Other">Other</option>
              <option value="eCommerce">eCommerce</option>
              <option value="Retail">Retail</option>
              <option value="Wholesale">Wholesale</option>
            </select>
            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.brandType}</p>
            )}
          </div>
        </div>
        {/* Email & City */}
        <div className="flex flex-col min-[600px]:flex-row justify-evenly min-[600px]:w-full">
          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] my-2">
              Email{" "}
              <span
                className={`${
                  error?.businessEmail
                    ? "text-red-600 font-bold"
                    : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              onChange={handleChange}
              value={formData.businessEmail}
              name="businessEmail"
              type="text"
              placeholder="Input Your Email"
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">
                {error?.businessEmail}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] my-2">
              City{" "}
              <span
                className={`${
                  error?.city ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              onChange={handleChange}
              value={formData.city}
              name="city"
              type="text"
              placeholder="Input City"
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.city}</p>
            )}
          </div>
        </div>
        {/* Zip code && Tax Id */}
        <div className="flex flex-col min-[600px]:flex-row justify-evenly min-[600px]:w-full">
          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] my-2">
              Zip Code{" "}
              <span
                className={`${
                  error?.zipCode ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.zipCode}
              name="zipCode"
              type="text"
              placeholder="Input Zip Code"
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.zipCode}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] my-2">
              Tax ID Number{" "}
              <span
                className={`${
                  error?.taxIDNumber
                    ? "text-red-600 font-bold"
                    : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              inputMode="numeric"
               title="Tax Id Number must be at least 8 characters long"
              pattern="[0-9]{8}"
              maxLength={8}
              required
              onChange={handleChange}
              value={formData.taxIDNumber}
              name="taxIDNumber"
              type="text"
              placeholder="Input Tax ID Number"
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.taxIDNumber}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-5  min-[600px]:flex-row justify-evenly min-[600px]:w-full">
          <div className="flex flex-col gap-3">
            <h2 className="text-blue-600">DOCUMENTS</h2>
            <p className="text-gray-500">
              Once the following documents are signed, you`ll be ready to get
              started 
            </p>
            <div className="border-2 border-[#dee4f1] py-1 px-2 rounded-md ">
              <p className="text-gray-600">
                Electronically sign the agreement(s)
                <span className={`${formData.documents.electronicallySign ? "text-green-500": "text-red-500"}`} >{formData.documents.electronicallySign ?  "✔" : "✘"}</span> 
              </p>
            </div>
            <div className="border-2 border-[#dee4f1] py-1 px-2 rounded-md ">
              <p className="text-gray-600">
                Non adult beverage Kroger market supplier waiver and release
                <span className={`${formData.documents.nonAdult ? "text-green-500": "text-red-500"}`}>{formData.documents.nonAdult ? "✔" : "✘"}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-2">
            <button
              type="button"
              className="text-white bg-blue-500 px-4 rounded-md opacity-85 py-2 shadow-md hover:bg-blue-400"
              onClick={()=>updateField("electronicallySign",!formData.documents.electronicallySign)}
            >
              &gt;
            </button>
            <button
              type="button"
              className="text-white bg-blue-500 px-4 rounded-md opacity-85 py-2 shadow-md hover:bg-blue-400"
              onClick={()=>updateField("nonAdult",!formData.documents.nonAdult)}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex mt-5 flex-col  min-[600px]:flex-row justify-evenly min-[600px]:w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-blue-600">COI PDF UPLOAD</h2>
            <p className="text-gray-500">
              Once the following documents are signed, you'll be ready to get
              started
            </p>
            <div className="border-2 border-[#dee4f1] py-1 px-2 rounded-md ">
              <p className="text-gray-600">
                Electronically sign the agreement(s)
                <span className={`${formData.coiPdfUpload ? "text-green-500 ": "text-red-500"}`}>{formData.coiPdfUpload ? "✔" : "✘"}</span> 
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <button
              className="text-white bg-blue-500 px-4 rounded-md opacity-85 py-2 shadow-md hover:bg-blue-400"
              type="button"
              onClick={()=> updateField("coiPdfUpload",!formData.coiPdfUpload)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SecondForm;