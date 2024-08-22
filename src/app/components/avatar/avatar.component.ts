import { Component, OnInit } from '@angular/core';
import { images } from '../../interfaces/images'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  imgUrl: string = images.main;
  constructor() { }

  ngOnInit(): void {
  }

}
