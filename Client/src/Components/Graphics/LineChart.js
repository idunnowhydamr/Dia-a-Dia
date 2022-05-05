import {useMemo} from 'react';
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"
//Permite dibujar graficos de linea
import {Line} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const labels = [100, 200, 300, 400, 500, 600, 700];

const options = {
    //Viene de de filler para generar un efecto debajo de los puntos
    fill:true,
    responsive:true,
    scales: {
        y: {
            min: 0,
        },
    }
}
export default function LineChart (){
    //Memorizamos los datos que le vamos a pasar al grafico

    const data = useMemo(function () {
        //react chart pide que se le pase un objeto que tenga una clave llamada dataset(Es la configuracion de los datos)
        return{
            datasets: [
                {
                    //Titulo
                    label: 'Mis datos',

                    //Eje y
                    data:scores,

                    //Tension de las lineas
                    tension: 0.3,

                    //Color de las lineas
                    borderColor: "green",

                    //Tamaño de los puntos
                    pointRadius: 10,

                    //Color de los puntos
                    //pointBackgroundColor:"radial-gradient(circle, rgba(137,251,63,1) 0%, rgba(252,240,70,1) 100%)"

                    //Color para el relleno de fill
                    //backgroundColor:"rgba(0,153,112, 0.3)",
                    
                    //Segementar parte del grafico
                    segment: {
                    
                        backgroundColor: function (context){
                            //Nos aseguramos que el contexto sea un segmento
                           if(context.type === 'segment'){
                               //Si el punto final es par se pinta de un color sino se pinta de otro
                              return context.p1DataIndex % 2 === 0 ? "rgba(0,0,0,0.4797269249496674)" : "rgba(157,157,157,0.4797269249496674)";
                           }
                       }
                    }
                }
            ],
            //Eje x
            labels
        }
    },[]);

    //Se devuelve el componente
    return <Line data={data} options={options} />
}