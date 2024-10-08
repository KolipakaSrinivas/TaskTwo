import FormNavigation from "./FormNavigation";
import { FormData,ErrorState } from "../Types";
interface FirstFormProps {
  formNumber: number;
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: ErrorState;
}
const FirstForm:React.FC<FirstFormProps> = ({ formNumber, formData, handleChange, error }) => {
  return (
    <div className="bg-white rounded-xl c-box-shadow md:w-[70vw] md:mx-auto mt-3">
      <FormNavigation formNumber={formNumber} />
      <div className="flex flex-col items-center mt-2 gap-1 p-2">
        <h2 className="text-gray-500 font-semibold">Step 1</h2>
        <h1 className="text-[#64799c] font-medium text-2xl">Your Profile</h1>
        <p className="leading-5 text-center min-[800px]:w-[60%] text-[#6d7990]">
          Enter the login information for your account. You will be able to
          create additional users after registering.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pt-5 pb-8 px-2">
        {/* Name Inputs */}
        <div className="flex flex-col gap-1 min-[600px]:flex-row justify-evenly min-[600px]:w-full">
          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] mb-2">
              First Name{" "}
              <span
                className={`${
                  error?.firstName ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="given-name"
              type="text"
              required
              placeholder={"Input Your First Name"}
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.firstName}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] mb-2">
              Last Name{" "}
              <span
                className={`${
                  error?.lastName ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Input Your Last Name"
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.lastName}</p>
            )}
          </div>
        </div>
        {/* Email and Phone Number */}
        <div className="flex flex-col min-[600px]:flex-row justify-evenly min-[600px]:w-full">
          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] my-2">
              Email{" "}
              <span
                className={`${
                  error?.email ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Input Your Email"
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber" className="text-[#5f6d86] my-2">
              Phone Number{" "}
              <span
                className={`${
                  error?.phoneNumber ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              onChange={handleChange}
              value={formData.phoneNumber}
              name="phoneNumber"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}" // Only allows exactly 10 digits
              placeholder="Enter Your Phone Number"
              maxLength={10}
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
              required
            />

            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.phoneNumber}</p>
            )}
          </div>
        </div>
        {/* Password and Confirm Password */}
        <div className="flex flex-col min-[600px]:flex-row justify-evenly min-[600px]:w-full">
          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] my-2">
              Password{" "}
              <span
                className={`${
                  error?.password ? "text-red-600 font-bold" : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              type="password"
              placeholder="Create Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number."
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error?.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#5f6d86] my-2">
              Confirm Password{" "}
              <span
                className={`${
                  error?.confirmPassword
                    ? "text-red-600 font-bold"
                    : "text-blue-600"
                }`}
              >
                *
              </span>
            </label>
            <input
              onChange={handleChange}
              autoComplete="new-password"
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Your Password"
              className="border-[#dee4f1] border-2 py-1 indent-2 outline-none hover:border-blue-500 rounded-md w-[270px]"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">
                {error?.confirmPassword}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
