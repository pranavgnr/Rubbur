import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FeaturesService } from '../../features.service';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data!: string;
  @Input() cardExpanded!: boolean;
  @Output() buttonClicked = new EventEmitter<string>();

  title: string = '';
  editor!: Editor;
  html: any = ''
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(private featureService: FeaturesService) {}

  ngOnInit() {
    this.title = (this.data.split(' '))[0];
    this.editor = new Editor();
  }

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  onChange(words: object) {
    this.html = words;
  }

  onNewBranchClicked() {
    // console.log(this.title)
    // this.buttonClicked.emit(this.title)
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  saveData() {
    this.data = this.html
  }
  
}
