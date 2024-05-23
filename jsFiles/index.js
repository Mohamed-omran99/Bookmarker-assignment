



var SName = document.getElementById('SiteName');
var URLINP = document.getElementById('URL');
var Tbody = document.getElementById('Tbody')
var PList = [];

function AddSite() {
    var site = {
        siteN : SName.value,
        URLS : URLINP.value,
    }
    PList.push(site);
    displaysite();
    clearinputs ();
};

function displaysite() {
    var site = '';
    for (var i = 0; i < PList.length; i++) {
        site += `
    <tr>
        <td>${i}</td>
        <td>${PList[i].siteN}</td>
        <td>
            <i class="fa-solid fa-book-bookmark"></i>
            <button class="btn bg-primary px-3"><a href="${PList[i].URLS}" 
            class="text-white text-decoration-none" target="_blank">Visit</a></button>
        </td>
        <td>
            <i class="fa-solid fa-book-bookmark"></i>
            <button onclick="deleteSite ();" class="btn bg-danger px-3">delete</button>
        </td> 
    </tr> `
    }
    Tbody.innerHTML = site;
}


function clearinputs () {
    SName.value = '';
    URLINP.value = '';
};



function deleteSite (index) {
    PList.splice (index , 1);
    displaysite() ;
    console.log(PList);
}