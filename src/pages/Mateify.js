import React from 'react';
import Box from '@material-ui/core';
import TableUsers from '../components/TableUsers';
import TableSongs from '../components/TabeleSongs';
import './Mateify.css';

export const Mateify = () => {
    return (
        <div className="divContainer">

            <Box className="userTable">
                <div className="tableuser">
                    <TableUsers />
                </div>
            </Box>

            <Box>
                <div className="tablesongs">
                    <TableSongs />
                </div>
            </Box>

        </div>
    )
}

export default Mateify;