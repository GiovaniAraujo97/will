import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_5cku8gg', 'template_4jktcjh', e.target as HTMLFormElement, {
        publicKey: 'EjIZf6ioLCTtSpt4y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Formulário enviado com sucesso!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Erro ao enviar o formulário. Tente novamente.');
        },
      );
  }
}