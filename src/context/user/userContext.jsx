import React from 'react'
import { useState } from 'react'
import initContext from '../notes/initContext'

const response = await fetch(`${host}/api/notes/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        // "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmI3ZGM1NDVhZmMxOTYxNDA1MGZjYiIsImlhdCI6MTcwMTcxOTYyOH0.IREKF9PoMHcCyoVQyKpLtQC7xPZ692fE-Obahc3XMAk"
    },
    body: JSON.stringify({ email: credentials.email, password: credentials.password }),
});
const jsonData = await response.json();
console.log(jsonData)
