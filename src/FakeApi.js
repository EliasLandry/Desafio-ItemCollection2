import gow from './images/items/Playstation5/gow.jpg'
import fifa22 from './images/items/Playstation5/fifa22.jpg'
import eldenring from './images/items/Playstation5/eldenring.jpg'
import granturismo7 from './images/items/Playstation5/granturismo7.jpg'
import B2042 from './images/items/Playstation5/2042.jpg'
import assassinsps5 from './images/items/Playstation5/acps5.jpg'
import farcry6 from './images/items/Playstation5/fc6.jpg'
import doom from './images/items/Playstation5/doom.jpg'
import codvanguard from './images/items/Playstation5/codv.jpg'
import bloodborne from './images/items/Playstation5/bloodborne.jpg'
import acunity from './images/items/Playstation4/acunity.jpg'
import alienps4 from './images/items/Playstation4/alien.jpg'
import codcoldwar from './images/items/Playstation4/coldwar.jpg'
import controlps4 from './images/items/Playstation4/control.jpg'
import dstranding from './images/items/Playstation4/dstranding.jpg'


const listaProductos=[
    {
        id:'1',
        title: 'God of War',
        price:6800,
        pictureURL:gow,
        description: 'God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. Es el reinicio de las aventuras protagonizadas por Kratos, que en esta ocasión se traslada a la mitología nórdica junto a su hijo Atreus.',
        category:'playstation5',
        stock: 6
    },
    {
        id:'2',
        title: "Assassin's Creed Unity",
        price:6800,
        pictureURL:acunity,
        description: "Assassin's Creed® Unity es un juego de acción/aventura con el que te sumerges en un París lleno de vida durante su época más oscura: la Revolución Francesa.",
        category:'playstation4',
        stock: 12
    },
    {
        id:'3',
        title: 'FIFA 22',
        price:6200,
        pictureURL:fifa22,
        description: 'FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports.',
        category:'playstation5',
        stock: 37
    },
    {
        id:'4',
        title: 'Elden Ring',
        price:9000,
        pictureURL:eldenring,
        description:'Elden Ring es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment, La historia de Elden Ring es la del Sinluz, un exiliado que regresa a un marchito y enorme reino conocido como las Tierras Intermedias.',
        category:'playstation5',
        stock: 42 
    },
    {
        id:'5',
        title: 'Alien Isolation',
        price:6800,
        pictureURL:alienps4,
        description: 'Alien: Isolation es un videojuego de terror tipo horror de supervivencia y sigilo en primera persona​ desarrollado por The Creative Assembly .',
        category:'playstation4',
        stock: 7
    },
    {
        id:'6',
        title: 'Gran Turismo 7',
        price:10200,
        pictureURL:granturismo7,
        description:'Gran Turismo 7 es un videojuego de simulación de carreras de 2022 desarrollado por Polyphony Digital y publicado por Sony Interactive Entertainment.',
        category:'playstation5',
        stock: 18
    },
    {
        id:'7',
        title: 'Call of Duty Cold War',
        price:6800,
        pictureURL:codcoldwar,
        description: 'Call of Duty: Black Ops Cold War es un videojuego de disparos en primera persona desarrollado por Treyarch y Raven Software y publicado por Activision.',
        category:'playstation4',
        stock: 14
    },
    {
        id:'8',
        title: 'Far Cry 6',
        price:5200,
        pictureURL:farcry6,
        description:'Far Cry 6 es un videojuego de acción-aventura en primera persona. La historia se centra en un bando guerrillero, que intenta derrocar al antagonista Anton Castillo, "El presidente". ',
        category:'playstation5',
        stock: 9
    },
    {
        id:'9',
        title: 'Battlefield 2042',
        price:6000,
        pictureURL:B2042,
        description:'Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por EA.',
        category:'playstation5',
        stock: 8
    },
    {
        id:'10',
        title: "Assassin's Creed Valhalla",
        price:6700,
        pictureURL:assassinsps5,
        description:"Assassin's Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft.Ambientado en el siglo IX, el juego tiene lugar durante la invasión de Gran Bretaña por parte de los Vikingos, con el jugador controlando al guerrero vikingo Eivor dirigiendo a su pueblo contra el rey sajón Alfredo el Grande y sus reinos vasallos.",
        category:'playstation5',
        stock:12
    },
    {
        id:'11',
        title: 'Control',
        price:6800,
        pictureURL:controlps4,
        description: 'Control es un videojuego jugado desde la perspectiva de tercera persona. En el juego, los jugadores pelean contra los enemigos usando la pistola del director, un arma de fuego que puede cambiar de forma. La pistola también puede ser actualizada para mejorar su eficiencia de combate.',
        category:'playstation4',
        stock:12
    },
    {
        id:'12',
        title: 'Doom',
        price:2000,
        pictureURL:doom,
        description:'Los jugadores toman el papel de un marine espacial sin nombre mientras lucha contra las fuerzas demoníacas del infierno que han sido desatadas por la Unión Aerospace Corporation en un planeta colonizado en el futuro, Marte.',
        category:'playstation5',
        stock: 7
    },
    {
        id:'13',
        title: 'Call of Duty VANGUARD',
        price:9500,
        pictureURL:codvanguard,
        description:'La galardonada saga de Call of Duty® vuelve con Call of Duty®: Vanguard, donde los jugadores experimentarán influyentes batallas de la Segunda Guerra Mundial mientras luchan por la victoria en los frentes oriental y occidental de Europa, el Pacífico y el Norte de África.',
        category:'playstation5',
        stock: 22
    },
    {
        id:'14',
        title: 'Bloodborne',
        price:3000,
        pictureURL:bloodborne,
        description:'Bloodborne nos lleva a la decrépita ciudad de Yharnam, cuyos habitantes han sido infectados por una misteriosa enfermedad sanguínea.El videojuego cuenta con una vista en tercera persona y su jugabilidad se enfoca en el combate basado en armas y la exploración.',
        category:'playstation5',
        stock: 5
    },
    {
        id:'15',
        title: 'Death Stranding',
        price:9000,
        pictureURL:dstranding,
        description:'Death Stranding es un videojuego de acción y exploración en mundo abierto, que transcurre en un mundo postapocalíptico en el que un evento conocido como "Death Stranding" fusionó el mundo de los vivos y el de los muertos.',
        category:'playstation4',
        stock: 6
    },
    
]

export const getProductos = new Promise((resolve, reject)=>{
    
        resolve(listaProductos)
  });