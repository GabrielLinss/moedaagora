$(document).ready(function() {
    fetch('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,ARS-BRL,ETH-BRL,LTC-BRL,BTC-BRL,CNY-BRL,JPY-BRL,USDT-BRL,CAD-BRL,AUD-BRL')
        .then(response => response.json())
        .then(data => {
          const dolar = data["USD"];
          const dolarT = data["USDT"];
          const dolarC = data["CAD"];
          const dolarA = data["AUD"];
          const euro = data["EUR"];
          const peso = data["ARS"];
          const ethereum = data["ETH"];
          const litecoin = data["LTC"];
          const bitcoin = data["BTC"];
          const yuan = data["CNY"];
          const iene = data["JPY"];

          $('#dolar').text(`Dólar Comercial: R$ ${dolar.high}`);
          $('#dolarT').text(`Dólar Turismo: R$ ${dolarT.high}`);
          $('#dolarC').text(`Dólar Canadense: R$ ${dolarC.high}`);
          $('#dolarA').text(`Dólar Australiano: R$ ${dolarA.high}`);
          $('#euro').text(`Euro: R$ ${euro.high}`);
          $('#peso').text(`Peso Argentino: R$ ${peso.high}`);
          $('#ethereum').text(`Ethereum: R$ ${ethereum.high}`);
          $('#litecoin').text(`Litecoin: R$ ${litecoin.high}`);
          $('#bitcoin').text(`Bitcoin: R$ ${bitcoin.high}`);
          $('#yuan').text(`Yuan Chinês: R$ ${yuan.high}`);
          $('#iene').text(`Iene Japonês: R$ ${iene.high}`);
        })
        .catch(error => console.log(error));
});
