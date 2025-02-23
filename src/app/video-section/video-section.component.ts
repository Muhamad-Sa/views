import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  isMuted: boolean = true;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    
    // ✅ Ensure the video is muted before playing
    video.muted = true;
    
    // ✅ Try playing the video, and handle browser autoplay restrictions
    video.play()
      .then(() => console.log('Video autoplay started'))
      .catch(error => {
        console.log('Autoplay prevented. Attempting user interaction requirement...');
        video.setAttribute('playsinline', 'true'); // iOS Fix
      });
  }

  toggleMute(): void {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }
}
