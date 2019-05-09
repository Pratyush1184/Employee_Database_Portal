export interface IEmployee{
    "id": number,
    "name": string,
    "role": string
}
export class Employee{
    constructor(
        public id:number,
        public name:string,
        public role:string
    ){};
};