import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  private data: any;

  constructor() {}

  saveData(data: any) {
    this.data = data;
  }

  getData() {
    if (this.data) {
      return JSON.parse(JSON.stringify(this.data));
    } else {
      return null;
    }
  }

  clearData() {
    this.data = {};
  }
}
