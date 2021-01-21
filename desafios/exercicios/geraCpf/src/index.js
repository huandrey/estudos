import GeraCPF from './models/GeraCPF';
import './assets/style.css';

(function () {
    const v = new GeraCPF()
    const result = document.querySelector('.result')
    result.innerHTML = v.generator()
})();