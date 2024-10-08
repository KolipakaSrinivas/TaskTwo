import { useState } from "react";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import { FormData, ErrorState } from "./Types";

function Mainregistration() {
  const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    brandType: "",
    businessEmail: "",
    city: "",
    zipCode: "",
    taxIDNumber: "",
    documents: {
      electronicallySign: false,
      nonAdult: false
    },
    coiPdfUpload: false
  };

  const [formNumber, setFormNumber] = useState<number>(1);
  const [error, setError] = useState<ErrorState>({});
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Validation functions (same as your existing code)
  const validateEmail = (email: string) =>
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|".*")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*)/i.test(
      String(email).toLowerCase()
    );
  const validatePhoneNumber = (phoneNumber: string): boolean =>
    /^[0-9]{10}$/.test(phoneNumber);
  const validatePassword = (password: string) =>
    /[a-z]/g.test(password) &&
    /[A-Z]/g.test(password) &&
    /\d/g.test(password) &&
    password.length >= 8;
  const validateConfirmPassword = (password: string, confirmPassword: string) =>
    confirmPassword === password;
  const validateTaxNumber = (taxNumber: string): boolean =>
    /^[0-9]{8}$/.test(taxNumber);

  const validateForm = (step: number): boolean => {
    const errorObj: ErrorState = {};

    if (step === 1) {
      if (!formData.firstName) errorObj.firstName = "First Name is required";
      if (!formData.lastName) errorObj.lastName = "Last Name is required";
      if (!formData.email) {
        errorObj.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        errorObj.email = "Invalid Email Format";
      }
      if (!formData.phoneNumber) {
        errorObj.phoneNumber = "Phone Number is required";
      } else if (!validatePhoneNumber(formData.phoneNumber)) {
        errorObj.phoneNumber = "Invalid Phone Number";
      }
      if (!formData.password) {
        errorObj.password = "Password is required";
      } else if (!validatePassword(formData.password)) {
        errorObj.password = "Password must be at least 8 characters";
      }
      if (!formData.confirmPassword) {
        errorObj.confirmPassword = "Confirm Password is required";
      } else if (
        !validateConfirmPassword(formData.password, formData.confirmPassword)
      ) {
        errorObj.confirmPassword = "Passwords do not match";
      }
    } else if (step === 2) {
      if (!formData.brandName) errorObj.brandName = "Brand Name is required";
      if (!formData.brandType) errorObj.brandType = "Brand Type is required";
      if (!formData.businessEmail) {
        errorObj.businessEmail = "Business Email is required";
      } else if (!validateEmail(formData.businessEmail)) {
        errorObj.businessEmail = "Invalid Email Format";
      }
      if (!formData.zipCode) errorObj.zipCode = "Zip Code is required";
      if (!formData.taxIDNumber) {
        errorObj.taxIDNumber = "Tax ID Number is required";
      } else if (!validateTaxNumber(formData.taxIDNumber)) {
        errorObj.taxIDNumber = "Invalid Tax ID Number";
      }
      if (!formData.city) errorObj.city = "City is required";
      if (
        !formData.coiPdfUpload ||
        !formData.documents.electronicallySign ||
        !formData.documents.nonAdult
      ) {
        errorObj.documents = "please sign the required Documents";
      }
    }

    setError(errorObj);
    return Object.keys(errorObj).length === 0;
  };

  const handleNext = () => {
    if (validateForm(formNumber)) {
      setFormNumber(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (formNumber > 1) {
      setFormNumber(prev => prev - 1);
    }
  };

  function updateField(name: string, value: boolean): void {
    setFormData(prevFormData => {
      // Check if the field belongs to the "documents" object
      if (name in prevFormData.documents) {
        return {
          ...prevFormData,
          documents: {
            ...prevFormData.documents,
            [name]: value // Update nested document field
          }
        };
      } else {
        // For all other fields at the root level
        return {
          ...prevFormData,
          [name]: value // Update root level field
        };
      }
    });
  }
  // localstorage
  function setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm(1) && validateForm(2)) {
      setItem("formDataTaskTwo", formData);
      alert("Form submitted successfully! Your form data is stored in localStorage with key 'formDataTaskTwo'.");
      setFormData(initialFormData);
      setFormNumber(1);
    } else {
      alert("Please fill in all required fields!");
      if (error.documents) {
        alert("please sign the agreement Documents");
      }
    }
  };
  // localStorage
  function getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  console.log("formData",getItem("formDataTaskTwo"));

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form className="flex flex-col p-3 mx-5">
      <div className="flex justify-center">
        <h1 className="text-xl text-white">Create New Account</h1>
        <h3 className="text-white pl-10">Contact Us</h3>
      </div>

      {formNumber === 1 &&
        <FirstForm
          formData={formData}
          handleChange={handleChange}
          error={error}
          formNumber={formNumber}
        />}
      {formNumber === 2 &&
        <SecondForm
          formData={formData}
          formNumber={formNumber}
          handleChange={handleChange}
          error={error}
          updateField={updateField}
        />}

      <div className="mt-auto flex justify-around pt-4">
        {formNumber > 1 &&
          <button className="text-blue-500" type="button" onClick={handleBack}>
            &lt; Back
          </button>}

        {formNumber === 2
          ? <button
              className="bg-blue-400 px-4 py-2 rounded-md text-white shadow-md"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          : <button
              className="bg-blue-400 px-4 py-2 rounded-md text-white shadow-md"
              type="button"
              onClick={handleNext}
            >
              Next Step &gt;
            </button>}
      </div>
    </form>
  );
}

export default Mainregistration;
