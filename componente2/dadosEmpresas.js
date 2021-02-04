import ResultadoDados from './ResultadoDados.js';
export default  {
    name: 'DadosEmpresa',
    components: {
        ResultadoDados
    },
    data(){
        return {
            simbolo: '',
            dados: {}
        }
    },
    template: 
        `
        <div>
        <input type="text" v-model="simbolo" placeholder="Digite o simbolo da empresa." />
        <button @click="puxar">Puxar dados</button>
        <resultado-dados :dados="dados"></resultado-dados>
        </div>
        `,
    methods: {
        puxar() {
            fetch(`https://cloud.iexapis.com/stable/stock/${this.simbolo}/quote?token=pk_3c5b46971934405cbd9523a2e156136f`)
            .then(r => r.json())
            .then(json => {
                this.dados = json;
            })
        }
    }
}