﻿import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class BagPiScreenService {
    public currentScreenEven = 0;
    public currentScreenOdd = 2;

    public screens = [
        {
            title: 'Twitter',
            icon: '<i class="fa fa-twitter"></i>',
            username: 'Tom Lee',
            url: 'https://twitter.com/thomasslee97',
            handle: '@thomasslee97',
            styles: [{
                color: '#1DA1F2',
                background: '#FFFFFF'
            }]
        },
        {
            title: 'Facebook',
            icon: '<i class="fa fa-facebook"></i>',
            username: 'Tom Lee',
            url: 'https://www.facebook.com/thomasslee97',
            handle: '/thomasslee97',
            styles: [{
                color: '#3b5998',
                background: '#FFFFFF'
            }]
        },
        {
            title: 'Blog',
            icon: '<img src="/media/Logo_Dark.png" width="36" height="36" />',
            username: './T',
            url: 'http://tom.grepped.co',
            handle: 'http://tom.grepped.co',
            styles: [{
                color: '#000000',
                background: '#FFFFFF'
            }]
        }
    ];
}