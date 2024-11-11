document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    alert(`Atendimento agendado!\nNome: ${name}\nEmail: ${email}\nServiço: ${service}\nData: ${date}\nHora: ${time}`);

    // Aqui seria implementada a requisição para o backend com os dados de agendamento
});
