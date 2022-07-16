import React, { useState, useEffect } from 'react';
import './styles.css'

import {Card} from'../../componets/card';

export function Home() {
  const [studentName, setStudentName] = useState<string>('');
  const [students, setStudents] = useState<any[]>([]);
  const [user, setUser] = useState( {name:'', avatar:''});

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/bllogwill')
      const data = await response.json();
      console.log("DADOS ===>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    } 
        
    fetchData();
    }, []);

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
    

    return (
      <div className='container'>
      <header>
      <h1>Lista de Presenca</h1> 
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} />
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
