import React from 'react'
import { IState as IPeople} from "../App"

  const List: React.FC<IPeople> = ({people}) => {
    
    const renderList = (): JSX.Element[] => {
        return people.map((person)=> {    
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
        
    }
        

    return (
        <ul>
            { renderList() }
            
        
        </ul>
    )
}

// const List = ({people}: IPeople) => {
//     return (
//         <div>
//             List
//         </div>
//     )
// }

export default List
