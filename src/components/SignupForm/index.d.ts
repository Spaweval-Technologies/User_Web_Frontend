type UserDetails = {
    firstName: string;
    lastName: string;
    email: string;
    mobile_number: string | null;
    password: string;
    referal_code?: string;
}

export default UserDetails;