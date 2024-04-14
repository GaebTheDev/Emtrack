export interface Company {
    id: string;
    name: string;
    description: string;
    address: [{
        street: string,
        streetno: number,
        barangay: string,
        city: string,
        zipcode: number
    }];
    phonenumber: string;
    imgSrc: string;
    ownerid: string;
    establishedDay: number;
    establishedMonth: number;
    establishedYear: number;
}