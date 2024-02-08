document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ticketForm');
    const tableBody = document.querySelector('#ticketTable tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Получаем значения из формы
        const destination = form.destination.value;
        const price = parseFloat(form.price.value);
        const quantity = parseInt(form.quantity.value);

        // Создаем новую строку в таблице
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${destination}</td>
            <td>${price}</td>
            <td>${quantity}</td>
        `;

        // Добавляем строку в таблицу
        tableBody.appendChild(row);

        // Очищаем форму после добавления строки
        form.reset();
    });
});