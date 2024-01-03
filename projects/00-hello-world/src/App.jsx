import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [{
    userName: 'valentainn4',
    name: 'valen chikito',
    isFollowing: true
},
{
    userName: 'dailyhalfhalf',
    name: 'daily todoroki',
    isFollowing: false
},
{
    userName: 'Thomimartinez2',
    name: 'thomi',
    isFollowing: false
},
{
    userName: 'Octikz',
    name: 'Octikz',
    isFollowing: true
}
]

export function App() {
    // Puedo pasar una funcion x parametro
    const formatUserName = (userName) => `@${userName}`;

    return (
        <div className='app'>
            {users.map((user => {
                const { userName, name, isFollowing } = user;
                return (
                    <TwitterFollowCard userName={userName} key={userName}>
                        <strong>{name}</strong>
                    </TwitterFollowCard>
                )
            }))}
        </div >
    )
}