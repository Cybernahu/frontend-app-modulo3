import React, { useState, useEffect } from 'react';

import {
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
    Paper
} from '@material-ui/core';
import Boton from './Boton';
import './../styles/TableUsers.css';



export const TableUsers = () => {

    // Estados
    const [user, setUser] = useState([]);
    const [songs, setSongs] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://mateify.herokuapp.com/users');
        const data = await response.json();
        setUser(data);
    }
    
    useEffect(() => {
        getUsers();
    })

    const handleClick = async (e, usuario) => {
        e.preventDefault();
        const response = await fetch("https://mateify.herokuapp.com/users");
        const data = await response.json();
        setSongs(data);
    };



    return (
        <div>
            <Grid container>
                <Paper className="box_table">
                    <TableContainer className="table_box">
                        <div className="list_title">
                            <h2>Lista de Usuarios</h2>
                        </div>
                        <Grid item xs={12}>
                            <TableHead className="table_header">
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Apellido</TableCell>
                                    <TableCell>Edad</TableCell>
                                    <TableCell>Correo</TableCell>
                                    <TableCell className="table_button-view">Canciones Favoritas</TableCell>
                                </TableRow>
                            </TableHead>
                        </Grid>
                        <Grid item xs={12}>
                            <TableHead>
                                {user.length > 0 ? (
                                    user.map((usuario) => (
                                        <TableRow className="lists Usuario" key={usuario._id}>
                                            <TableCell>{usuario.firstName}</TableCell>
                                            <TableCell>{usuario.lastName}</TableCell>
                                            <TableCell>{usuario.age}</TableCell>
                                            <TableCell>{usuario.mail}</TableCell>
                                            <Boton className="button_class"
                                            onClick={(e) => handleClick(e, usuario)}
                                            button_variant="contained"
                                            button_color="secondary"
                                            button_name="Ver" />
                                        </TableRow>
                                    ))
                                ) : (
                                        <p>Cargando...</p>
                                    )}
                            </TableHead>
                        </Grid>
                    </TableContainer>
                    <Grid item xs={12}>
                        <div className="button_div">
                            <Boton onClick="addUserFromDB" className="button_functions" button_variant="contained" button_color="primary" button_name="Agregar" />
                            <Boton onClick="deleteUserFromDB" className="button_functions" button_variant="contained" button_color="secondary" button_name="Eliminar" />
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default TableUsers;