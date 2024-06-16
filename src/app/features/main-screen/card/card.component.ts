import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeaturesService } from '../../features.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data!: string;
  @Output() buttonClicked = new EventEmitter<string>();

  title: string = ''

  constructor(private featureService: FeaturesService) {}

  ngOnInit() {
    this.title = (this.data.split(' '))[0]
  }

  onNewBranchClicked() {
    console.log(this.title)
    this.buttonClicked.emit(this.title)
  }
  
}
