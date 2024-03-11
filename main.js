const root = document.querySelector('#root');
const btnAdd = document.querySelector('.btn-add');
const showSum = document.querySelector('.show-sum');

function Counter() {
    let counterNum = 0;

    const makeElement = (tag, attr_n, attr_v, text) => {
        const output = document.createElement(tag);
        output.setAttribute(attr_n, attr_v);
        output.textContent = text;
        return output;
    }

    const updateCounter = (n) => {
        if (counterNum + n < 0) {
            return;
        }
        counterNum += n;
        number.textContent = counterNum;
        updateTotalSum();
    }

    const deleteCounter = (e) => {
        const counterElement = e.target.closest('.counter');
        if (counterElement) {
            counterElement.remove();
            updateTotalSum();
        }
    }

    const updateTotalSum = () => {
        const counters = document.querySelectorAll('.counter');
        let totalSum = 0;

        counters.forEach((counter) => {
            totalSum += parseInt(counter.querySelector('.number').textContent);
        });

        showSum.textContent = `Sum = ${totalSum}`;
    }

    const counter = makeElement('div', 'class', 'counter', '');
    const btnInc = makeElement('button', 'class', 'btn-inc', '+');
    const number = makeElement('h3', 'class', 'number', '0');
    const btnDec = makeElement('button', 'class', 'btn-dec', '-');
    const btnClr = makeElement('button', 'class', 'btn-clr', '0');
    const btnDel = makeElement('button', 'class', 'btn-del', 'x');

    btnInc.addEventListener('click', () => updateCounter(1));
    btnDec.addEventListener('click', () => updateCounter(-1));
    btnClr.addEventListener('click', () => updateCounter(-counterNum));
    btnDel.addEventListener('click', deleteCounter);

    counter.append(btnInc, number, btnDec, btnClr, btnDel);
    updateTotalSum();

    return counter;
}

const hdlAddCounter = () => {
    root.append(Counter());
}

btnAdd.addEventListener('click', hdlAddCounter);