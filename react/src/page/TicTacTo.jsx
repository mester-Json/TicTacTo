import TicTac from '../components/ticttacto/TicTacTo'
import Game from '../components/Game/Game'
import Board from '../components/board/Board'
import Nav from '../components/nav/Nav'


function TicTacGame() {
    return (
        <div>
            <Nav />
            <TicTac />
            <Game />
            <Board />
        </div>
    )
}

export default TicTacGame