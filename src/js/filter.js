$(function(){
        $('.filter').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            let valor = $(this).attr('data-nombre');
            if(valor == 'todos') {
                $('.contenedor-projects').show('1000');
            } else {
                $('.contenedor-projects').not('.' + valor).hide('1000');
                $('.contenedor-projects').filter('.' + valor).show('1000');
            }

        });



});