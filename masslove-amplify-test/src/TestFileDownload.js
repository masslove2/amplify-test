import React from 'react';

import Button from 'react-bootstrap/esm/Button';
import { saveAs } from 'file-saver';

const GAMES_URL = "https://api.chess.com/pub/player/masslove/games/2022/08/pgn"

class TestFileDownload extends React.Component {

    async handleClick(event) {
        console.log(event.target)

        let resp = await fetch(GAMES_URL);
        if (resp.ok) {            
            let text_to_save = await resp.text()

            var blob = new Blob([text_to_save], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "masslove_chesscom_202208.pgn");
        }        
    }

    render() {
        return (
            <div>
                <h1>Test File Download</h1>
                <Button variant="primary" onClick={this.handleClick}>Download file</Button>
            </div>
        )
    }
}

export default TestFileDownload;