'use strict';

// Robot prototype

const mainCore = {
  getMainInfo() {
    return `Robot ${this.name}, cpu version ${this.cpuVersion}`;
  },
  getAdditionalInfo() {
    return `Update version: ${this.softwareVersion}`;
  },
  updateRobot(updateVersion) {
    this.softwareVersion = updateVersion;
    return `${this.name} updated to ${updateVersion}`;
  },
};

const navigationCore = {
  getCoords() {
    const x = this.getCoords;
    const y = this.getCoords;

    return `x=${x} y=${y}`;
  },
  setTargetCoords(x, y) {
    this.target.coords.x = x;
    this.target.coords.y = y;
  },
};

const movementCore = {
  moveForward(step = 1) {
    this.coords.y += step;
  },
  moveBack(step = 1) {
    this.coords.y -= step;
  },
  moveLeft(step = 1) {
    this.coords.x -= step;
  },
  moveRight(step = 1) {
    this.coords.x += step;
  },
};

const kerbin = {
  name: 'Kerbin',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },
};

Object.setPrototypeOf(kerbin, mainCore); 
Object.setPrototypeOf(movementCore, navigationCore);
Object.setPrototypeOf(navigationCore, mainCore);