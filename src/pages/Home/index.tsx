import React, { useState } from 'react';
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
    setStudents([newStudent]);
  }
    
    return (
      <div className='container'>
      <h1>Lista de Presenca</h1>  

      <h1>Nome: {studentName}</h1>

      <input 
        type="text" 
        placeholder="Digite o Nome..."
        onChange={e => setStudentName(e.target.value)}
      />
            
      <button type="button">Adcionar</button>

      {
        students.map(student => {
          return(
            <Card 
              name={student.name} 
              time={student.time} 
            />
          ) 
        })       
      }            
    </div>
  )
}
