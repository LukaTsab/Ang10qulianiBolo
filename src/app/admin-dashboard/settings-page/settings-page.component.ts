// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-settings-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './settings-page.component.html',
//   styleUrl: './settings-page.component.css'
// })
// export class SettingsPageComponent {

// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css'],
})
export class SettingsPageComponent {
  settingsForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      siteName: ['', [Validators.required]],
      supportEmail: ['', [Validators.required, Validators.email]],
      monthlyOrderGoal: ['', [Validators.required]],
    });
  }

  saveChanges(): void {
    if (this.settingsForm.valid) {
      this.message = 'Changes saved';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    } else {
      this.message = 'Please fill in all fields correctly.';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
}
