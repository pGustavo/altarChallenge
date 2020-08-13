import {Component, OnInit} from '@angular/core';
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  numbers: number[];
  char = '';
  usedIndex = [];
  hundredArray = [];
  code = '';
  interval = 0;
  paymentNumber = 1;


  constructor(private service: CommonService) {
    this.numbers = Array(10).fill(0).map((x, i) => i);
  }

  ngOnInit() {
  }

  updateChar(customChar: string, event) {
    if (event.key === 8 || event.key === 46) {
      return;
    }
    this.char = customChar;
    const input = document.querySelector("#char") as HTMLInputElement;
    input.disabled = true;
    setTimeout(() => {
      input.disabled = false;
      input.value = '';
      this.char = '';
    }, 4000);
  }

  genRandomgrid() {
    let withCustomChar = this.char !== '';
    this.hundredArray = Array(100).fill(0).map((x, i) => i);
    const defaultLib = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const allCells = Array.from(document.querySelectorAll("[class^=row_]"));
    allCells.forEach(cell => cell.innerHTML = '');
    const randIndexCell = this.shuffle(this.hundredArray);
    this.usedIndex = [];

    if (withCustomChar) {
      for (let i = 0; i < 20; i++) {
        const index = randIndexCell[0];
        allCells[index].innerHTML = this.char;
        randIndexCell.splice(0, 1);
      }
      for (let j = 0; j < 80; j++) {
        const index = randIndexCell[0];
        const indexChar = this.getRandNumber(26);
        allCells[index].innerHTML = defaultLib[indexChar];
        randIndexCell.splice(0, 1);
      }
    } else {
      for (let j = 0; j < 100; j++) {
        const index = randIndexCell[0];
        const indexChar = this.getRandNumber(26);
        allCells[index].innerHTML = defaultLib[indexChar];
        randIndexCell.splice(0, 1);
      }
    }
    this.updateCode();
    if (this.interval === 0) {
      this.interval = setInterval(() => {
        this.genRandomgrid();
      }, 2000);
    }
  }

  getRandNumber(max: number): any {
    const rand = Math.floor(Math.random() * max);
    if (this.usedIndex.indexOf(rand) === -1) {
      return rand;
    } else {
      return this.getRandNumber(max);
    }
  }

  shuffle(array: any): any {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  updateCode() {
    const allCells = Array.from(document.querySelectorAll("[class^=row_]"));
    const date = new Date();
    const seconds = date.toString().split(' ')[4].split(':')[2];
    const number1 = seconds.split('')[0];
    const number2 = seconds.split('')[1];
    const codeLetter1 = allCells.find(x => x.className === 'row_' + number1 + 'c' + number2).innerHTML;
    const codeLetter2 = allCells.find(x => x.className === 'row_' + number2 + 'c' + number1).innerHTML;
    const count1 = this.getLowestNumber(allCells.filter(x=>x.innerHTML === codeLetter1).length);
    const count2 = this.getLowestNumber(allCells.filter(x=>x.innerHTML === codeLetter2).length);
    this.code = count1.toString() + count2.toString();
    const paymentObj = {name: 'payment'+this.paymentNumber, ammount: '', code: this.code, grid: ''};
    this.service.postPayment(paymentObj).subscribe();
    this.paymentNumber++;
  }

  getLowestNumber(number: number) {
    let divider = 2;
    while (number > 9) {
      number = number / divider;
      divider ++;
    }
    return Math.ceil(number);
  }
}
