import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@Module({
  imports: [ReactiveFormsModule, HttpClientModule, FormsModule, BrowserModule, NgModule  ],

  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
