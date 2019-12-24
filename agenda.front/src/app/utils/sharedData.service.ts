import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  private data: any;

  constructor() {}

  saveData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = {};
  }
}
