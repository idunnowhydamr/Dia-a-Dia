import {useMemo} from 'react';
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"
//Permite dibujar graficos de linea
import {Bar} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
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
export default function BarChart (){
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
                    borderColor: "rgb(75, 192, 192)",

                    //Color para el relleno de fill
                    backgroundColor:"rgba(0,153,112, 0.3)"
                }
            ],
            //Eje x
            labels
        }
    },[]);

    //Se devuelve el componente
    return <Bar data={data} options={options} />
}