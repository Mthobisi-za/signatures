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
   <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;" width="100%">
        <tbody>
            <tr>
                <td>

                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 900px; margin: 0 auto;" width="900">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="html_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="left" style="width: 100%;background-color: #FFFFFF;border-top-left-radius: 12px;border-bottom-left-radius: 12px;padding-top: 20px;padding-bottom: 20px;padding-left: 20px;">
                                                                    <div class="left" style="">
                                                                        <p class="title" style="font-family: 'Gibson';font-weight: bold;font-size: 30px;color: #102C48;line-height: 1;text-transform: uppercase;">${nameInput.value}</p>
                                                                        <p class="subtitle" style="font-family: 'Gibson';font-weight: 100;font-size: 25px;color: #102C48;line-height: 1;">${position.value}: ${brands.value}</p>
                                                                        <div class="icons" style="display: flex;flex-direction: column;flex-wrap: nowrap;row-gap: 10px;justify-content: flex-start;align-items: flex-start;">

                                                                            <table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; width: 100%; table-layout: fixed; direction: ltr; background-color: transparent; font-family: Arial, Helvetica, sans-serif; font-weight: 400; color: #101112; text-align: left; letter-spacing: 0px; word-break: break-all;"
                                                                                width="100%">
                                                                                <tbody style="vertical-align: top; font-size: 16px; line-height: 120%;">
                                                                                    <tr>
                                                                                        <td style="padding: 10px; word-break: break-word;  " width="10%">
                                                                                            <img alt="" src="./assets/phone.png" width="30px">
                                                                                        </td>
                                                                                        <td style="padding: 10px; word-break: break-word; font-size: 20px;font-family: 'Gibson';color: #102C48;" width="80%">${cell.value}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style="padding: 10px; word-break: break-word; " width="10%">
                                                                                            <img alt="" src="./assets/link.png" width="30px" />
                                                                                        </td>
                                                                                        <td style="padding: 10px; word-break: break-word;font-size: 20px;font-family: 'Gibson';color: #102C48;" width="80%">www.heinekenbeverages.co.za</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td style="padding: 10px; word-break: break-word;  " width="10%">
                                                                                            <img alt="" src="./assets/Home.png" width="30px" />
                                                                                        </td>
                                                                                        <td style="padding: 10px; word-break: break-word;font-size: 20px;font-family: 'Gibson';color: #102C48; " width="80%">Libertas Parva, Aan-de-Wagen Road, Stellenbosch, 7600, South Africa</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <!-- <div class="icon" style="display: flex;flex-direction: row;flex-wrap: nowrap;column-gap: 20px;justify-content: flex-start;align-items: center;">
                                                                                <img alt="" src="./assets/phone.png" style="width: 30px;">
                                                                                <p style="font-family: 'Gibson';font-weight: 100;font-size: 20px;color: #102C48;line-height: 1;text-decoration: none;">${cell.value}</p>
                                                                                </img>
                                                                            </div>
                                                                            <div class="icon" style="display: flex;flex-direction: row;flex-wrap: nowrap;column-gap: 20px;justify-content: flex-start;align-items: center;">
                                                                                <img alt="" src="./assets/link.png" style="width: 30px;" />
                                                                                <a href="www.heinekenbeverages.co.za" style="font-family: 'Gibson';font-weight: 100;font-size: 20px;color: #102C48;line-height: 1;text-decoration: none;">www.heinekenbeverages.co.za</a>
                                                                            </div>
                                                                            <div class="icon" style="display: flex;flex-direction: row;flex-wrap: nowrap;column-gap: 20px;justify-content: flex-start;align-items: center;">
                                                                                <img alt="" src="./assets/Home.png" style="width: 30px;" />
                                                                                <p style="font-family: 'Gibson';font-weight: 100;font-size: 20px;color: #102C48;line-height: 1;text-decoration: none;">Libertas Parva, Aan-de-Wagen Road, Stellenbosch, 7600, South Africa</p>
                                                                            </div> -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="50%">
                                                    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td class="pad" style="width:100%;">
                                                                <div align="center" class="alignment" style="line-height:10px">
                                                                    <div style="max-width: 450px;"><img height="auto" src="./assets/right_b.png" style="display: block; height: auto; border: 0; width: 100%; border-radius: 0px 12px 12px 0px;" width="450" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
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