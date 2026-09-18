import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { sendContactEmail } from '../../../Services/contact';

type FeedbackType = 'success' | 'error' | null;

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  isEmailModalOpen = false;
  isSending = false;
  feedbackType: FeedbackType = null;

  openEmailModal(): void {
    this.feedbackType = null;
    this.isEmailModalOpen = true;
  }

  closeEmailModal(): void {
    if (!this.isSending) {
      this.isEmailModalOpen = false;
    }
  }

  sendEmail(form: NgForm): void {
    if (form.invalid || this.isSending) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.feedbackType = null;

    sendContactEmail(form.value)
      .then(() => {
        this.feedbackType = 'success';
        form.resetForm();
      })
      .catch(() => {
        this.feedbackType = 'error';
      })
      .finally(() => {
        this.isSending = false;
      });
  }

}
