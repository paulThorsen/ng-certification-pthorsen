import { Injectable } from '@angular/core';

const ZIP_CODES_LOCAL_STORAGE_KEY = 'weatherZipCodes';

@Injectable()
export class ZipCodeManagerService {
  constructor() {}

  public addZipCode = (zipCode: number): void => {
    let updatedZipCodes = this.getZipCodesFromLocalStorage();
    updatedZipCodes.push(zipCode);
    this.setZipCodesToLocalStorage(updatedZipCodes);
  };

  public removeZipCode = (zipCode: number): void => {
    let updatedZipCodes = this.getZipCodesFromLocalStorage().filter(
      zip => zip !== zipCode
    );
    this.setZipCodesToLocalStorage(updatedZipCodes);
  };

  public getZipCodesFromLocalStorage = (): number[] => {
    return JSON.parse(localStorage.getItem(ZIP_CODES_LOCAL_STORAGE_KEY));
  };

  public setZipCodesToLocalStorage = (zipCodes: number[]): void => {
    localStorage.setItem(ZIP_CODES_LOCAL_STORAGE_KEY, JSON.stringify(zipCodes));
  };
}
