import {useMemo} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const scores = [12, 19, 3, 5, 2, 3];
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

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
export default function DoughnutChart (){
    //Memorizamos los datos que le vamos a pasar al grafico

    const data = useMemo(function () {
        //react chart pide que se le pase un objeto que tenga una clave llamada dataset(Es la configuracion de los datos)
        return{
            datasets: [
                {
                    label: '# of Votes',
                    data:scores,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  }
            ],
            //Eje x
            labels
        }
    },[]);

    //Se devuelve el componente
    return <Doughnut data={data} options={options} />
}