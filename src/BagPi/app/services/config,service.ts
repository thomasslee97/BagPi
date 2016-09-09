import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class BagPiSlideshowService {
    public screens = [
        {
            title: 'Twitter',
            icon: '<i class="fa fa-twitter"></i>',
            username: 'Tom Lee',
            url: 'https://twitter.com/thomasslee97',
            handle: '@thomasslee97'
        },
        {
            title: 'Facebook',
            icon: '<i class="fa fa-facebook"></i>',
            username: 'Tom Lee',
            url: 'https://www.facebook.com/thomasslee97',
            handle: '/thomasslee97'
        }
    ];
}