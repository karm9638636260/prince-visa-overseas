import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    fullName: string;
    email: string;
    visaType: string;
    message: string;
    timestamp: bigint;
    phoneNumber: string;
    destinationCountry: string;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiry(id: bigint): Promise<Inquiry | null>;
    submitInquiry(fullName: string, email: string, phoneNumber: string, destinationCountry: string, visaType: string, message: string): Promise<bigint>;
}
