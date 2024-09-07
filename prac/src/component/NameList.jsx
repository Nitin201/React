

function NameList() {
    const names =['Bruce'  ,'prem' , 'ram']
    const nameList=names.map(name => <h2 key={name}>{name}</h2> )
  return (
    <div>  
        {
          nameList  
        }     
    </div>
  )
}

export default NameList