import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  showDescriptionErrors(): string | undefined {
    const descriptionForm = this.postForm!.get('description');
    if (descriptionForm!.touched && !descriptionForm!.valid) {
      if (descriptionForm!.errors!.required) {
        return 'Description is required';
      } else if (descriptionForm!.errors!.minlength) {
        return 'Description should be min 10 chars';
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    console.log(this.postForm.value);
  }
}
