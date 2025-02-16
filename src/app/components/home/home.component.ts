import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  isMuted: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  toggleMute(): void {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }
}