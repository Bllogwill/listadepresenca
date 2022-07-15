import React, { useState, useEffect } from 'react';
import './styles.css'

import {Card} from'../../componets/card';

export function Home() {
  const [studentName, setStudentName] = useState<string>('');
  const [students, setStudents] = useState<any[]>([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br",{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
      })
    }
    setStudents(prevState=>[...prevState, newStudent]);
  }
    useEffect(() => {
      console.log(" useEffect foi chamado!")
    },[]);

    return (
      <div className='container'>
      <header>
      <h1>Lista de Presenca</h1> 
      <div>
        <strong>William Silva</strong>
        <img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/malta_-_valletta_from_marsamxett_harbour_01_by_clive_vella.jpeg?quality=70&strip=info&w=882&w=636" alt="Foto da malta" />
      </div>
        </header> 

      <h1>Nome: {studentName}</h1>

      <input 
        type="text" 
        placeholder="Digite o Nome..."
        onChange={e => setStudentName(e.target.value)}
      />
            
      <button type="button" onClick={handleAddStudent}>
        Adcionar
        </button>

      {
        students.map(student => {
          return(
            <Card 
              key={student.time}
              name={student.name} 
              time={student.time} 
            />
          ) 
        })       
      }            
    </div>
  )
}
