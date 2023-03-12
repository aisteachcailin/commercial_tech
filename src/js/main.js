import '../scss/style.scss';
import '../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from "@fancyapps/ui";
import {banner, product, certificate} from './modules/slider';
import {dropdown} from './modules/menu';

Fancybox.bind("[data-fancybox]", {

});

let menu = document.querySelector('.header__adapt__right__menu');
let close = document.querySelector('.header__adapt__right__menu--close');
let burger_tablet = document.querySelector('.header__adapt__right--burger');
let burger_mobile = document.querySelector('.header__mobile--burger');

dropdown(burger_mobile, burger_tablet, menu, close);
