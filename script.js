const arcanos = [
    { nombre: "THE FOOL.", imagen: "imagenes/0.jpg.png", mensaje: "A new beginning awaits. Embrace the unknown with an open heart and a leap of faith." },
    { nombre: "THE MAGICIAN.", imagen: "imagenes/1.jpg.png", mensaje: "You possess all the tools needed to manifest your desires. Focus your willpower." },
    { nombre: "THE HIGH PRIESTESS.", imagen: "imagenes/2.jpg.png", mensaje: "Trust your intuition. Hidden knowledge and deep inner wisdom are guiding you today." },
    { nombre: "THE EMPRESS.", imagen: "imagenes/3.jpg.png", mensaje: "A time of abundance and nurturing energy. Focus on creativity and natural growth." },
    { nombre: "THE EMPEROR.", imagen: "imagenes/4.jpg.png", mensaje: "Structure and stability are key. Take authority over your life's direction." },
    { nombre: "THE HIEROPHANT.", imagen: "imagenes/5.jpg.png", mensaje: "Seek wisdom from established traditions, deep study, or a trusted mentor." },
    { nombre: "THE LOVERS.", imagen: "imagenes/6.jpg.png", mensaje: "A profound choice approaches. Align your actions with your deepest values and passions." },
    { nombre: "THE CHARIOT.", imagen: "imagenes/7.jpg.png", mensaje: "Victory through discipline. Stay focused and overcome obstacles with determination." },
    { nombre: "STRENGTH.", imagen: "imagenes/8.jpg.png", mensaje: "Inner courage and patience will tame any beast. Approach challenges with gentle power." },
    { nombre: "THE HERMIT.", imagen: "imagenes/9.jpg.png", mensaje: "Withdraw from the noise. Soul-searching and introspection will bring the answers you seek." },
    { nombre: "WHEEL OF FORTUNE.", imagen: "imagenes/10.jpg.png", mensaje: "The cycles of life are turning. Adapt to change and trust in the shifts of destiny." },
    { nombre: "JUSTICE.", imagen: "imagenes/11.jpg.png", mensaje: "Balance and fairness will prevail. Consider the long-term consequences of your actions." },
    { nombre: "THE HANGED MAN.", imagen: "imagenes/12.jpg.png", mensaje: "Pause and look at things from a new perspective. Surrender brings true enlightenment." },
    { nombre: "DEATH.", imagen: "imagenes/13.jpg.png", mensaje: "A necessary ending makes way for a powerful transformation. Let go of the old." },
    { nombre: "TEMPERANCE.", imagen: "imagenes/14.jpg.png", mensaje: "Find your middle ground. Patience, alchemy, and moderation will restore your harmony." },
    { nombre: "THE DEVIL.", imagen: "imagenes/15.jpg.png", mensaje: "Beware of unhealthy attachments or illusions holding you back. You have the power to free yourself." },
    { nombre: "THE TOWER.", imagen: "imagenes/16.jpg.png", mensaje: "Sudden upheaval tears down false foundations. Embrace the clearing to rebuild stronger." },
    { nombre: "THE STAR.", imagen: "imagenes/17.jpg.png", mensaje: "Hope and healing are yours. The universe is blessing you with renewed inspiration and peace." },
    { nombre: "THE MOON.", imagen: "imagenes/18.jpg.png", mensaje: "Pay attention to your dreams and illusions. Not everything is as it seems in the shadows." },
    { nombre: "THE SUN.", imagen: "imagenes/19.jpg.png", mensaje: "Joy, success, and vitality! Step into the light, celebrate your achievements and radiate confidence." },
    { nombre: "JUDGEMENT.", imagen: "imagenes/20.jpg.png", mensaje: "A spiritual awakening calls you. Reflect on your past and rise to a higher, truer purpose." },
    { nombre: "THE WORLD.", imagen: "imagenes/21.jpg.png", mensaje: "Completion and total fulfillment. You have successfully reached the end of a major karmic cycle." }
];
const btnRevelar = document.getElementById('btn-revelar');
const imagenCarta = document.getElementById('imagen-carta');
const nombreCarta = document.getElementById('nombre-carta');
const interpretacionCarta = document.getElementById('interpretacion-carta');

// Simulamos el tiempo de carga, pero devolvemos el mensaje real de la carta
async function consultarTarotistaIA(mensajeDeLaCarta) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensajeDeLaCarta);
        }, 2000);
    });
}

btnRevelar.addEventListener('click', async () => {
    const indiceAleatorio = Math.floor(Math.random() * arcanos.length);
    const cartaElegida = arcanos[indiceAleatorio];

    imagenCarta.src = cartaElegida.imagen;
    nombreCarta.textContent = cartaElegida.nombre;
    interpretacionCarta.textContent = "Channeling the energy of the stars...";
    
    btnRevelar.disabled = true;
    btnRevelar.textContent = "Consulting...";

    // Le pasamos el mensaje específico de la carta a nuestra función
    const mensajeFinal = await consultarTarotistaIA(cartaElegida.mensaje);

    interpretacionCarta.textContent = mensajeFinal;
    btnRevelar.disabled = false;
    btnRevelar.textContent = "DRAW ANOTHER CARD";
});