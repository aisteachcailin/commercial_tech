import '../scss/style.scss';
import '../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from "@fancyapps/ui";
import {dropdown} from './modules/menu.js';
import {banner, product, certificate} from './modules/slider';

Fancybox.bind("[data-fancybox]", {
  dragToClose: false
});
