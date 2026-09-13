import eiffelTower from "./eiffelTower.jpg";
import notredam from "./notredamdeparis.jpg";
import champs from "./champselysees.jpg";
import louvre from "./louvre.jpg";
import arc from "./arcdetriophe.jpg";
import body from "./Body.css";

function Body(){
    return(
        <body>
            <div class="sight">
                <img src={eiffelTower} alt="one" />
                <p>The Eiffel Tower is named after the engineer Gustave Eiffel, whose company designed and built the tower. The tower is 324 metres tall. It is the tallest structure in Paris. The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m above the ground – the highest observation deck accessible to the public in the European Union.</p>
            </div>
            <div class="sight">
                <img src={notredam} alt="two" />
                <p>Notre-Dame de Paris is a medieval Catholic cathedral. It is the most famous of the Gothic cathedrals of the Middle Ages. The cathedral's construction began in 1160 and was largely complete by 1260, though it was modified frequently in the following centuries. While undergoing renovation and restoration, the roof of Notre-Dame caught fire on the evening of 15 April 2019. Burning for around 15 hours, the cathedral sustained serious damage.
                </p>
            </div>
            <div class="sight">
                <img src={champs} alt="three" />
                <p>The Avenue des Champs-Élysées is an avenue in Paris, France. It is 1.9 kilometres long and 70 metres wide, running between the Place de la Concorde and the Place Charles de Gaulle, where the Arc de Triomphe is located. It is known for its theatres, cafés, and luxury shops, for the annual Bastille Day military parade, and as the finish of the Tour de France cycle race.</p>
            </div>
            <div class="sight">
                <img src={louvre} alt="four" />
                <p>The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France. In 2019, the Louvre received 9.6 million visitors. The Mona Lisa is on permanent display at the Louvre Museum since 1797.
                </p>
            </div>
            <div class="sight">
                <img src={arc} alt="five" />
                <p>The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, France, standing at the centre of Place Charles de Gaulle. The Arc de Triomphe honours those who fought and died for France in the French Revolutionary and Napoleonic Wars. The Unknown Soldier was buried at the base of the arch in 1921.</p>
            </div>
        </body>
    )
}

export default Body;