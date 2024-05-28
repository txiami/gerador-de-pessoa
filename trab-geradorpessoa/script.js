$(document).ready(function() {
    $('#gerarPessoaBtn').click(function() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                const person = data.results[0];

                // Atualizando os elementos com os dados recebidos
                $('#img_caracter').attr('src', person.picture.large);
                $('#name_caracter').text(`${person.name.title} ${person.name.first} ${person.name.last}`);
                $('#status_caracter').text(person.email);
                $('#species_caracter').text(person.phone);
                $('#lastLocation').text(`${person.location.city}, ${person.location.state}, ${person.location.country}`);
                $('#firstIn').text(new Date(person.dob.date).toLocaleDateString());
            },
            error: function() {
                alert('Erro ao obter os dados da API.');
            }
        });
    });
});