import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  faqs: FAQ[] = [
    {
      question: 'What type of projects do you work on?',
      answer: 'I specialize in web development projects including e-commerce platforms, SaaS applications, portfolio websites, and custom web solutions. I work with Angular, Node.js, and modern web technologies.',
      isOpen: false
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. I always provide detailed project timelines during our initial consultation.',
      isOpen: false
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients worldwide. I\'m based in Cameroon (GMT+1) but am flexible with different time zones and can accommodate various meeting times.',
      isOpen: false
    },
    {
      question: 'What is included in your development services?',
      answer: 'My services include project planning, UI/UX design consultation, development, testing, deployment, and post-launch support. I also provide documentation and training if needed.',
      isOpen: false
    },
    {
      question: 'How do you handle project communication?',
      answer: 'I maintain regular communication through email, video calls, and project management tools. I provide weekly progress updates and am available for questions throughout the project.',
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.createContactForm();
  }

  ngOnInit(): void {
    // Initialize component
  }

  private createContactForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      budget: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      // Simulate form submission
      setTimeout(() => {
        const success = Math.random() > 0.1; // 90% success rate for demo
        
        this.isSubmitting = false;
        this.submitSuccess = success;
        
        if (success) {
          this.submitMessage = 'Thank you for your message! I\'ll get back to you within 24 hours.';
          this.contactForm.reset();
        } else {
          this.submitMessage = 'Sorry, there was an error sending your message. Please try again or email me directly.';
        }

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  toggleFAQ(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
    
    // Close other FAQs (optional - for accordion behavior)
    this.faqs.forEach((faq, i) => {
      if (i !== index) {
        faq.isOpen = false;
      }
    });
  }
}
