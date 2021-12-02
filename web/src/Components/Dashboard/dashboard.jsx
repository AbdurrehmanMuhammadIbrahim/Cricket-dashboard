import { Formik, Field, Form, useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import io from 'socket.io-client';

// import * as Yup from 'yup';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from "./../../core"
import { useEffect, useState } from "react";


function Dashboard() {

    const [score, setScore] = useState({
        tournament: "",
            RunOut: '',
            over: '',
            Playerone: '',
            plyonerun: '',
            playertwo: '',
            plytworun: '',
            Runrate: '',
            baller1: '',
            balOneOver: '',
            balOneRun: '',
            baller2: '',
            balTwoOver: '',
            balTwoRun: '',
            Targets: '',
    });

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/data`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data)
            })
    }, [])

        // onSubmit: function (values) {
            const submit = () => {
            console.log("values: ", score)
            axios.post(`${baseUrl}/api/v1/data`, score
            // {
            
                // tournament: values.tournament,
                // RunOut: values.RunOut,
                // over: values.over,
                // Playerone: values.Playerone,
                // plyonerun: values.plyonerun,
                // playertwo: values.playertwo,
                // plytworun: values.plytworun,
                // Runrate: values.Runrate,
                // baller1: values.baller1,
                // balOneOver: values.balOneOver,
                // balOneRun: values.balOneRun,
                // baller2: values.baller2,
                // balTwoOver: values.balTwoOver,
                // balTwoRun: values.balTwoRun,
                // Targets: values.Targets,
            // }
            )
                .then((res) => {
                    console.log("res: ", res.data);
                    if (res.data) {
                        console.log("data created successful")
                    }
                    else {
                        alert("invalid data")
                    }
                }
                )
        }
    // }
    // );

    return (
        <center>
            <div style={{ padding: "1rem" }} className="scores">
                <h3 style={{ margin: "auto", padding: "1rem", textAlign: "center" }}>Dashboard</h3>

                {/* <form onSubmit={formik.handleSubmit}> */}
                    <Stack spacing={2}>

                        <TextField 
                        fullWidth
                            color="secondary"
                            id="outlined-basic"
                            label="Name Of Teams"
                         
                            name="tournament"
                            // value={formik.values.tournament}
                            // onChange={formik.handleChange}
                            value={score.tournament}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, tournament: e.target.value }
                                })
                            }} 
                            //  error={formik.touched.tournament && Boolean(formik.errors.tournament)}
                            // helperText={formik.touched.tournament && formik.errors.tournament}
                        /> <TextField
                            fullWidth
                            className="text"
                            color="secondary"

                            id=" RunOut"
                            name="RunOut"
                            label="Run/Out"
                            // value={formik.values.RunOut}
                            // onChange={formik.handleChange}
                            value={score.RunOut}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, RunOut: e.target.value }
                                })
                            }} 
                            // error={formik.touched.RunOut && Boolean(formik.errors.RunOut)}
                            // helperText={formik.touched.RunOut && formik.errors.RunOut}
                        />

                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"

                            id="over"
                            name="over"
                            label="Overs"
                            // value={formik.values.over}
                            // onChange={formik.handleChange}
                            value={score.over}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, over: e.target.value }
                                })
                            }} 
                            // error={formik.touched.over && Boolean(formik.errors.over)}
                            // helperText={formik.touched.over && formik.errors.over}
                        />

                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"

                            id=" Playerone"
                            name="Playerone"
                            label="NameOfBatsman"
                            // value={formik.values.Playerone}
                            // onChange={formik.handleChange}
                            value={score.Playerone}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, Playerone: e.target.value }
                                })
                            }} 
                            // error={formik.touched.Playerone && Boolean(formik.errors.Playerone)}
                            // helperText={formik.touched.Playerone && formik.errors.Playerone}
                        />


                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"

                            id=" plyonerun"
                            name="plyonerun"
                            label="BatsmanRun"
                            // value={formik.values.plyonerun}
                            // onChange={formik.handleChange}
                            value={score.plyonerun}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, plyonerun: e.target.value }
                                })
                            }} 
                            // error={formik.touched.plyonerun && Boolean(formik.errors.plyonerun)}
                            // helperText={formik.touched.plyonerun && formik.errors.plyonerun}
                        />

                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"
                            id="playertwo"
                            name="playertwo"
                   label="NameOfBatsman"
                //    value={formik.values.playertwo}
                //    onChange={formik.handleChange} 
               
                            value={score.playertwo}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, playertwo: e.target.value }
                                })
                            }} 
                            // error={formik.touched.playertwo && Boolean(formik.errors.playertwo)}
                            // helperText={formik.touched.playertwo && formik.errors.playertwo}
                        />

                        <TextField
                            fullWidth
                            color="secondary"
                            className="text"
                            id="plytworun"
                            name="plytworun"
                            label="BatsmanRun" 
                            // value={formik.values.plytworun}
                            // onChange={formik.handleChange}
                            value={score.plytworun}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, plytworun: e.target.value }
                                })
                            }} 
                            // error={formik.touched.plytworun && Boolean(formik.errors.plytworun)}
                            // helperText={formik.touched.plytworun && formik.errors.plytworun}
                        />

                        <TextField
                            fullWidth
                            color="secondary"
                            className="text"
                            id="Runrate"
                            name="Runrate"
                            label="RunRate"
                            type="Runrate" 
                            // value={formik.values.Runrate}
                            // onChange={formik.handleChange}
                            value={score.Runrate}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, Runrate: e.target.value }
                                })
                            }} 
                            // error={formik.touched.Runrate && Boolean(formik.errors.Runrate)}
                            // helperText={formik.touched.Runrate && formik.errors.Runrate}
                        />


                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"

                            id=" baller1"
                            name="baller1"
                            label="NameOfBaller" 
                            // value={formik.values.baller1}
                            // onChange={formik.handleChange}
                            value={score.baller1}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, baller1: e.target.value }
                                })
                            }} 
                            // error={formik.touched.baller1 && Boolean(formik.errors.baller1)}
                            // helperText={formik.touched.baller1 && formik.errors.baller1}
                        />

                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"
                            id="balOneOver"
                            name="balOneOver"
                            label="BallerOver" 
                            // value={formik.values.balOneOver}
                            // onChange={formik.handleChange}
                            value={score.balOneOver}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, balOneOver: e.target.value }
                                })
                            }} 
                            // error={formik.touched.balOneOver && Boolean(formik.errors.balOneOver)}
                            // helperText={formik.touched.balOneOver && formik.errors.balOneOver}
                        />

                        <TextField
                            fullWidth
                            color="secondary"
                            className="text"
                            id="balOneRun"
                            name="balOneRun"
                            label="Runs" 
                            // value={formik.values.balOneRun}
                            // onChange={formik.handleChange}
                            value={score.balOneRun}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, balOneRun: e.target.value }
                                })
                            }} 
                            // error={formik.touched.balOneRun && Boolean(formik.errors.balOneRun)}
                            // helperText={formik.touched.balOneRun && formik.errors.balOneRun}
                        />
                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"

                            id=" baller2"
                            name="baller2"
                            label="NameOfBaller" 
                            // value={formik.values.baller2}
                            // onChange={formik.handleChange}
                            value={score.baller2}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, baller2: e.target.value }
                                })
                            }} 
                            // error={formik.touched.baller2 && Boolean(formik.errors.baller2)}
                            // helperText={formik.touched.baller2 && formik.errors.baller2}
                        />

                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"

                            id=" balTwoOver"
                            name="balTwoOver"
                            label="BallerOver" 
                            // value={formik.values.balTwoOver}
                            // onChange={formik.handleChange}
                            value={score.balTwoOver}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, balTwoOver: e.target.value }
                                })
                            }} 
                            // error={formik.touched.balTwoOver && Boolean(formik.errors.balTwoOver)}
                            // helperText={formik.touched.balTwoOver && formik.errors.balTwoOver}
                        />

                        <TextField
                            fullWidth
                            className="text"
                            color="secondary"

                            id=" balTwoRun"
                            name="balTwoRun"
                            label="Runs"

                            // value={formik.values.balTwoRun}
                            // onChange={formik.handleChange}
                            value={score.balTwoRun}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, balTwoRun: e.target.value }
                                })
                            }} 
                            // error={formik.touched.balTwoRun && Boolean(formik.errors.balTwoRun)}
                            // helperText={formik.touched.balTwoRun && formik.errors.balTwoRun}
                        />

                        <TextField

                            fullWidth
                            color="secondary"
                            className="text"
                            id="Target"
                            name="Targets"
                            label="Target"
                           
                            // value={formik.values.Targets}
                            // onChange={formik.handleChange}
                            value={score.Targets}
                            onChange={(e) => {
                                setScore((prev) => {
                                    return { ...prev, Targets: e.target.value }
                                })
                            }} 
                            // error={formik.touched.Targets && Boolean(formik.errors.Targets)}
                            // helperText={formik.touched.Targets && formik.errors.Targets}
                        />







                        <Button color="secondary" variant="contained" fullWidth type="submit"  onClick={submit}>
                            Submit
                        </Button>

                    </Stack>
                {/* </form> */}
            </div>
        </center>
    );
}

export default Dashboard;