var maneder = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
var dager = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'];
var ider = 0;
var pass = "110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110000 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110001 100000 110001 110001 110000 110000 110000 110000 100000 110001 110001 110000 110000 110000 110000";

function dateDiff(date1, date2) {
    // round to the nearest whole number
    let diff = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
    if (diff == 1) {
        return `Om ${diff} dag.`;
    } else if (diff == 0) {
        return `I dag.`;
    } else if (diff <= 7 && diff >= 1) {
        return `Om ${diff} dager.`;
    } else if (diff >= 8) {
        return `Om ${diff} dager.`;
    } else {
        let diffrnc = '' + diff;
        let diffrnce = diffrnc.slice(1);
        if (diffrnce == 1) {
            return `${diffrnce} dag siden.`;
        } else {
            return `${diffrnce} dager siden.`;
        }
    }
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function binaryto(input) {
    let inputt = input.split('');
    //console.log( inputt );
    let output = [];
    for (var i = 0; i < input.length; i++) {
        output.push(inputt[i].charCodeAt(0).toString(2));
    }
    return output.join(' ');
}

function binaryfrom(input) {
    let output = input.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    return output;
}

function cofl(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function myFunction() {
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function cfl(str) {
    const arrOfWords = str.split(" ");
    const arrOfWordsCased = [];

    for (let i = 0; i < arrOfWords.length; i++) {
        const word = arrOfWords[i];
        arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }

    return arrOfWordsCased.join(" ");
}

$('#skrive').click(function() {
    let passordlogginn = prompt('Hva er passordet?');
    if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
        skriv({
            navn: prompt('Navn'),
            etikett: prompt('Etikett'),
            dato: `new Date(${prompt('År')}, ${prompt('Måned') - 1}, ${prompt('Dag')})`,
            melding: prompt('Melding når tiden er ute')
        });
    } else {
        alert('Feil passord');
        $('#checkbox').prop('checked', false);
    }
    //$('body').append('<h1>Trykket</h1>');
});

// $('#les').click(function() {
//     les({
//         navn: prompt('Navn')
//     })
// })

function skriv(input) {
    firebase.database().ref(`/telle/${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`).update({
        navn: input.navn,
        dato: input.dato,
        etikett: input.etikett,
        melding: input.melding
    });
    console.log('Trykket');
    alert('Trykket');
    $('#checkbox').prop('checked', false);
    location.reload();
}

function les(input) {
    firebase.database().ref(`/telle/${input.navn.toLowerCase()}`).once('value').then(function(snapshot) {
        let dato = eval(snapshot.val().dato);
        console.log(dato);
        $('#myTable ').append(`
        <tr id="${ider}" navn="${input.navn.toLowerCase()}">
            <td>${cfl(snapshot.val().navn.toLowerCase())}</td>
            <td>${cofl(snapshot.val().etikett)}</td>
            <td>${cfl(dager[dato.getUTCDay()])} den ${dato.getDate()}. ${maneder[dato.getMonth()]} ${dato.getFullYear()}</td>
            <td>${dateDiff(new Date(), dato)}</td>
            <td class="delete"><input type="checkbox" del="${input.navn.toLowerCase()}" class="check"></td>
        </tr>
        `);
        ider++;
        //$('body').append(`<br/>${cfl(input.navn.toLowerCase())} sin bilett går ut ${dager[dato.getDay()]} den ${dato.getDate()}. ${maneder[dato.getMonth()]} ${dato.getFullYear()}, om ${dateDiff(new Date(), dato)}`);
    });
}

$('document').ready(function() {
    firebase.database().ref(`/telle/`).once('value').then(function(snapshot) {
        let keys = Object.keys(snapshot.val());
        console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            les({
                navn: keys[i]
            });
        }
    });
    zoomOut();
    zoomOut();
    zoomOut();
    zoomOut();
    zoomOut();
    zoomOut();
    zoomOut();
    if (window.innerWidth <= 900 || isMobile.any()) {
        $('#delete').html('<img src="trash.png">')
    }
});

$('#delete').click(function() {
    let passordlogginn = prompt('Hva er passordet?');
    if (passordlogginn == binaryfrom(binaryfrom(binaryfrom(pass)))) {
        let delet = confirm('Er du sikker på at du vil slette?');
        if (delet == true || delet) {
            $.each($('.check:checked'), function(index) {
                console.log($(this).attr('del'));
                firebase.database().ref(`/telle/${$(this).attr('del')}/`).set(null);
            });
            alert('Slettet');
            location.reload();
        } else {
            alert('Sletter Ikke');
        }
    } else {
        alert('Feil passord');
    }
});

function zoomIn() {
    var Page = document.getElementById('Body');
    var zoom = parseInt(Page.style.zoom) + 10 + '%'
    Page.style.zoom = zoom;
    return false;
}

function zoomOut() {
    var Page = document.getElementById('Body');
    var zoom = parseInt(Page.style.zoom) - 10 + '%'
    Page.style.zoom = zoom;
    return false;
}
