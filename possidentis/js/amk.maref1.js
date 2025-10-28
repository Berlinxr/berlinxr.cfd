$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        if (tab_id == "unclickable") return;

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
});
function aciklamaDegis(string) {
    var aciklama = document.getElementById("kategori_aciklama");
    aciklama.textContent = string;
}
function aramaCubugu() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("aramaKutusu");
    filter = input.value.toUpperCase();
    var tables = [];
    for (let i = 0; i < document.getElementsByTagName("table").length; i++) {
        tables.push(document.getElementsByTagName("table")[i]);
    }
    tables.forEach(t => {
        table = t;
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });
}