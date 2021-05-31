import React, {useState} from 'react';  
import './App.css';
import MyBody from './components/basicos/MyBody';
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicação/direta/Pai';
import Super from './components/comunicação/indireta/Super';
import InputComp from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/megasena/Mega';

function App() {

  const[str,setStr] = useState("A nha nha");

  function handleClick() {
    if(str === "A nha nha"){
      setStr("kamehameha");
    }
    else{
      setStr("A nha nha");
    }
  }

  return (
    <div className="App">

      <h1>Fundamentos</h1>

      <div className="Cards">
      
        <Card titulo="Megasena" color='#8f83d8'>
          <Mega qtdeNumero={8}></Mega>
        </Card>

        <Card titulo="condicional" color='#FA6900'>
          <Condicional numero={9}></Condicional>
        </Card>
        
        <Card titulo="condicional com if" color='#E94c6f'>
          <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>

        <Card titulo="componente com parametro X" color='#008bba'>
          <ComParametro tit="título" subtit="subtítulo"></ComParametro>
        </Card>
        
        <Card titulo="componente com filhos X" color='#E94c6f'>
          <ComFilhos>
            <Repeticao></Repeticao>
          </ComFilhos>
        </Card>
        
        <Card titulo="primeiro comp" color='#FF85CB'>
          <Primeiro/>
        </Card>

        <Card titulo="pais e filhos" color='#D96459'>
          <Pai sobrenome="Freitas"/>
        </Card>

        <Card titulo="sub e sup" color="#0e9aa7">
          <Super></Super>
        </Card>

        <Card titulo="Form">
          <InputComp></InputComp>
        </Card>

        <Card titulo="Contador" color="#293E6A">
          <Contador passo={5}></Contador>
        </Card>
     



        <MyBody content={str}></MyBody>
        <button onClick={() => handleClick()}>Mudar string</button>
      </div>
    </div>
  );
}

export default App;
