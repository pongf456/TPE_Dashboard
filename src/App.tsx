import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-screen h-screen flex flex-col items-center justify-center'>
    <Card className='m-2'>
      <CardHeader>
        <CardTitle className='text-violet-800'>Shadcn getting started</CardTitle>
      </CardHeader>
      <CardContent>
        El contador tiene asignado el <span className='font-bold text-violet-950'>{count}</span>
      </CardContent>
    </Card>
    <Button onClick={()=> setCount(count + 1)} variant={'outline'}>
      Cambiar contador
    </Button>
  </div>
  )
}

export default App
