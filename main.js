$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoLi = $(`
        <li>
            <a href="#">${novaTarefa}</a>
        </li>
        `);
        $(novoLi).appendTo('ul');
        $('#nova-tarefa').val('');
    })

    $('ul').on('click', 'a', function() {
        $(this).css('text-decoration', 'line-through');
    })

    $('ul').on('dblclick', 'a', function() {
        $(this).css('text-decoration', 'none');
    })
    
})