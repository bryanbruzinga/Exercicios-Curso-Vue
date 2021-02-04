export default {
    name: 'ResultadoDados.js',
    props: ["dados"],
    template:
        `
        <ul>
            <li v-for="(dado, index) in dados">{{index}}: {{dado}}</li>
        </ul>
        `  
}