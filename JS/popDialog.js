/**
 * Created by lmy on 17-9-14.
 */

let num = 0;

function getRowNumber() {
    if (event.srcElement.tagName == 'TD') {
        let row = event.srcElement.parentElement;
        num = row.rowIndex;
    }
    else num = 0;
}

function add() {
    let name = document.getElementById('studioName').value;
    let row = document.getElementById('row').value;
    let col = document.getElementById('col').value;
    let status = document.getElementById('studioStatus').value;
    let type = document.getElementById('studioType').value;

    let newRow = document.getElementById('studioTable').insertRow();

    let studioName = newRow.insertCell();
    let seatRow = newRow.insertCell();
    let seatCell = newRow.insertCell();
    let totalNumber = newRow.insertCell();
    let studioType = newRow.insertCell();
    let studioStatus = newRow.insertCell();

    studioName.innerText = name;
    seatRow.innerText = row;
    seatCell.innerText = col;
    studioStatus.innerText = status;
    totalNumber.innerText = row * col;
    studioType.innerText = type;
}

function editStudio() {

    let lenght = document.getElementById('studioTable').rows[num].cells.length;

    let arr = [];
    for (let i = 0; i < lenght; i++) {
        arr[i] = document.getElementById('studioTable').rows[num].cells[i].innerHTML;
    }

    $("#sName").val(arr[0]);
    $("#srow").val(arr[1]);
    $("#scol").val(arr[2]);
    // $("#select").find("option[value=sType]").attr("selected", true);
}

function del() {
    let row = num;
    if (row == 0)
        return 0;
    else {
        document.getElementById('studioTable').deleteRow(row);
    }
}

$(function () {
    //展示层
    function showLayer(id) {
        var layer = $('#' + id),
            layerwrap = layer.find('.hw-layer-wrap');
        layer.fadeIn();
        //屏幕居中
        layerwrap.css({
            'margin-top': -layerwrap.outerHeight() / 2
        });
    }

    //隐藏层
    function hideLayer() {
        $('.hw-overlay').fadeOut();
    }

    $('.hwLayer-ok,.hwLayer-cancel,.hwLayer-close').on('click', function () {
        hideLayer();
    });

    //触发弹出层
    $('.show-layer').on('click', function () {
        var layerid = $(this).data('show-layer');
        showLayer(layerid);
    });

    //点击或者触控弹出层外的半透明遮罩层，关闭弹出层
    $('.hw-overlay').on('click', function (event) {
        if (event.target == this) {
            hideLayer();
        }
    });

});