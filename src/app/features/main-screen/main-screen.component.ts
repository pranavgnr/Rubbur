import { Component, Input, input } from '@angular/core';
import { FeaturesService } from '../features.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {

  constructor(private featureService: FeaturesService) {}

  cardExpanded: boolean = false;
  body: string = 'title Card subtitle Some quick example text to build on the card title and make up the bulk of the mainCards content';
  body1 = 'buitle Card subtitle Some quick example text to build on the card title and make up the bulk of the mainCards content,title Card subtitle Some quick example text to build on the card title and make up the bulk of the mainCards content,title Card subtitle Some quick example text to build on the card title and make up the bulk of the mainCards content,title Card subtitle Some quick example text to build on the card title and make up the bulk of the mainCards content,im awesome, i love women etc etc etfc, im gonna beat and reach the top';
  expandedData: string = ""
  mainCards = [this.body1,this.body,this.body,this.body]
  mainTitles = ["sub1","sub2","sub3"]
  newBranchName: string = ''

  ngOnInit() {
    this.newBranchName = 'main'
  }

  onExpand(data: string) {
    this.cardExpanded = true;
    this.expandedData = data;
  }

  unexpandCard() {
    this.cardExpanded = false;
  }

  newBranch() {
    this.body = 'im awesome, i love women etc etc etfc, im gonna beat and reach the top'
    this.mainCards.push(this.body)
  }

  recieveData(data: string) {
    console.log(data)
    this.newBranchName = data;
    console.log(this.newBranchName)
  }

}
