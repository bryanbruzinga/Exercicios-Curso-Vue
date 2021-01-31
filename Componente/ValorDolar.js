export default {
    name: 'ValorDolar',
    data() {
        return {
            dolar: 0,
        }
    },
    template: `<p>O valor do dólar/real atual é: {{dolar}}</p>`,
    methods: {
        puxarDolar() {
            fetch('https://api.exchangeratesapi.io/latest?base=USD')
            .then(r => r.json())
            .then(json => {
                this.dolar = json.rates.BRL.toFixed(2);
            })
        }
    },
    created() {
        this.puxarDolar();
    }
}