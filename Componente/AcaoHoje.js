import ValorDolar from "./ValorDolar.js"

export default {
    name: "AcaoHoje",
    components: {
        ValorDolar
    },
    data() {
        return {
            valorMercado: 0,
        }
    }, 
    template: `<div>
                    <p>Valor da Apple: {{valorMercado}}</p>
                    <valor-dolar></valor-dolar>
                </div>`,
    methods: {
        puxarAcao() {
            fetch('https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_3c5b46971934405cbd9523a2e156136f')
            .then(r => r.json())
            .then(json => {
                this.valorMercado = json.marketCap;
            })
        }
    },
    created() {
        this.puxarAcao();
    }
}