import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  images: string[] = [
    "https://drive.google.com/thumbnail?id=1HY8sO4lqjrdrks7gE2_42nDCD095kkpy&sz=w2400",
    "https://drive.google.com/thumbnail?id=18VX4EOyljo9QEkKvl6fCGucqjsspOk5u&sz=w2400",
    "https://drive.google.com/thumbnail?id=10cGatns7Wpkhg5wj35W7DFA5bss57zZY&sz=w2400",
    "https://drive.google.com/thumbnail?id=1vqvLJeNNzZCxW0EDtFOZnBD2L2DPEyzG&sz=w2400"
  ]
  currentIndex: number = 0;
  interval: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
