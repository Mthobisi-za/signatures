var nameInput = document.querySelector('.name'),
    position = document.querySelector('.position'),
    brands = document.querySelector('.brands'),
    cell = document.querySelector('.cell');
var nameErr = document.querySelector('.name'),
    positionErr = document.querySelector('.position'),
    brandsErr = document.querySelector('.brands'),
    cellErr = document.querySelector('.cell_error');

function verify() {
    if (nameInput.value == '' || position.value == '' || brands.value == '' || cell.value == '') {
        return false
    } else {
        // var checkBrands = (brands.value.replaceAll(' ', '(sp')).split('|');
        // console.log(checkBrands);
        var phoneChecker = cell.value.startsWith('+27');
        console.log(phoneChecker)
        if (phoneChecker == false) {
            cellErr.innerHTML = 'Please follow cell format +27';

        } else {
            return true
        }
    }
}

function submit() {
    var str = `
    <div class="card" style="width: 100%;display: flex;flex-direction: row;flex-wrap: nowrap;display: none;">

        <div class="left" style="width: 50%;background-color: #FFFFFF;border-top-left-radius: 12px;border-bottom-left-radius: 12px;padding-top: 20px;padding-bottom: 20px;padding-left: 20px;">
                <p class="title" style="font-family: 'Gibson';font-weight: bold;font-size: 30px;color: #102C48;line-height: 0.7;text-transform: uppercase;">${nameInput.value}</p>
                <p class="subtitle" style="font-family: 'Gibson';font-weight: 100;font-size: 25px;color: #102C48;line-height: 1;" >${position.value}: ${brands.value}</p>
                <div class="icons" style="display: flex;flex-direction: column;flex-wrap: nowrap;row-gap: 10px;justify-content: flex-start;align-items: flex-start;">
                    <div class="icon" style="display: flex;flex-direction: row;flex-wrap: nowrap;column-gap: 20px;justify-content: flex-start;align-items: center;">
                        <img style="width: 30px;" src="./assets/phone.png" alt="">
                        <p style="font-family: 'Gibson';font-weight: 100;font-size: 20px;color: #102C48;line-height: 1;text-decoration: none;">${cell.value}</p>
                    </div>
                    <div class="icon" style="display: flex;flex-direction: row;flex-wrap: nowrap;column-gap: 20px;justify-content: flex-start;align-items: center;">
                        <img style="width: 30px;" src="./assets/link.png" alt="">
                        <a style="font-family: 'Gibson';font-weight: 100;font-size: 20px;color: #102C48;line-height: 1;text-decoration: none;" href="www.heinekenbeverages.co.za">www.heinekenbeverages.co.za</a>
                    </div>
                    <div class="icon" style="display: flex;flex-direction: row;flex-wrap: nowrap;column-gap: 20px;justify-content: flex-start;align-items: center;">
                        <img style="width: 30px;" src="./assets/Home.png" alt="">
                        <p style="font-family: 'Gibson';font-weight: 100;font-size: 20px;color: #102C48;line-height: 1;text-decoration: none;" >Libertas Parva, Aan-de-Wagen Road, Stellenbosch, 7600, South Africa</p>
                    </div>
                </div>
        </div>
        <div style="display: flex;background-color:#C3CEE1;">
            <img style="width:100%;border-top-right-radius: 12px;border-bottom-right-radius: 12px;" src="./assets/right_b.png" alt="">
        </div>
    </div>
    `

    function animate() {
        document.querySelector('.form').classList.add('animateOut');
        document.querySelector('.form').style.display = 'none';
        document.querySelector('body').insertAdjacentHTML('afterbegin', str);
        document.querySelector('.card').style.display = 'flex';
        document.querySelector('.card').classList.add('animateIn');
        document.querySelector('body').style.background = '#F5F5F5'
    }
    if (verify()) {
        animate();
    }
}