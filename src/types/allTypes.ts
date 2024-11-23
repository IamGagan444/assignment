export interface Company {
    id: string
    companyName: string
    logo: string
    email: string
    mobileNumber: string
    address: string
    gst_num: number
    totalUnpaidBooking: string
    availableCreditLimit: number
  }

export interface User {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  mobileNumber: string;
  currency: string;
  isActive: boolean;
  totalUnpaidBooking: string;
  availableLimit: number;
  id: string;
  companyId: string;
}
