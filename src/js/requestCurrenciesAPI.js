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

          $('#dolar').text(`${dolar.name}`);
          $('#dolarHigh').text(`Mais alto: R$ ${dolar.high}`);
          $('#dolarLow').text(`Mais baixo: R$ ${dolar.low}`);
          $('#dolarVariation').text(`Última variação: ${dolar.pctChange}%`);

          $('#dolarT').text(`${dolarT.name}`);
          $('#dolarTHigh').text(`Mais alto: R$ ${dolarT.high}`);
          $('#dolarTLow').text(`Mais baixo: R$ ${dolarT.low}`);
          $('#dolarTVariation').text(`Última variação: ${dolarT.pctChange}%`);

          $('#dolarC').text(`${dolarC.name}`);
          $('#dolarCHigh').text(`Mais alto: R$ ${dolarC.high}`);
          $('#dolarCLow').text(`Mais baixo: R$ ${dolarC.low}`);
          $('#dolarCVariation').text(`Última variação: ${dolarC.pctChange}%`);

          $('#dolarA').text(`${dolarA.name}`);
          $('#dolarAHigh').text(`Mais alto: R$ ${dolarA.high}`);
          $('#dolarALow').text(`Mais baixo: R$ ${dolarA.low}`);
          $('#dolarAVariation').text(`Última variação: ${dolarA.pctChange}%`);

          $('#euro').text(`${euro.name}`);
          $('#euroHigh').text(`Mais alto: R$ ${euro.high}`);
          $('#euroLow').text(`Mais baixo: R$ ${euro.low}`);
          $('#euroVariation').text(`Última variação: ${euro.pctChange}%`);

          $('#peso').text(`${peso.name}`);
          $('#pesoHigh').text(`Mais alto: R$ ${peso.high}`);
          $('#pesoLow').text(`Mais baixo: R$ ${peso.low}`);
          $('#pesoVariation').text(`Última variação: ${peso.pctChange}%`);

          $('#ethereum').text(`${ethereum.name}`);
          $('#ethereumHigh').text(`Mais alto: R$ ${ethereum.high}`);
          $('#ethereumLow').text(`Mais baixo: R$ ${ethereum.low}`);
          $('#ethereumVariation').text(`Última variação: ${ethereum.pctChange}%`);

          $('#litecoin').text(`${litecoin.name}`);
          $('#litecoinHigh').text(`Mais alto: R$ ${litecoin.high}`);
          $('#litecoinLow').text(`Mais baixo: R$ ${litecoin.low}`);
          $('#litecoinVariation').text(`Última variação: ${litecoin.pctChange}%`);

          $('#bitcoin').text(`${bitcoin.name}`);
          $('#bitcoinHigh').text(`Mais alto: R$ ${bitcoin.high}`);
          $('#bitcoinLow').text(`Mais baixo: R$ ${bitcoin.low}`);
          $('#bitcoinVariation').text(`Última variação: ${bitcoin.pctChange}%`);

          $('#yuan').text(`${yuan.name}`);
          $('#yuanHigh').text(`Mais alto: R$ ${yuan.high}`);
          $('#yuanLow').text(`Mais baixo: R$ ${yuan.low}`);
          $('#yuanVariation').text(`Última variação: ${yuan.pctChange}%`);

          $('#iene').text(`${iene.name}`);
          $('#ieneHigh').text(`Mais alto: R$ ${iene.high}`);
          $('#ieneLow').text(`Mais baixo: R$ ${iene.low}`);
          $('#ieneVariation').text(`Última variação: ${iene.pctChange}%`);
        })
        .catch(error => console.log(error));
});
