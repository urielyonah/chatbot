const responseObj = {
    hola: "¡Hola! ¿En qué puedo ayudarte?",
    Hola: "¡Hola! ¿En qué puedo ayudarte?",
    HOLA: "¡Hola! ¿En qué puedo ayudarte?",
    hey: "¡Hey! ¿Qué tal? ¿En qué puedo ayudarte?",
    servicios: "Consultas generales, vacunaciones, cirugías, análisis clínicos y más.",
    today: "Hoy es " + new Date().toDateString(),
    time: "La hora actual es " + new Date().toLocaleTimeString(),
    precios:"Los precios de nuestros servicios veterinarios varían según el tipo de servicio y el tamaño de la mascota. Para obtener información precisa sobre los precios, te recomendamos comunicarte directamente con nuestra veterinaria. ¿Hay algo más en lo que pueda ayudarte?",
    citas:"Agendar una cita para tu mascota llamándonos al número de teléfono XXX-XXXX",
    vacunas:"Las vacunas necesarias para tu mascota y su frecuencia de administración pueden variar según su especie, edad y estado de salud. Es recomendable que consultes con nuestro equipo veterinario, quienes podrán brindarte información precisa sobre las vacunas adecuadas y su programación. ¿Hay algo más en lo que pueda ayudarte?",
    cuidado: "dieta equilibrada y agua fresca, ejercicio diario, vacunas y desparasitaciones",
  };
  
const fetchResponse = (userInput) => {
    return new Promise((res, reject) => {
        try {
            setTimeout(() => {
                res(responseObj[userInput]);
            }, 1200);
        } catch (error) {
            reject(error);
        }
    });
}

const chatBotService={
    getBotResponse(userInput){
        return fetchResponse(userInput);
    },
};

export default chatBotService;