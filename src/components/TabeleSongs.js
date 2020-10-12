import React from 'react';
import {
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    Paper
} from '@material-ui/core';
import Boton from './Boton';
import '../styles/TableSongs.css';

export const TableSongs = () => {
    return (
        <div>
            <Grid container>
                <Paper className="boxTable">
                    <TableContainer className="tableBox">
                        <Grid item xs={12}>
                            <div className="listTitle">
                                <h2>Lista de canciones favoritas</h2>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TableHead>
                                <TableRow className="tableHeader">
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Artista</TableCell>
                                    <TableCell>Album</TableCell>
                                    <TableCell>Duracion</TableCell>
                                </TableRow>
                            </TableHead>
                        </Grid>
                        <Grid item xs={12}>
                            <TableHead>
                                <TableRow key="">
                                    <TableCell>ejemploide</TableCell>
                                    <TableCell>ejemploide</TableCell>
                                    <TableCell>ejemploide</TableCell>
                                    <TableCell>ejemploide</TableCell>
                                </TableRow>
                            </TableHead>
                        </Grid>
                    </TableContainer>
                    <Grid item xs={12}>
                        <div className="buttonDiv">
                            <Boton button_variant="contained" button_color="secondary" button_name="Agregar" />
                            <Boton button_variant="contained" button_color="primary" button_name="Eliminar" />
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default TableSongs;