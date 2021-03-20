(function ($) {
    $.fn.table = function (arrTableHead, arrTableBody) {
        let list = [];
        list.push('<table border="1" cellspacing="0">');
        list.push('<thead>');
        list.push('<tr>');
        for (let i = 0; i < arrTableHead.length; i++) {
            list.push('<th>');
            list.push(arrTableHead[i]);
            list.push('</th>');
        }
        list.push('</tr>');
        list.push('</thead>');

        list.push('<tbody>');
        list.push('<tr>');

        list.push('</tr>');
        list.push('</tbody>');
        for (let i = 0; i < arrTableBody.length; i++) {
            list.push('<tr>');
            //生成一个序号的td
            list.push('<td>' + (i + 1) + '</td>');
            for (let key in arrTableBody[i]) {
                list.push('<th>');
                list.push(arrTableBody[i][key]);
                list.push('</th>');
            }
            list.push('</tr>');

        }
        list.push('</table>');
        console.log(list);
        this.html(list.join(''))
    };
    console.log(1);
}(window.jQuery));