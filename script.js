const atividade = document.querySelector("#atividade");
const sala = document.querySelector("#sala");
const dataInicial = document.querySelector("#data_inicial");
const dataFinal = document.querySelector("#data_final");
const btnReservar = document.querySelector("#btnReservar");
const tabela = document.querySelector("#tabela");

const reservas = [];

function addReserva(atividade, sala, dataInicial, dataFinal){
    const reserva = {
        atividade:    atividade,
        sala:         sala,
        dataInicial:  new Date(dataInicial),
        dataFinal:    new Date(dataFinal)
    }
    reservas.push(reserva);
    renderizarTabela();
}

function renderizarTabela(){
    tabela.innerHTML = `
        <table class="tabela">
            <tr>
                <th>Atividade</th>
                <th>Sala</th>
                <th>Data de início</th>
                <th>Data de fim</th>
            </tr>
            ${reservas.map(reserva => 
                `   
                <tr>
                    <td>${reserva.atividade}</td>
                    <td>${reserva.sala}</td>
                    <td>${getDataFormatada(reserva.dataInicial)}</td>
                    <td>${getDataFormatada(reserva.dataFinal)}</td>
                </tr>
                `
            ).join('')}
        </table>
    `;
}

function getDataFormatada(data){
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - 
    ${data.getHours()}:${data.getMinutes()}`
}

btnReservar.addEventListener('click', (e) => {
    e.preventDefault()
    addReserva(
        atividade.value,
        sala.value,
        dataInicial.value,
        dataFinal.value
    )
});