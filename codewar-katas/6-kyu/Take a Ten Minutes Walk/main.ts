// Take a Ten Minutes Walk
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
// and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).
// Link: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/typescript
export function isValidWalk(walk: string[]) {
  // La caminata empieza en el nivel 0
  // Por cada elemento en el array camino 1 cuadra, es decir le adiciono 1

  if (walk.length !== 10) return false;

  // Inicializamos las coordenadas para rastrear la posición
  let x = 0;
  let y = 0;

  // Recorremos cada paso y ajustamos las coordenadas según la dirección
  for (const step of walk) {
    if (step === "n") y += 1;
    else if (step === "s") y -= 1;
    else if (step === "e") x += 1;
    else if (step === "w") x -= 1;
  }

  // Al final de la caminata, debemos estar de vuelta en (0, 0)
  return x === 0 && y === 0;
}

// Da un Paseo de Diez Minutos
// Vives en la ciudad de Cartesia, donde todas las calles están dispuestas en una cuadrícula perfecta.
// Llegaste diez minutos antes a una cita, así que decidiste aprovechar la oportunidad para dar un breve paseo.
// La ciudad proporciona a sus ciudadanos una App Generadora de Caminatas en sus teléfonos --
// cada vez que presionas el botón, la app te envía un array de cadenas de una sola letra que representan las direcciones para caminar (por ejemplo, ['n', 's', 'w', 'e']).
// Siempre caminas solo una cuadra por cada letra (dirección) y sabes que te toma un minuto recorrer una cuadra de la ciudad,
// así que crea una función que devuelva `true` si la caminata que la app te da te llevará exactamente diez minutos (no quieres llegar temprano ni tarde!)
// y, por supuesto, te regresará a tu punto de partida. Devuelve `false` en caso contrario.
// Nota: siempre recibirás un array válido que contiene una combinación aleatoria de letras de dirección ('n', 's', 'e', o 'w' únicamente).
// Nunca te dará un array vacío (eso no es una caminata, ¡es quedarse quieto!).

// Entrada: un array de string de una sola letra que representa las direcciones a caminar
// Salida: Retornar verdadero o falso
// Debo crear una funcion que evalue la cantidad de minutos que me llevara recorrer cada direccion.
// La cantidad de tiempo no debe superar los 10 minutos
// si la caminata será exactamente 10 minutos retorno True, caso contrario False
// El problema pide determinar si una serie de pasos representados en un array lleva a una persona de regreso al punto de partida en exactamente diez minutos.
