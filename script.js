const valoriFattoreEtaSesso = [[30, 20], [20, 25]];
const valoriFattoreAltezza = [0.78, 0.85, 0.93, 1.00, 0.93, 0.85, 0.78, 0.00];
const valoriFattoreDislocazioneVerticale = [1.00, 0.97, 0.93, 0.91, 0.88, 0.87, 0.85, 0.00];
const valoriFattoreDistanzaOrizzontale = [1.00, 0.83, 0.63, 0.50, 0.45, 0.42, 0.00];
const valoriFattoreDislocazioneAngolare = [1.00, 0.90, 0.81, 0.71, 0.62, 0.57, 0.00];
const valoriFattoreGiudizio = [1, 0.90]
const valoriFattoreFrequenza = [[1.00, 0.95, 0.85], [0.94, 0.88, 0.75], [0.84, 0.72, 0.45], [0.75, 0.50, 0.27], [0.52, 0.30, 0.15], [0.37, 0.21, 0.00], [0.00, 0.00, 0.00]];

function calculate() {
    // Get form values
    const eta = document.querySelector('input[name="eta"]:checked').value;
    const sesso = document.querySelector('input[name="sesso"]:checked').value;
    const altezza = document.getElementById('altezza').value;
    const dislocazioneVerticale = document.getElementById('dislocazioneVerticale').value;
    const distanzaOrizzontale = document.getElementById('distanzaOrizzontale').value;
    const dislocazione_angolare = document.getElementById('dislocazione_angolare').value;
    const giudizio = document.querySelector('input[name="giudizio"]:checked').value;
    const frequenza = document.getElementById('frequenza').value;
    const continuita = document.querySelector('input[name="continuita"]:checked').value;
    const pesoCarico = document.getElementById('pesoCarico').value;

    // Calculate
    const fattoreEta = valoriFattoreEtaSesso[eta][sesso];
    const fattoreAltezza = valoriFattoreAltezza[altezza];
    const fattoreDislocazioneVerticale = valoriFattoreDislocazioneVerticale[dislocazioneVerticale];
    const fattoreDistanzaOrizzontale = valoriFattoreDistanzaOrizzontale[distanzaOrizzontale];
    const fattoreDislocazioneAngolare = valoriFattoreDislocazioneAngolare[dislocazione_angolare];
    const fattoreGiudizio = valoriFattoreGiudizio[giudizio];
    const fattoreFrequenza = valoriFattoreFrequenza[frequenza][continuita];

    const kgPesoLimiteRaccomandato = fattoreEta * fattoreAltezza * fattoreDislocazioneVerticale * fattoreDistanzaOrizzontale * fattoreDislocazioneAngolare * fattoreGiudizio * fattoreFrequenza;
    
    const indiceEspozizione = pesoCarico / kgPesoLimiteRaccomandato;

    console.log(kgPesoLimiteRaccomandato, indiceEspozizione);
}
