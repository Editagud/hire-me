import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';









@Module({
  imports: [ReactiveFormsModule, HttpClientModule, FormsModule, BrowserModule, NgModule, NzFormModule,  ],

  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
