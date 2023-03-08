import '../scss/style.scss';
import '../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from "@fancyapps/ui";
import {banner, product, certificate} from './modules/slider';
import {menuq} from './modules/menu';

Fancybox.bind("[data-fancybox]", {

});

let menuw = document.querySelector('.header__tablet__right__menu');
let closew = document.querySelector('.header__tablet__right__menu--close');
let burgerw = document.querySelector('.header__tablet__right--burger');

menuq(burgerw, menuw, closew);
