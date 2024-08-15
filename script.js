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
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: 'Gibson', Arial, sans-serif; max-width: 900px;">
        <tr>
            <td bgcolor="#ffff" width="50%" valign="middle" style="background-color: #fff; border-top-left-radius: 12px; border-bottom-left-radius: 12px; padding-right: 20px;padding-left: 20px; vertical-align: middle; height: 100%;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="height: 100%;">
                    <tr>
                        <td style="font-size: 35px; font-weight: 600; color: #102C48; line-height: 1; padding-bottom: 5px;">
                            ${nameInput.value}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 25px; color: #102C48; padding-bottom: 15px;">
                            ${position.value}: ${brands.value}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 20px; color: #102C48; padding-bottom: 10px;">
                            <img src="./assets/phone.png" alt="Phone" style="vertical-align: middle;middle;padding-right: 10px;" width="30" height="30" />&nbsp; 
                            <span> &nbsp;${cell.value}</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 20px; color: #102C48; padding-bottom: 10px;">
                            <img src="./assets/link.png" alt="Email" style="vertical-align: middle;padding-right: 10px;" width="30" height="30" /> &nbsp; 
                            <span> &nbsp;www.heinekenbeverages.co.za</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 20px; color: #102C48;">
                            <img src="./assets/Home.png" alt="Address" style="vertical-align: middle;padding-right: 10px;" width="30" height="30" />&nbsp; 
                            <span> &nbsp;Libertas Parva, Aan-de-Wagen Road, Stellenbosch, 7600, South Africa</span>
                        </td>
                    </tr>
                </table>
            </td>
            <td width="50%" valign="middle" style="text-align: right;">
                <img src="./assets/right_b.png" alt="Placeholder Image" style="width: 100%; max-width: 100%; height: auto; margin-right: 0px; border-top-right-radius: 12px; border-bottom-right-radius: 12px;" />
            </td>
        </tr>
    </table>
    `

    function animate() {
        document.querySelector('.form').classList.add('animateOut');
        document.querySelector('.form').style.display = 'none';
        document.querySelector('body').insertAdjacentHTML('afterbegin', str);

        document.querySelector('body').style.background = '#e3e3e3';
        document.querySelector('body').style.justifyContent = 'center';
        document.querySelector('body').style.alignItems = 'center';
        document.querySelector('body').style.display = 'flex';
        document.querySelector('.tooltip').style.display = 'inline-block';
        document.querySelector('.card').style.display = 'flex';
        document.querySelector('.card').classList.add('animateIn');

    }
    if (verify()) {
        animate();
    }
}

function copy() {
    function copyClipboard() {
        let copyText = $(".table").html();
        navigator.clipboard.writeText(copyText);
    }
    copyClipboard();

    // $(".copyHtmlMail").click(function() {
    //     copyClipboard();
    // });
}