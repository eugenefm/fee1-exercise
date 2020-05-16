document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

const app = {
  input: document.getElementById('select-screenshot'),
  image: document.getElementById('desktop-screenshot'),
  properties: {
    pizza: {
      alt: 'Desktop screenshot of pizza and bears.',
      src: './assets/browser-images/Pizza and Bears.png',
    },
    dog: {
      alt: 'Desktop screenshot of dog with shades.',
      src: './assets/browser-images/Dog with shades.png',
    },
    stormtrooper: {
      alt: 'Desktop screenshot of a lego Storm Trooper.',
      src: './assets/browser-images/Storm Trooper.png',
    },
    pinneapple: {
      alt: 'Desktop screenshot of a Pineapple Vacation',
      src: './assets/browser-images/Pineapple Vacation.png',
    },
    donuts: {
      alt: 'Desktop screenshot of donuts',
      src: './assets/browser-images/Donuts.png',
    },
  },
  changeImage: function (value) {
    Object.assign(this.image, this.properties[value]);
  },
  init: function () {
    this.input.addEventListener('change', (e) => {
      this.changeImage(e.target.value);
    });
  },
};
