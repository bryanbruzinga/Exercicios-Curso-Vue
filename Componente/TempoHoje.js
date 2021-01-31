export default {
    name: "TempoHoje",
    data() {
        return {
            temperaturaMaxima: 0,
        }
    },
    template: `<p>Rio de Janeiro, máxima de: {{temperaturaMaxima}}</p>`,
    methods: {
        puxarTempo() {
            fetch('https://www.metaweather.com/api/location/455825/')
            .then(r => r.json())
            .then(json => {
                this.temperaturaMaxima = json.consolidated_weather[0].max_temp.toFixed(2)
            })
        }
    },
    created() {
        this.puxarTempo()
    }
}