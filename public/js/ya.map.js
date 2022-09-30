/* eslint-disable object-shorthand */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
ymaps.ready(init);

let center = [59.94329304758942, 30.361084685607903];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 16,
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/apteka.png',
    iconImageSize: [30, 30],
    iconImageOffset: [-38, -50],
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark);
}
