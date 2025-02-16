import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
@Component({ selector: 'app-video-section', templateUrl: './video-section.component.html', styleUrls: ['./video-section.component.css'] })
export class VideoSectionComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  isMuted: boolean = true;

  ngOnInit(): void {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.muted = true; // Force muted on load
    video.play().catch(() => console.log('Autoplay prevented'));
  }  

  toggleMute() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }  
}