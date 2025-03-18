import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
  showButton = false; // Controla a visibilidade do botão

  // Método para rolar a página ao topo
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  }

  // Listener para detectar a rolagem da página
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Exibe o botão após 300px de rolagem
    this.showButton = window.scrollY > 300;
  }
}