/*global $, jQuery, alert*/


/* barevne oznaci zvoleny radek a aktivuje tlacitko diagnoza */
$("#table_patients > tbody > tr").click(function (e) {
    $(this).addClass('selected').siblings().removeClass('selected');
    $("#btn_diag").prop('disabled', false);

});

/* funkce na otevreni okna s diagnozami */
$("#btn_diag").click(function (e) {
    var selectedRow = $("#table_patients .selected");
    
    var selectedId = selectedRow.attr('id');
    selectedId = selectedId.replace("ID",'');
    

    $('#modal_diag' + selectedId).modal();
});