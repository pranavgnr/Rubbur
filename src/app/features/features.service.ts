import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  title: string = ''
  constructor() { }

  createNewBranch(title: string) {  
    this.title = title;
  }

  getNewBranchTitle() {
    return this.title;
  }
}
