interface Documents {
  electronicallySign: boolean;
  nonAdult: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  brandName: string;
  brandType: string;
  businessEmail: string;
  city: string;
  zipCode: string;
  taxIDNumber: string;
  documents: Documents;
  coiPdfUpload: boolean;
}

interface ErrorState {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  brandName?: string;
  brandType?: string;
  businessEmail?: string;
  zipCode?: string;
  taxIDNumber?: string;
  city?: string;
  documents?: string;
}


export type { FormData, ErrorState };
