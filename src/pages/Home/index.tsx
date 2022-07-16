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

    // 1. validar se o campo e vazio

    if (studentName === ''){
      return
    }

    // 2. Montar (criar) Objeto com o nome
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br",{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
      })
    }

    // 3. Guardar o objeto na lista
    setStudents(prevState=>[...prevState, newStudent]);

    // 4. Limpar o campo nome
    setStudentName('')
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
        value={studentName}
        onChange={event => setStudentName(event.target.value)}
      />
            
      <button type="button" onClick={handleAddStudent}>
        Adcionar
        </button>
      <div className="contentCards">
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
                 
    </div>
  )
}
